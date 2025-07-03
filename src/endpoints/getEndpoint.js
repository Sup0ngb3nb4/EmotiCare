import {
  LOGIN_ENDPOINT,
  LOGOUT_ENDPOINT,
  SIGNUP_ENDPOINT,
  PROFILE_ENDPOINT,
  CHAT_ENDPOINT,
  CHAT_HISTORY_ENDPOINT,
  REFRESH_ENDPOINT,
} from "./endpoint";

export const getEndPoint = (endpoint) => {
  switch (endpoint) {
    case "REGISTER":
      return SIGNUP_ENDPOINT;

    case "LOGIN":
      return LOGIN_ENDPOINT;

    case "LOGOUT":
      return LOGOUT_ENDPOINT;

    case "REFRESH":
      return REFRESH_ENDPOINT;

    case "PROFILE":
      return PROFILE_ENDPOINT;
    
    case "CHAT":
      return CHAT_ENDPOINT;

    case "CHAT_HISTORY":
      return CHAT_HISTORY_ENDPOINT;

    default:
      return null;
  }
};

export default getEndPoint;
