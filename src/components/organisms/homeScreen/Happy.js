import React from "react";
import { Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

//Styles
import { styles } from "./Styles";

const Happy = ({ navigation }) => {
  return (
    <Animatable.View
      animation="pulse"
      iterationCount="infinite"
      useNativeDriver
      style={styles.happyContainer}
    >
      <TouchableOpacity
        style={styles.happyButton}
        onPress={() => navigation.navigate("MiniGamesScreen")}
      >
        <Text style={styles.happyButtonText}>Happy Button</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default Happy;
