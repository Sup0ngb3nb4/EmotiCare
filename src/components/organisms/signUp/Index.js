import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "./Styles";

// Components
import CustomInput from "../../molecules/customInput/Index";
import PasswordInput from "../../molecules/passwordInput/Index";
import CustomPicker from "../../molecules/customPicker/Index";

// Icons
import { SimpleLineIcons, Fontisto, Foundation } from "@expo/vector-icons";

// API
import api from "../../../api/api";
import getEndPoint from "../../../endpoints/getEndpoint";
import { storeTokens } from "../../../api/tokenManager";

const SignUpScreen = ({ navigation }) => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [form, setForm] = useState({
    userName: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignUp = async () => {
    if (form.password !== form.confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      const response = await api.post(getEndPoint("REGISTER"), {
        username: form.userName,
        email: form.email,
        password: form.password,
        gender: form.gender,
      });
      console.log(response);

      if (response.status == 201) {
        await storeTokens(response.data.access, response.data.refresh);
        navigation.navigate("DrawerNavigator");
      } else {
        console.error("Invalid response format:", response);
        Alert.alert("Error", "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error registering", error);
      Alert.alert(
        "Error",
        "Registration failed. Please try again",
        error.response?.data?.error || "Something went wrong"
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.welcomeText}>Register to EmotiCare!</Text>

        <View style={styles.inputContainer}>
          {/* User Name */}
          <CustomInput
            icon={() => <SimpleLineIcons name="user" size={20} color="#999" />}
            placeholder="Username"
            value={form.userName}
            onChangeText={(userName) => setForm({ ...form, userName })}
            placeholderTextColor="#6b7280"
            onFocus={() => setFocusedInput("userName")}
            onBlur={() => setFocusedInput(null)}
            isFocused={focusedInput === "userName"}
          />

          {/* Gender */}
          <CustomPicker
            value={form.gender}
            onChangeValue={(gender) => setForm({ ...form, gender })}
            icon={() => (
              <Foundation name="male-female" size={20} color="#999" />
            )}
            placeholder="Gender"
            data={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
            edit={true}
          />

          {/* Email */}
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

          {/* Password */}
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

          {/* Confirm Password */}
          <PasswordInput
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={form.confirmPassword}
            onChangeText={(confirmPassword) =>
              setForm({ ...form, confirmPassword })
            }
            placeholderTextColor="#6b7280"
            onFocus={() => setFocusedInput("confirmPassword")}
            onBlur={() => setFocusedInput(null)}
            isFocused={focusedInput === "confirmPassword"}
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <Text style={styles.accountText}>
            Already have an account? {""}
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text style={styles.accountLink}>Sign In</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
