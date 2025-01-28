import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Styles";

const Sad = ({navigation}) => {
  return (
    <View style={styles.sadContainer}>
      <TouchableOpacity style={styles.sadButton} onPress={() => navigation.navigate("ChatScreen")}>
        <Text style={styles.sadButtonText}>Sad Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sad;
