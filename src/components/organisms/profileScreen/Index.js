import React, { useEffect, useState } from "react";
import { ScrollView, ActivityIndicator, Alert } from "react-native";
import {
  Label,
  ProfileBackground,
  ProfileDetailsContainer,
  ProfileField,
  ProfilePicture,
  ProfilePictureContainer,
  Value,
  ValueContainer,
} from "./Styles";

// API
import api from "../../../api/api";
import getEndPoint from "../../../endpoints/getEndpoint";
import { getAccessToken, refreshAccessToken } from "../../../api/tokenManager";

const ProfileScreen = () => {
  const [profileData, setProfileData] = useState({
    username: "",
    email: "",
    gender: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { image } = {};

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        let token = await getAccessToken();
        console.log("Access Token Retrieved:", token);

        if (!token) {
          console.error("No access token found");
          throw new Error("Access token is missing");
        }

        const response = await api.get(getEndPoint("PROFILE"), {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
          token = await refreshAccessToken();
          const retryResponse = await api.get(getEndPoint("PROFILE") ,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (retryResponse.ok) {
            const data = await retryResponse.json();
            setProfileData(data);
          } else {
            throw new Error(
              "Failed to fetch profile data after refreshing token."
            );
          }
        } else if (response.ok) {
          const data = await response.json();
          setProfileData(data);
        } else {
          throw new Error("Failed to fetch profile data.");
        }
      } catch (err) {
        console.error(
          "Error fetching profile details:",
          err.response?.data || err.message
        );
        setError("Failed to load profile data.");
        Alert.alert("Error", err.message || "Could not fetch profile details.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Value>Error: {error}</Value>;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ProfilePictureContainer>
        <ProfileBackground />
        <ProfilePicture
          source={
            image
              ? { uri: image }
              : require("../../../../assets/background.jpeg")
          }
        />
      </ProfilePictureContainer>

      <ProfileDetailsContainer>
        <ProfileField>
          <Label>Username</Label>
          <ValueContainer>
            <Value>{profileData.username}</Value>
          </ValueContainer>
        </ProfileField>

        <ProfileField>
          <Label>Email</Label>
          <ValueContainer>
            <Value>{profileData.email}</Value>
          </ValueContainer>
        </ProfileField>

        <ProfileField>
          <Label>Password</Label>
          <ValueContainer>
            <Value>{profileData.password}</Value>
          </ValueContainer>
        </ProfileField>

        <ProfileField>
          <Label>Gender</Label>
          <ValueContainer>
            <Value>{profileData.gender}</Value>
          </ValueContainer>
        </ProfileField>
      </ProfileDetailsContainer>
    </ScrollView>
  );
};

export default ProfileScreen;
