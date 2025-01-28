import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const LogoutButton = styled(TouchableOpacity)`
    position: relative;
    bottom: ${height * 0}px;
`;
export const LogoutContainer = styled.View`
    margin: 20px 0px;
    flex-direction : row;
`;

export const Logout = styled.Text`
    margin-left : 10%;
    color: red;
    font-size: 16px;
    
`;

export const IconStyle = ({ iconSize, setIconColor } = {}) => {
    return StyleSheet.create({
      fontSize: iconSize || 20,
      textAlign: "center",
      color: setIconColor || "#6C6C6C",
    });
  };
  