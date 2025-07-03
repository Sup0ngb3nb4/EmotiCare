// import axios from "axios";
// import { BASE_URL } from "../endpoints/endpoint";
// import { getAccessToken, refreshAccessToken } from "./tokenManager";
// import getEndPoint from "../endpoints/getEndpoint";

// const api = axios.create({
//   baseURL: BASE_URL,
// });

// api.interceptors.request.use(
//   async (config) => {
//     const accessToken = await getAccessToken();
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// api.interceptors.response.use(
//   (response) => {
//     console.log("API Response:", response); // Log the full response object
//     return response;
//   },
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

//     console.error("API Error:", error.response?.data || error.message);
//     return Promise.reject(error);
//   }
// );

// export default api;

// export const sendChatMessage = async (message) => {
//   try {
//     const response = await api.post(getEndPoint("CHAT"), {
//       message,
//     });

//     return response.data; // should contain: { reply: "...", history: [...] }
//   } catch (error) {
//     console.error("Failed to send chat message:", error);
//     throw error;
//   }
// };

// export const loadChatHistory = async () => {
//   try {
//     const token = await getAccessToken();
//     const response = await axios.get(getEndPoint("CHAT_HISTORY"), {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     return response.data.history;
//   } catch (error) {
//     console.error("loadChatHistory error:", error);
//     throw error;
//   }
// };

import axios from "axios";
import { BASE_URL } from "../endpoints/endpoint";
import { getAccessToken, refreshAccessToken } from "./tokenManager";
import getEndPoint from "../endpoints/getEndpoint";

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
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    console.log("API Response:", response);
    return response;
  },
  async (error) => {
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

    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Send message to chatbot
export const sendChatMessage = async (message) => {
  try {
    const response = await api.post(getEndPoint("CHAT"), { message });
    return response.data;
  } catch (error) {
    console.error("Failed to send chat message:", error);
    throw error;
  }
};

// Load full chat history
export const loadChatHistory = async () => {
  try {
    const token = await getAccessToken();
    const response = await axios.get(getEndPoint("CHAT_HISTORY"), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.history;
  } catch (error) {
    console.error("loadChatHistory error:", error);
    throw error;
  }
};

export default api;
