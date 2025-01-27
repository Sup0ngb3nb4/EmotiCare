import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyledTabButton, styles, TabItemImage, TabItemText } from "./Styles";
import { Image, Text } from "react-native";

const TabButton = (props) => {
  const { active, onPress, text, source } = props;
  return (
    <StyledTabButton active={active} onPress={onPress}>
      <TabItemImage source={source} />
      <TabItemText active={active}>{text}</TabItemText>
    </StyledTabButton>

    // <TouchableOpacity
    //   style={styles.tabButton}
    //   active={active}
    //   onPress={onPress}
    // >
    //   <Image style={styles.tabImage} source={source} />
    //   <Text style={styles.tabText} active={active}>
    //     {text}
    //   </Text>
    // </TouchableOpacity>
  );
};

export default TabButton;
