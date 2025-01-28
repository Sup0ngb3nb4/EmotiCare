import { Dimensions } from "react-native";
import styled from "styled-components/native";
const { height, width } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  background-color: #f0f8ff;
  padding: ${width * 0.05}px;
`;

export const HeaderContainer = styled.View`
  padding: ${width * 0.04}px;
`;

export const Header = styled.Text`
  font-size: ${width * 0.07}px;
  font-weight: bold;
  color: purple;
  text-align: center;
`;

export const Description = styled.Text`
  font-size: ${width * 0.04}px;
  color: #333;
  line-height: ${width * 0.06}px;
  margin-bottom: ${width * 0.05}px;
  padding: ${width * 0.035}px;
  background-color: #ffffff;
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 3.84px;
  elevation: 2;
`;

export const SectionContainer = styled.View`
  margin-bottom: ${width * 0.05}px;
`;

export const SectionTitle = styled.Text`
  font-size: ${width * 0.05}px;
  font-weight: bold;
  color: purple;
  margin-bottom: ${width * 0.04}px;
  text-transform: uppercase;
`;

export const FeatureList = styled.View`
  padding: ${width * 0.03}px;
  background-color: #ffffff;
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 3.84px;
  elevation: 2;
`;

export const FeatureItem = styled.Text`
  font-size: ${width * 0.04}px;
  color: #333;
  line-height: ${width * 0.06}px;
  margin-bottom: ${width * 0.025}px;
`;
