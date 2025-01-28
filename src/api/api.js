import axios from "axios";
import { BASE_URL } from "../endpoints/endpoint";
import { getAccessToken, refreshAccessToken } from "./tokenManager";

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  async (config) => {
    const accessToken = await getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// api.interceptors.response.use(
//   (response) => response,

//   async (error) => {
//     const originalRequest = error.config;
//     if (
//       error.response &&
//       error.response.status === 401 &&
//       !originalRequest._retry
//     ) {
//       originalRequest._retry = true;
//       try {
//         const newAccessToken = await refreshAccessToken();
//         if (newAccessToken) {
//           originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//           return api(originalRequest);
//         }
//       } catch (refreshError) {
//         console.error("Error during token refresh:", refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

api.interceptors.response.use(
  (response) => {
    console.log("API Response:", response); // Log the full response object
    return response;
  },
  (error) => {
    const errorMessage =
      error.response?.data?.error || "An unexpected error occurred.";
    console.error("Error:", errorMessage);
    return Promise.reject(errorMessage);
  },
  async (error) => {
    // Error handling remains as-is
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshAccessToken();
        if (newAccessToken) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        console.error("Error during token refresh:", refreshError);
      }
    }
    console.error("API Error:", error.response?.data || error.message); // Log errors
    return Promise.reject(error);
  }
);

export default api;
