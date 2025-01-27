import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");


export const InputContainer = styled.View`
  flexDirection: row;
  alignItems: center;
  borderWidth: 1px;
  borderColor: #ccc;
  borderRadius: ${width * 0.03}px;
  paddingVertical: ${height * 0.012}px;
  paddingHorizontal: ${width * 0.03}px;
  marginBottom: ${height * 0.03}px;
`;
