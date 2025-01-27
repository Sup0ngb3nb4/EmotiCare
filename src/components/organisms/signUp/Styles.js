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
    color: '#333333',
    marginVertical: height * 0.05,
  },
  inputContainer: {
    width: '100%',
    paddingVertical: width * 0.05
  },
  
  loginButton: {
    width: '100%',
    height: width * 0.15,
    backgroundColor: '#FFF200',
    borderRadius: width * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: width * 0.03,
  },
  loginButtonText: {
    color: '#000000',
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
  footerContainer:{
    alignItems: "center",
    justifyContent: "center",
    marginTop: width * 0.08
  },
  forgotPasswordText: {
    color: '#6C63FF',
    fontSize: width * 0.037,
    marginBottom: 20,
  },
  accountText: {
    color: '#666666',
    fontSize: width * 0.037,
  },
  accountLink: {
    color: '#6C63FF',
    textDecorationLine: 'underline',
    fontSize: width * 0.037,
  },
});
