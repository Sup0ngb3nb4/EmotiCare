import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "./Styles";

// Components
import CustomInput from "../../molecules/customInput/Index";
import PasswordInput from "../../molecules/passwordInput/Index";

// Icons
import { Fontisto } from "@expo/vector-icons";

// API
import api from "../../../api/api";
import getEndPoint from "../../../endpoints/getEndpoint";
import { storeTokens } from "../../../api/tokenManager";

const LoginScreen = ({ navigation }) => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    // Basic validation for email and password
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in both email and password.");
      return;
    }

    try {
      const response = await api.post(getEndPoint("LOGIN"), {
        email: form.email,
        password: form.password,
      });

      if (response.status == 200) {
        // Store the tokens in AsyncStorage
        await storeTokens(response.data.access, response.data.refresh);
        // Navigate to the DrawerNavigator
        navigation.navigate("DrawerNavigator");
      } else {
        Alert.alert("Error", "Invalid email or password.");
      }
    } catch (error) {
      // Handle API errors
      if (error.response && error.response.data) {
        Alert.alert("Login Failed", error.response.data.detail || "An error occurred.");
      } else {
        Alert.alert("Error", "Login failed. Please try again.");
      }
      console.error("Login Error:", error);
    }
  };

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

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <Text style={styles.accountText}>
            Don't have an account?{" "}
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
