import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const {width} = Dimensions.get("window");

export const StyledTextInput = styled(TextInput)`
  font-size: 14px;
  width: ${width * 0.6}px;
`;

export const InputGroup = styled.View`
  padding: 0 10px;
`;