import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: width * 0.04,
        padding: width * 0.037,
        marginBottom: width * 0.06,
        paddingHorizontal: width * 0.05,
        flexDirection: "row",
        alignItems: "center"
      },
      inputFocused: {
        borderColor: 'black',
      },
})