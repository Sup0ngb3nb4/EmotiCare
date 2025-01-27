import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import Input from '../../atoms/input/Index';

import {
    StyledIcon,
    InputContainer
} from './Styles'


const PasswordInput = (props) => {
  const [hidePassword, setHidePassword] = useState(true);

    const togglePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };
    return (
        <InputContainer>
            <StyledIcon name="lock-outline" size={20} />
            <Input
                {...props}
                autoCapitalize="none"
                keyboardType="default"
                secureTextEntry={hidePassword}
            />
            <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={{ position: 'absolute',right: 10 }}
            >
                <StyledIcon name={hidePassword ? 'eye-off-outline' : 'eye-outline'} size={20}/>
            </TouchableOpacity>
        </InputContainer>
    );
};

export default PasswordInput;
