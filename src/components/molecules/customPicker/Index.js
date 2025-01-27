import { Picker } from "@react-native-picker/picker";

//Styled Components
import { Container, IconContainer, TransparentBlock } from "./Styles";

const isPlaceholder = (value) => {
  return value == "";
};

const CustomPicker = ({ state, setState, data, icon, placeholder, edit }) => {
  return (
    <Container>
      <IconContainer>{icon()}</IconContainer>
      {edit === false && <TransparentBlock />}
      <Picker
        selectedValue={state}
        onValueChange={setState}
        placeholder="Gender"
      >
        <Picker.Item
          label={placeholder}
          value=""
          color="#999"
          style={{ fontSize: 14 }}
        />
        {data &&
          data.map(({ label, value }, index) => {
            return (
              <Picker.Item
                key={index}
                label={label}
                value={value ? value : label}
                style={{ fontSize: 14 }}
                color={edit === false ? "#999" : "#000"}
              />
            );
          })}
      </Picker>
    </Container>
  );
};

export default CustomPicker;
