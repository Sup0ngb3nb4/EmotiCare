import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: width * 0.01,
    },
    card: {
      width: width - 10,
      height: "100%",
      marginHorizontal: width * 0.013,
      borderRadius: 5,
      paddingBottom: width * 0.1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
    },
    animation: {
      width: width * 0.9,
      height: width * 0.9,
      marginBottom: width * 0.1,
    },
    textContainer: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "30%",
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
      padding: width * 0.05,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    title: {
      fontSize: width * 0.05,
      color: "#fff",
      textAlign: "center",
      fontWeight: "bold",
      marginBottom: width * 0.05,
    },
    text: {
      fontSize: width * 0.04,
      color: "#fff",
      textAlign: "center",
      marginBottom: width * 0.05,
    },
    indicatorContainer: {
      alignSelf: "center",
      position: "absolute",
      bottom: width * 0.05,
      flexDirection: "row",
    },
    indicator: {
      height: width * 0.03,
      width: width * 0.03,
      borderRadius: 5,
      backgroundColor: "#00000044",
      marginHorizontal: width * 0.015,
      overflow: "hidden",
    },
    activeIndicator: {
      height: "100%",
      width: "100%",
      backgroundColor: "#fff",
      borderRadius: 10,
    },
    getStarted: {
      backgroundColor: "transparentq",
      width: "110%",
      height: "30%",
      alignItems: "center",
      justifyContent: "center",
    },
    final: {
      color: "#F06449",
      fontWeight: "bold",
      fontSize: width * 0.05
    },
  });