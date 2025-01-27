import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "top",
    backgroundColor: "red",
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 20,
    display: "flex",
    backgroundColor: "yellow",
  }
});
