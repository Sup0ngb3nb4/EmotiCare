import { LOGIN_ENDPOINT, LOGOUT_ENDPOINT, SIGNUP_ENDPOINT, PROFILE_ENDPOINT} from "./endpoint";

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

    default:
      return null;
  }
};

export default getEndPoint;
