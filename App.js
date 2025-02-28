import * as React from "react";
import "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignupScreen from "./src/components/organisms/signUp/Index";
import FirstPage from "./src/components/organisms/firstPage/Index";
import LoginScreen from "./src/components/organisms/loginPage/Index";
import HomeScreen from "./src/components/organisms/homeScreen/Index";
import Happy from "./src/components/organisms/homeScreen/Happy";
import Sad from "./src/components/organisms/homeScreen/Sad";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import ProfileScreen from "./src/components/organisms/profileScreen/Index";
import EmergencyContactsScreen from "./src/components/organisms/eContactsScreen/Index";
import AboutScreen from "./src/components/organisms/aboutScreen/Index";
import DrawerNavigator from "./src/navigations/DrawerNavigator";
import ChatScreen from "./src/components/organisms/chatScreen/Index";
import MiniGamesScreen from "./src/components/organisms/miniGamesScreen/Index";
import Toast from "react-native-toast-message";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
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
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="Happy"
            component={Happy}
            options={{ title: "Happy" }}
          />
          <Stack.Screen
            name="MiniGamesScreen"
            component={MiniGamesScreen}
            options={{ title: "Mini Games", headerShown: true}}
          />
          <Stack.Screen name="Sad" component={Sad} options={{ title: "Sad" }} />
          <Stack.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={{ title: "Chat", headerShown: true}}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{ title: "Profile" }}
          />
          <Stack.Screen
            name="EmergencyContactsScreen"
            component={EmergencyContactsScreen}
            options={{ title: "Emergency Contacts" }}
          />
          <Stack.Screen
            name="AboutScreen"
            component={AboutScreen}
            options={{ title: "About" }}
          />
          <Stack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{ title: "Drawer Navigator" }}
          />
        </Stack.Navigator>
        <Toast/>
      </NavigationContainer>
    </Provider>
  );
}
