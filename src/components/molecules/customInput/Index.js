import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

import Input from "../../atoms/input/Index";

import { InputContainer } from "./Styles";

const CustomInput = (props) => {
  const { icon } = props;
  return (
    <InputContainer>
      {icon()}
      <Input {...props} autoCapitalize="none" />
    </InputContainer>
  );
};

export default CustomInput;
