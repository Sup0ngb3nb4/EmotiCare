import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const FriendTicTacToe = () => {
  const emptyBoard = Array(3).fill(null).map(() => Array(3).fill(""));

  const [board, setBoard] = useState(emptyBoard);
  const [isUserTurn, setIsUserTurn] = useState(true);
  const [userScore, setUserScore] = useState(0);
  const [friendScore, setFriendScore] = useState(0);

  const checkWinner = (board) => {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) return board[i][0];
      if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) return board[0][i];
    }
    if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) return board[0][0];
    if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) return board[0][2];
    return null;
  };

  const isDraw = (board) => board.flat().every(cell => cell !== "");

  const handlePress = (row, col) => {
    if (board[row][col] !== "") return;

    const newBoard = board.map((r, i) => r.map((cell, j) => (i === row && j === col ? (isUserTurn ? "X" : "O") : cell)));
    setBoard(newBoard);
    const winner = checkWinner(newBoard);

    if (winner) {
      if (winner === "X") setUserScore(userScore + 1);
      else setFriendScore(friendScore + 1);
      setTimeout(() => setBoard(emptyBoard), 500);
    } else if (isDraw(newBoard)) {
      setTimeout(() => setBoard(emptyBoard), 500);
    } else {
      setIsUserTurn(!isUserTurn);
    }
  };

  const resetGame = () => {
    setBoard(emptyBoard);
    setUserScore(0);
    setFriendScore(0);
    setIsUserTurn(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.board}>
        {board.map((row, i) => (
          <View key={i} style={styles.row}>
            {row.map((cell, j) => (
              <TouchableOpacity key={j} style={styles.cell} onPress={() => handlePress(i, j)}>
                <Text style={styles.cellText}>{cell}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
        <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.scoreBoard}>
        <Text style={styles.score}>Player A: {userScore}</Text>
        <Text style={styles.score}>Player B: {friendScore}</Text>
      </View>
    </View>
  );
};

export default FriendTicTacToe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBEF",
    justifyContent: "center",
    alignItems: "center",
  },
  board: {
    marginVertical: 20,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    width: width * 0.25,
    height: width * 0.25,
    borderWidth: 2,
    borderColor: "#7B4019",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF8DC",
  },
  cellText: {
    fontSize: 40,
    color: "#7B4019",
    fontWeight: "bold",
  },
  resetButton: {
    marginTop: 20,
    backgroundColor: "#7B4019",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignSelf: "center",
  },
  resetText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  scoreBoard: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#7B4019",
  },
});
