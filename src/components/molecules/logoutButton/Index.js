import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

//Redux
import { logout } from "../../../redux/auth";
import { IconStyle } from "./Styles";

const LogoutButton = () => {
  const dispatch = useDispatch();
  return (
    <View style={{ marginTop: top || 10, marginBottom: bottom || 10 }}>
      <TouchableOpacity
        onPress={() => dispatch(logout())}
        style={{ flexDirection: "row" }}
      >
        <View style={{ width: "10%" }}>
          <MaterialCommunityIcons
            name="power"
            style={IconStyle({ iconSize: 22, setIconColor: "red" })}
          />
        </View>
        <Text style={{ color: "red" }}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogoutButton;
