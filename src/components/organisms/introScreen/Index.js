import React, { useRef } from "react";
import {
  Animated,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from "react-native";
import LottieView from "lottie-react-native";
import {styles} from "./Styles"
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get("window");

const data = [
  {
    color: "#FF6500",
    animation: require("../../../../assets/lottie/Chatbot.json"),
    title: "AI Chatbot Communication",
    text: "Engage with an AI Chatbot for Support",
  },
  {
    color: "#FF5580",
    animation: require("../../../../assets/lottie/Support.json"),
    title: "Emergency Contact Access",
    text: "Quick Access to Crisis Helplines",
  },
  {
    color: "#711DB0",
    animation: require("../../../../assets/lottie/Mini-Games.json"),
    title: "MMini-Games for Relaxation",
    text: "Relax and Unwind with Mini-Games",
  },
  {
    color: "#FFD23F",
    animation: require("../../../../assets/lottie/User Interface.json"),
    title: "Welcome to EmotiCare!",
    text: "A comforting platform to find peace of mind",
  },
];

function Swiper({ navigation }) {
  const scrollValue = useRef(new Animated.Value(0)).current;

  const handlePress = async() => {
    await AsyncStorage.setItem("IntroShown", "True");
    navigation.navigate("SignUp")
  }
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollValue } } }],
          { useNativeDriver: false }
        )}
      >
        {data.map((item, index) => (
          <View style={[styles.card]} key={index}>
            <LottieView
              source={item.animation}
              autoPlay
              loop
              style={styles.animation}
            />
            <View
              style={[styles.textContainer, { backgroundColor: item.color }]}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>{item.text}</Text>
              {index === data.length - 1 && (
                <TouchableOpacity
                  style={styles.getStarted}
                  onPress={handlePress}
                >
                  <Text style={styles.final}>Get Started</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer} pointerEvents="none">
        {data.map((_, i) => (
          <Indicator i={i} key={i} scrollValue={scrollValue} />
        ))}
      </View>
    </View>
  );
}

function Indicator({ i, scrollValue }) {
  const translateX = scrollValue.interpolate({
    inputRange: [-width + i * width, i * width, width + i * width],
    outputRange: [-20, 0, 20],
  });
  return (
    <View style={styles.indicator}>
      <Animated.View
        style={[styles.activeIndicator, { transform: [{ translateX }] }]}
      />
    </View>
  );
}

export default Swiper;
