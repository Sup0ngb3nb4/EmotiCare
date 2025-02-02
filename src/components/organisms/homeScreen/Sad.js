import React from "react";
import { Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

//Styles
import { styles } from "./Styles";

const Sad = ({ navigation }) => {
  return (
    <Animatable.View
      animation="pulse"
      iterationCount="infinite"
      useNativeDriver
      style={styles.sadContainer}
    >
      <TouchableOpacity
        style={styles.sadButton}
        onPress={() => navigation.navigate("ChatScreen")}
      >
        <Text style={styles.sadButtonText}>Sad Button</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default Sad;
