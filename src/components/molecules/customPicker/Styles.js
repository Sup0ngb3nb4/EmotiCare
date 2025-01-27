import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
    borderWidth: 1px;
    borderColor: #ccc;
    borderRadius: ${width * 0.03}px;
    paddingLeft: ${width * 0.07}px;
    height: ${height * 0.065}px;
    marginBottom: ${height * 0.03}px;
`;

export const IconContainer = styled.View`
    position: absolute;
    height: 100%;
    justifyContent: center;
    left: ${width * 0.02}px;
`;

export const TransparentBlock = styled.View`
    backgroundColor: rgba(255, 255, 255, 0.1);
    position: absolute;
    height: 100%;
    width: ${width}px;
    zIndex: 1;
`;