import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignupScreen from "./src/components/organisms/signUp/Index";
import FirstPage from "./src/components/organisms/firstPage/Index";
import LoginScreen from "./src/components/organisms/loginPage/Index";
import HomeScreen from "./src/components/organisms/homeScreen/Index";
import Happy from "./src/components/organisms/homeScreen/Happy"
import Sad from "./src/components/organisms/homeScreen/Sad"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstPage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{ title: "First Page" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignupScreen}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: "Login Screen" }}
        />
        {/* <Stack.Screen name="HomeScreen"
        component={HomeScreen}
        options={{title: "Home Screen"}}
        />
        <Stack.Screen name="Happy"
        component={Happy}
        options={{title: "Happy"}}
        />
        <Stack.Screen name="Sad"
        component={Sad}
        options={{title: "Sad"}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
