import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "./Styles";

//Components
import CustomDatePicker from "../../molecules/customDatePicker/Index";
import CustomInput from "../../molecules/customInput/Index";
import PasswordInput from "../../molecules/passwordInput/Index";
import CustomPicker from "../../molecules/customPicker/Index";

//Icons
import {
  SimpleLineIcons,
  Fontisto,
  Foundation,
  AntDesign,
} from "@expo/vector-icons";

const SignUpScreen = ({ navigation }) => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [form, setForm] = React.useState({
    userName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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

          {/* Date of Birth */}
          <CustomDatePicker
            icon={() => <AntDesign name="calendar" size={24} color="black" />}
            placeholder="Date of Birth"
            value={form.dateOfBirth}
            onDateChange={(date) => setForm({ ...form, dateOfBirth: date })}
            placeholderTextColor="#6b7280"
            onFocus={() => setFocusedInput("dateOfBirth")}
            onBlur={() => setFocusedInput(null)}
            isFocused={focusedInput === "dateOfBirth"}
          />

          {/* Gender */}
          <CustomPicker
            placeholder="Gender"
            icon={() => (
              <Foundation name="male-female" size={20} color="#999" />
            )}
            value={form.gender}
            onFocus={() => setFocusedInput("gender")}
            onBlur={() => setFocusedInput(null)}
            isFocused={focusedInput === "gender"}
            data={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
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

        <TouchableOpacity style={styles.loginButton} >
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
