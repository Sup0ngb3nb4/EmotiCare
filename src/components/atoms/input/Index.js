import { StyledTextInput, InputGroup } from "./Styles";

const Input = (props) => {
  const {
    placeholder,
    value,
    onChangeText,
    autoCapitalize,
    keyboardType,
    fontSize,
    color,
    secureTextEntry,
    maxLength,
    selection,
    contextMenuHidden = false,
    editable,
  } = props;

  return (
    <InputGroup>
      <StyledTextInput
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        color={color}
        fontSize={fontSize}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        selection={selection}
        contextMenuHidden={contextMenuHidden}
        editable={editable}
      />
    </InputGroup>
  );
};

export default Input;
