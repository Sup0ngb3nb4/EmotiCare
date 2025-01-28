import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const Container = styled.View`
  flex:1;
  background-color: #ffffff;
`;

export const ChatContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  width: ${width * 0.95}px;
  padding-vertical: ${width * 0.03}px;
  padding-horizontal: ${width * 0.03}px;
  border-radius: ${width * 0.06}px;
  background-color: #ffffff;
  border-color: #ffffff;
  shadow-color: #000;
  shadow-offset: {
    width: 0px;
    height: 2px;
  }
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 4;
  position: absolute;
  bottom: 35px;
  margin-left:10px
`;

export const IconWrapper = styled.TouchableOpacity`
  padding-horizontal: ${width * 0.02}px;
  padding-vertical: ${width * 0.01}px;
`;

export const ChatInput = styled.TextInput`
  flex: 1;
  font-size: ${height < 1000 ? height * 0.02 : height * 0.015}px;
  color: ${({ color }) => color};
`;
