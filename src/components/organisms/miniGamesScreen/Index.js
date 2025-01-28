import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./Styles";

const MiniGamesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gameContainer}>
        <Image
          source={require("../../../../assets/flappybird.jpeg")}
          style={styles.gameIcon}
        />
      </View>

      <View style={styles.gameContainer}>
      <Image
          source={require("../../../../assets/rockpaperscissor.jpeg")}
          style={styles.gameIcon}
        />
      </View>

      <View style={styles.gameContainer}>
      <Image
          source={require("../../../../assets/snake.jpeg")}
          style={styles.gameIcon}
        />
      </View>

      <View style={styles.gameContainer}>
      <Image
          source={require("../../../../assets/tictactoe.png")}
          style={styles.gameIcon}
        />
      </View>

      <View style={styles.gameContainer}>
      <Image
          source={require("../../../../assets/whackamole.jpeg")}
          style={styles.gameIcon}
        />
      </View>

      <View style={styles.gameContainer}>
        <Text>Game 6</Text>
      </View>
    </View>
  );
};

export default MiniGamesScreen;
