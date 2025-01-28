import React from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  IconStyle,
  Logout,
  LogoutButton,
  LogoutContainer,
} from "../components/molecules/logoutButton/Styles";

import { SimpleLineIcons } from "@expo/vector-icons";

const Separator = () => (
  <View
    style={{
      marginVertical: 8,
      borderBottomColor: "#737373",
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <View style={{ padding: 20 }}>
          {drawerItems.map((item, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                onPress={() =>
                  item?.screen
                    ? navigation.navigate(item.screen)
                    : item.onPress()
                }
                style={{ paddingVertical: 10 }}
              >
                <Text style={{ color: "#508C9B", fontSize: 16 }}>
                  {item.label}
                </Text>
              </TouchableOpacity>
              {index < drawerItems.length - 1 && <Separator />}
            </React.Fragment>
          ))}

          <LogoutButton onPress={() => navigation.navigate("LoginScreen")}>
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
