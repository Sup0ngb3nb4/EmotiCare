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
import * as Animatable from "react-native-animatable";
import Toast from "react-native-toast-message";
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
        await storeTokens(response.data.access, response.data.refresh);
        Toast.show({
          type: "success",
          text1: "Successfully logged in!",
          visibilityTime: 3000,
        });
        navigation.navigate("DrawerNavigator");
      } else {
        Toast.show({
          type: "error",
          text1: "Login Failed!",
          text2: "Invalid credentials.",
        });
        Alert.alert("Error", "Invalid email or password.");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        Toast.show({
          type: "error",
          text1: "Login Failed!",
          text2: "Something went wrong.",
        });
        Alert.alert(
          "Login Failed",
          error.response.data.detail || "An error occurred."
        );
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

        <Animatable.View
          animation="pulse"
          iterationCount="infinite"
          useNativeDriver
          style={styles.loginButton}
        >
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </Animatable.View>

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
