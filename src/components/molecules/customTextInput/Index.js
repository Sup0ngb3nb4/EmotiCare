import { TextInput } from "react-native";
import { styles } from "./Styles";

const CustomTextInput = ({
  placeholder,
  keyboardType,
  secureTextEntry,
  onFocus,
  onBlur,
  isFocused,
}) => (
  
  <TextInput
    style={[styles.input, isFocused && styles.inputFocused]}
    placeholder={placeholder}
    keyboardType={keyboardType}
    secureTextEntry={secureTextEntry}
    onFocus={onFocus}
    onBlur={onBlur}
  />
);

export default CustomTextInput;
