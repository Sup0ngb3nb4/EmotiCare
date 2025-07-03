import React from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import {
  IconStyle,
  Logout,
  LogoutButton,
  LogoutContainer,
} from "../components/molecules/logoutButton/Styles";
import { SimpleLineIcons } from "@expo/vector-icons";

import api from "../api/api";
import getEndPoint from "../endpoints/getEndpoint";

const Separator = () => (
  <View
    style={{
      marginVertical: 8,
      borderBottomColor: "#7B4019",
      borderBottomWidth: StyleSheet.hairlineWidth,
    }}
  />
);

export default function DrawerContent({ navigation }) {
  const drawerItems = [
    { label: "Home", screen: "Home" },
    { label: "Profile", screen: "Profile" },
    { label: "Emergency Contacts", screen: "Emergency Contacts" },
    { label: "About", screen: "About" },
  ];

  const handleLogout = async () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: async () => {
            try {
              await api.post(getEndPoint("LOGOUT"), {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${await AsyncStorage.getItem("access")}`,
                },
              });

              await AsyncStorage.removeItem("access");
              await AsyncStorage.removeItem("refresh");
              navigation.reset({
                index: 0,
                routes: [{ name: "LoginScreen" }],
              });
            } catch (error) {
              console.error("Logout failed:", error);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <View style={{ padding: 20 }}>
          {drawerItems.map((item, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}
                style={{ paddingVertical: 10 }}
              >
                <Text style={{ color: "#7B4019", fontSize: 16 }}>
                  {item.label}
                </Text>
              </TouchableOpacity>
              {index < drawerItems.length - 1 && <Separator />}
            </React.Fragment>
          ))}

          <LogoutButton onPress={handleLogout}>
            <LogoutContainer>
              <SimpleLineIcons
                name="logout"
                style={IconStyle({ setIconColor: "red" })}
              />
              <Logout>Logout</Logout>
            </LogoutContainer>
          </LogoutButton>
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}
