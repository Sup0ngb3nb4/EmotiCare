import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: width * 0.1,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: width * 0.6,
    height: width * 0.6,
    marginBottom: width * 0.08,
    alignSelf:"center"
  },
  welcomeText: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    color: '#3F2827',
    marginBottom: height * 0.05,
  },
  inputContainer: {
    width: '100%',
    paddingVertical: width * 0.05
  },
  loginButton: {
    width: '96%',
    height: width * 0.15,
    backgroundColor: '#3F2827',
    borderRadius: width * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: width * 0.03,
    marginHorizontal: width * 0.015,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
  footerContainer:{
    alignItems: "center",
    justifyContent: "center",
    marginTop: width * 0.08
  },
  forgotPasswordText: {
    color: '#FF7D29',
    fontSize: width * 0.037,
    marginBottom: 20,
  },
  accountText: {
    color: '#666666',
    fontSize: width * 0.037,
  },
  accountLink: {
    color: '#FF7D29',
    textDecorationLine: 'underline',
    fontSize: width * 0.037,
  },
});
