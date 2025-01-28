import axios from "axios";
import { BASE_URL } from "../endpoints/endpoint";

const authApi = axios.create({
  baseURL: BASE_URL,
});

// Function to refresh the access token
export const refreshToken = async (refresh) => {
  try {
    const response = await authApi.post(getEndPoint("REFRESH"), null, {
      headers: { refresh },
    });
    return response.data.access;
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw error;
  }
};

export default authApi;
