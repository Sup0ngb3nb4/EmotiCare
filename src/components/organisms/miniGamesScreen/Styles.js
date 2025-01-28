import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: width * 0.1 
  },
  gameContainer:{
    height: width * 0.3,
    width: width * 0.3,
    margin: width * 0.05,
    borderRadius: width * 0.03,
    // borderWidth: width * 0.01,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 4.01,
    elevation: 1.5,
    alignItems: "center",
    justifyContent: "center"
  },
  gameIcon:{
    height: width * 0.28,
    width: width * 0.28,
    borderRadius: width * 0.04,
  }
});
