import React from "react";
import { Text, View,TouchableOpacity } from "react-native";
import { styles } from "./Styles";

const Happy = ({navigation}) => {
  return (
    <View style={styles.happyContainer}>
      <TouchableOpacity style={styles.happyButton} onPress={() => navigation.navigate("MiniGamesScreen")}>
        <Text style={styles.happyButtonText}>Happy Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Happy;
