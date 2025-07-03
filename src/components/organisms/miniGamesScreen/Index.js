import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { styles } from "./Styles";

const MiniGamesScreen = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mini Games</Text>

      <View style={styles.grid}>
        <TouchableOpacity
          style={styles.gameContainer}
          onPress={() => navigation.navigate("TicTacToe")}
        >
          <Image
            source={require("../../../../assets/tictactoe.png")}
            style={styles.gameIcon}
          />
          <Text style={styles.label}>Tic Tac Toe</Text>
        </TouchableOpacity>

        <View style={styles.gameContainer}>
          <Image
            source={require("../../../../assets/flappybird.jpeg")}
            style={styles.gameIcon}
          />
          <Text style={styles.label}>Flappy Bird</Text>
        </View>

        <TouchableOpacity
          style={styles.gameContainer}
          onPress={() => navigation.navigate("RockPaperScissor")}
        >
          <Image
            source={require("../../../../assets/rockpaperscissor.png")}
            style={styles.gameIcon}
          />
          <Text style={styles.label}>Rock Paper Scissors</Text>
        </TouchableOpacity>

        <View style={styles.gameContainer}>
          <Image
            source={require("../../../../assets/whackamole.jpeg")}
            style={styles.gameIcon}
          />
          <Text style={styles.label}>Whack A Mole</Text>
        </View>
      </View>
    </View>
  );
};

export default MiniGamesScreen;
