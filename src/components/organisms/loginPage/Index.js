import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "./Styles";

//Components
import CustomInput from "../../molecules/customInput/Index";
import PasswordInput from "../../molecules/passwordInput/Index";

import { Fontisto } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("../../../../assets/counselling.png")}
          style={styles.logo}
        />
        <Text style={styles.welcomeText}>Welcome to EmotiCare!</Text>

        <View style={styles.inputContainer}>
          <CustomInput
            icon={() => <Fontisto name="email" size={20} color="#999" />}
            placeholder="Email"
            keyboardType="email-address"
            value={form.email}
            onChangeText={(email) => setForm({ ...form, email })}
            placeholderTextColor="#6b7280"
            onFocus={() => setFocusedInput("email")}
            onBlur={() => setFocusedInput(null)}
            isFocused={focusedInput === "email"}
          />

          <PasswordInput
            placeholder="Password"
            secureTextEntry={true}
            value={form.password}
            onChangeText={(password) => setForm({ ...form, password })}
            placeholderTextColor="#6b7280"
            onFocus={() => setFocusedInput("Password")}
            onBlur={() => setFocusedInput(null)}
            isFocused={focusedInput === "Password"}
          />
        </View>

        <TouchableOpacity
          style={styles.loginButton}

        >
          <Text style={styles.loginButtonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <Text style={styles.accountText}>
            Don't have an account? {""}
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.accountLink}>Sign Up</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
