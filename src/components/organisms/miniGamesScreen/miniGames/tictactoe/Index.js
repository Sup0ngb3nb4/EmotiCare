import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {styles} from "./Styles"

const TicTacToe = ({navigation}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SingleTicTacToe")}>
        <Text style={styles.buttonText}>Single</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("FriendTicTacToe")}>
        <Text style={styles.buttonText}>Friend</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TicTacToe;
