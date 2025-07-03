import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: width * 0.05,
    paddingTop: width * 0.2,
    backgroundColor: "#FFFFFF",
  },
  logo: {
    width: width * 0.6,
    height: width * 0.6,
    marginBottom: width * 0.08,
    alignSelf: "center",
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 20,
    display: "flex",
  },
  happyContainer: {
    marginTop: width * 0.1,
  },
  happyButton: {
    width: "100%",
    height: width * 0.15,
    backgroundColor: "#3F2827",
    borderColor: "#3F2827",
    borderWidth: 1,
    borderRadius: width * 0.05,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width * 0.2,
  },
  happyButtonText: {
    fontWeight: "900",
    fontSize: width * 0.05,
    color: "#ffffff",
  },
  sadContainer: {
    marginTop: width * 0.1,
  },
  sadButton: {
    width: "100%",
    height: width * 0.15,
    backgroundColor: "#3F2827",
    borderColor: "#3F2827",
    borderWidth: 1,
    borderRadius: width * 0.05,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width * 0.2,
  },
  sadButtonText: {
    fontWeight: "900",
    fontSize: width * 0.05,
    color: "#ffffff",
  },
});
