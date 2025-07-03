import getEndPoint from "../endpoints/getEndpoint";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Save tokens
export const storeTokens = async (access, refresh) => {
  try {
    await AsyncStorage.setItem("AccessToken", access);
    await AsyncStorage.setItem("RefreshToken", refresh);
    console.log("Stored Refresh Token:", refresh);
  } catch (error) {
    console.error("Error storing tokens:", error);
  }
};

// Get access token
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

// Refresh token API call
const refreshToken = async (refresh) => {
  try {
    const response = await fetch(getEndPoint("REFRESH"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh }),
    });

    const data = await response.json();

    if (!response.ok || !data.access) {
      throw new Error("Invalid refresh response");
    }

    return data.access;
  } catch (error) {
    console.error("Failed to refresh token:", error);
    throw error;
  }
};

// Refresh access token
export const refreshAccessToken = async () => {
  try {
    const refresh = await AsyncStorage.getItem("RefreshToken");
    if (!refresh) throw new Error("Refresh token not found");

    await AsyncStorage.removeItem("AccessToken");
    console.log("Refresh Token:", refresh);

    const newAccessToken = await refreshToken(refresh);
    await AsyncStorage.setItem("AccessToken", newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    return null;
  }
};

// Dummy expiry check
export const checkAccessTokenExpiry = async () => {
  try {
    const access = await getAccessToken();
    if (!access) return true;
    return false;
  } catch (error) {
    console.error("Error checking access token expiry:", error);
    return true;
  }
};

// Handle token expiration
export const handleAccessToken = async () => {
  try {
    const isAccessTokenExpired = await checkAccessTokenExpiry();
    if (isAccessTokenExpired) {
      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
        return true;
      } else {
        await AsyncStorage.removeItem("AccessToken");
        await AsyncStorage.removeItem("RefreshToken");
        Alert.alert("Session Expired", "Please login again");
        return false;
      }
    }
    return true;
  } catch (error) {
    console.error("Error handling access token:", error);
    return false;
  }
};
