import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { height, width } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: ${width * 0.05}px;
`;

export const CategoryContainer = styled.View`
  margin-bottom: ${height * 0.02}px;
  padding: ${width * 0.03}px;
  background-color: #ffffff;
  border-radius: ${width * 0.03}px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CategoryTitle = styled.Text`
  font-size: ${width * 0.045}px;
  font-weight: bold;
  color: purple;
  margin-bottom: ${width * 0.02}px;
`;

export const ContactContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const OrganizationText = styled.Text`
  font-size: ${width * 0.039}px;
  color: #555;
`;

export const ContactNumber = styled.Text`
  font-size: ${width * 0.04}px;
  color: purple;
  text-decoration: underline;
`;