import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Styles";

const FirstPage = ({navigation}) => {
  return (
    <View style={styles.container}>

      <Text style={styles.logoName}>EmotiCare</Text>

      <TouchableOpacity style={styles.signupContainer} onPress={()=>navigation.navigate('SignUp')}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginContainer} onPress={()=>navigation.navigate('LoginScreen')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FirstPage;
