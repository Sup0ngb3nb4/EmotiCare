import styled from "styled-components/native";
import { Dimensions, ScrollView } from "react-native";

const { height, width } = Dimensions.get("window");

export const ProfilePicture = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 80px;
  border-width: 5px;
  border-color: #FFBF78;
`;

export const ProfilePictureContainer = styled.View`
  padding-top: ${height * 0.1}px;
  padding-bottom: ${height * 0.05}px;
  align-items: center;
`;

export const ProfileBackground = styled.View`
  position: absolute;
  height: 120%;
  width: 100%;
  background-color: #7B4019;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const ProfileDetailsContainer = styled.View`
  margin-top: ${height * 0.03}px;
  padding-horizontal: ${width * 0.1}px;
`;

export const ProfileField = styled.View`
  margin-bottom: ${height * 0.04}px;
`;

export const Label = styled.Text`
  font-size: ${width * 0.043}px;
  font-weight: bold;
  color: #7B4019;
  margin-bottom: ${height * 0.01}px;
`;

export const ValueContainer = styled.View`
  background-color: #f9f9f9;
  padding: ${width * 0.03}px;
  border-radius: 8px;
  border: 2px solid #7B4019;
`;

export const Value = styled.Text`
  font-size: 16px;
  color: #555;
`;