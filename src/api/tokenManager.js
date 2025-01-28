import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { refreshToken } from "./authApi";

// Function to store access and refresh tokens in AsyncStorage
export const storeTokens = async (access, refresh) => {
  try {
    await AsyncStorage.setItem("AccessToken", access);
    await AsyncStorage.setItem("RefreshToken", refresh);
    console.log("Stored Refresh Token:", refresh);
  } catch (error) {
    console.error("Error storing tokens:", error);
  }
};

// Function to retrieve access token from AsyncStorage
export const getAccessToken = async () => {
  try {
    const access = await AsyncStorage.getItem("AccessToken");
    console.log("Retrieved Access Token:", access);
    return access;
  } catch (error) {
    console.error("Error retrieving access token:", error);
    return null;
  }
};

// Function to refresh access token using refresh token
export const refreshAccessToken = async () => {
  try {
    const refresh = await AsyncStorage.getItem("RefreshToken");
    if (!refresh) throw new Error("Refresh token not found");

    await AsyncStorage.removeItem("AccessToken");
    console.log("Refresh Token:", refresh);

    const newAccessToken = await refreshToken(refresh); // Use the refresh function
    await AsyncStorage.setItem("AccessToken", newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    return null;
  }
};

// Function to check if access token is expired
export const checkAccessTokenExpiry = async () => {
  try {
    const access = await getAccessToken();
    if (!access) {
      return true; // Access token not found, considered expired
    }
    // Add logic to check if access token is expired based on expiry timestamp
    // Return true if expired, false otherwise
    return false;
  } catch (error) {
    console.error("Error checking access token expiry:", error);
    return true; // Assume token is expired in case of error
  }
};

// Function to handle access token expiration and refreshing
export const handleAccessToken = async () => {
  try {
    const isAccessTokenExpired = await checkAccessTokenExpiry();
    if (isAccessTokenExpired) {
      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
        await storeTokens(response.access, response.refresh);
        return true; // Successfully refreshed access token
      } else {
        // Unable to refresh access token, logout user
        await AsyncStorage.removeItem("AccessToken");
        await AsyncStorage.removeItem("RefreshToken");
        Alert.alert("Session Expired", "Please login again");
        return false;
      }
    }
  } catch (error) {
    console.error("Error handling access token:", error);
    return false;
  }
};
