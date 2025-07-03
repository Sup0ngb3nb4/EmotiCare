import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const choices = [
  { name: "Rock", image: require("../../../../../../assets/rock.png") },
  { name: "Paper", image: require("../../../../../../assets/paper.png") },
  { name: "Scissor", image: require("../../../../../../assets/scissor.png") },
];

const getRandomChoice = () => choices[Math.floor(Math.random() * 3)];

const determineWinner = (user, computer) => {
  if (user === computer) return "draw";
  if (
    (user === "Rock" && computer === "Scissor") ||
    (user === "Paper" && computer === "Rock") ||
    (user === "Scissor" && computer === "Paper")
  ) {
    return "user";
  }
  return "computer";
};

const RockPaperScissorScreen = () => {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const handleChoice = (choice) => {
    const computer = getRandomChoice();
    setUserChoice(choice);
    setComputerChoice(computer);

    const winner = determineWinner(choice.name, computer.name);

    if (winner === "user") {
      setUserScore(userScore + 1);
      setResult("You Win!");
    } else if (winner === "computer") {
      setComputerScore(computerScore + 1);
      setResult("Computer Wins!");
    } else {
      setResult("It's a Draw!");
    }
  };

  const resetGame = () => {
    setUserScore(0);
    setComputerScore(0);
    setUserChoice(null);
    setComputerChoice(null);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>

      <View style={styles.choicesContainer}>
        {choices.map((choice) => (
          <TouchableOpacity
            key={choice.name}
            onPress={() => handleChoice(choice)}
            style={styles.choiceBtn}
          >
            <Image source={choice.image} style={styles.choiceImg} />
            <Text style={styles.choiceLabel}>{choice.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {userChoice && computerChoice && (
        <View style={styles.resultsContainer}>
          <View style={styles.choiceBox}>
            <Text style={styles.label}>You</Text>
            <Image source={userChoice.image} style={styles.resultImg} />
            <Text>{userChoice.name}</Text>
          </View>

          <View style={styles.choiceBox}>
            <Text style={styles.label}>Computer</Text>
            <Image source={computerChoice.image} style={styles.resultImg} />
            <Text>{computerChoice.name}</Text>
          </View>
        </View>
      )}

      <View style={styles.scoreContainer}>
        <View style={styles.scoreBox}>
          <Text style={styles.scoreLabel}>You</Text>
          <Text style={styles.score}>{userScore}</Text>
        </View>
        <View style={styles.scoreBox}>
          <Text style={styles.scoreLabel}>Computer</Text>
          <Text style={styles.score}>{computerScore}</Text>
        </View>
      </View>

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 20,
          color:
            result === "You Win!"
              ? "green"
              : result === "Computer Wins!"
              ? "red"
              : "#333",
          textAlign: "center",
        }}
      >
        {result}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#FFEEA9",
    alignItems: "center",
  },
  resetButton: {
    backgroundColor: "#7B4019",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  resetText: {
    color: "white",
    fontWeight: "bold",
  },
  choicesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    flexWrap: "wrap",
  },
  choiceBtn: {
    alignItems: "center",
    margin: 10,
  },
  choiceImg: {
    width: width * 0.28,
    height: width * 0.28,
    borderRadius: 10,
    resizeMode: "contain",
  },
  choiceLabel: {
    marginTop: 5,
    fontWeight: "600",
    color: "#7B4019",
  },
  resultsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 20,
  },
  choiceBox: {
    alignItems: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  resultImg: {
    width: width * 0.2,
    height: width * 0.2,
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 30,
  },
  scoreBox: {
    backgroundColor: "#FFF4D6",
    padding: 15,
    borderRadius: 12,
    width: width * 0.4,
    alignItems: "center",
  },
  scoreLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  score: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#7B4019",
  },
});

export default RockPaperScissorScreen;
