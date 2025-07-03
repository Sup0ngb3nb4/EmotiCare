import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8E1",
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#7B4019",
    textAlign: "center",
    marginBottom: 30,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gameContainer: {
    width: width * 0.42,
    aspectRatio: 1,
    borderRadius: 20,
    backgroundColor: "#FFEEA9",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  gameIcon: {
    width: "80%",
    height: "60%",
    resizeMode: "contain",
    borderRadius: 15,
  },
  label: {
    marginTop: 10,
    fontWeight: "600",
    color: "#7B4019",
    fontSize: 16,
  },
});
