import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../components/organisms/homeScreen/Index";
import ProfileScreen from "../components/organisms/profileScreen/Index";
import EmergencyContactsScreen from "../components/organisms/eContactsScreen/Index";
import AboutScreen from "../components/organisms/aboutScreen/Index";
import DrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ navigation }) {


  return (
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#F5F0CD",
            width: 250,
          },
          headerStyle: {
            backgroundColor: "#7B4019",
          },
          drawerActiveTintColor: "white",
          drawerInactiveTintColor: "white",
          headerTitleStyle: {
            color: "#FFFFFF",
          },
          headerTintColor: "#FFFFFF",
        }}
        drawerContent={(props) => (
          <DrawerContent {...props} />
        )}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen
          name="Emergency Contacts"
          component={EmergencyContactsScreen}
        />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
  );
}
