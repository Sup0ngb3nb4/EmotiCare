import React from "react";
import { Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { styles } from "./Styles";
import api from "../../../api/api";
import getEndPoint from "../../../endpoints/getEndpoint";

const fetchChatHistory = async () => {
  const response = await api.get(getEndPoint("CHAT_HISTORY"));
  return response.data.history;
};

const Sad = ({ navigation }) => {
  const handleSadPress = async () => {
    try {
      const history = await fetchChatHistory();
      navigation.navigate("ChatScreen", { history });
    } catch (error) {
      console.error("Failed to fetch history", error);
    }
  };

  return (
    <Animatable.View
      animation="pulse"
      iterationCount="infinite"
      useNativeDriver
      style={styles.sadContainer}
    >
      <TouchableOpacity style={styles.sadButton} onPress={handleSadPress}>
        <Text style={styles.sadButtonText}>Sad Button</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default Sad;
