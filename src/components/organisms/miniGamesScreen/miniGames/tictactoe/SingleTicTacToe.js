import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const initialBoard = Array(3).fill(null).map(() => Array(3).fill(null));

const SingleTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState("X"); // User = X

  useEffect(() => {
    if (currentPlayer === "O") {
      const timeout = setTimeout(() => {
        makeComputerMove();
      }, 500);
      return () => clearTimeout(timeout); // Clean up to prevent double moves
    }
  }, [currentPlayer]);

  const makeComputerMove = () => {
    const emptyCells = [];
    board.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (!cell) emptyCells.push([rowIndex, colIndex]);
      });
    });

    if (emptyCells.length === 0) return;

    const [row, col] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const newBoard = board.map((r) => [...r]);
    newBoard[row][col] = "O";

    setBoard(newBoard);
    checkGameStatus(newBoard, "O");
    setCurrentPlayer("X");
  };

  const checkGameStatus = (b, player) => {
    if (isWinner(b, player)) {
      if (player === "X") {
        setUserScore((prev) => prev + 1);
      } else {
        setComputerScore((prev) => prev + 1);
      }
      resetBoard();
    } else if (isDraw(b)) {
      resetBoard();
    }
  };

  const isWinner = (b, player) => {
    for (let i = 0; i < 3; i++) {
      if (b[i].every((cell) => cell === player)) return true;
      if (b.every((row) => row[i] === player)) return true;
    }
    if (b[0][0] === player && b[1][1] === player && b[2][2] === player) return true;
    if (b[0][2] === player && b[1][1] === player && b[2][0] === player) return true;
    return false;
  };

  const isDraw = (b) => b.flat().every((cell) => cell !== null);

  const handlePress = (row, col) => {
    if (board[row][col] || currentPlayer !== "X") return;

    const newBoard = board.map((r) => [...r]);
    newBoard[row][col] = "X";

    setBoard(newBoard);
    checkGameStatus(newBoard, "X");
    setCurrentPlayer("O");
  };

  const resetBoard = () => {
    setTimeout(() => {
      setBoard(initialBoard);
      setCurrentPlayer("X");
    }, 600);
  };

  const fullReset = () => {
    setBoard(initialBoard);
    setUserScore(0);
    setComputerScore(0);
    setCurrentPlayer("X");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Single Player Tic Tac Toe</Text>

      <View style={styles.board}>
        {board.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={styles.cell}
                onPress={() => handlePress(rowIndex, colIndex)}
              >
                <Text style={styles.cellText}>{cell}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <View style={styles.scoreContainer}>
        <Text style={styles.score}>You: {userScore}</Text>
        <Text style={styles.score}>Computer: {computerScore}</Text>
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={fullReset}>
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SingleTicTacToe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBEF",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#7B4019",
  },
  board: {
    aspectRatio: 1,
    width: "100%",
    maxWidth: 320,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: "#7B4019",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF8DC",
  },
  cellText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#7B4019",
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 30,
    marginBottom: 15,
  },
  score: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7B4019",
  },
  resetButton: {
    backgroundColor: "#7B4019",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
  resetText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
