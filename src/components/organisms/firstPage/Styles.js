import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF200",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: width * 0.1,
  },
  logoName: {
    marginBottom: height * 0.3,
    color: "#303841",
    fontWeight: "bold",
    fontSize: width * 0.13,
  },
  signupContainer: {
    width: "100%",
    height: width * 0.15,
    backgroundColor: "#303841",
    borderRadius: width * 0.05,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: width * 0.05,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14
  },
  loginContainer: {
    width: "100%",
    height: width * 0.15,
    backgroundColor: "#F5F5F5",
    borderRadius: width * 0.05,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: width * 0.05,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14
  },
  signupText: {
    color: "#F5F5F5",
    fontWeight: "bold",
    fontSize: width * 0.045,
  },
  loginText: {
    color: "#303841",
    fontWeight: "bold",
    fontSize: width * 0.045,
  },
});
