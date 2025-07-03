import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const AnimatedTypewriterText = ({ sentences, delay, speed, style }) => {
  const [animatedText, setAnimatedText] = useState("");
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (sentences.length !== currentSentenceIndex) startTypingAnimation();
    else setCurrentSentenceIndex(0);
  }, [currentSentenceIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prevState) => !prevState);
    }, 500);
    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  const startTypingAnimation = () => {
    const currentSentence = sentences[currentSentenceIndex];
    let index = 0;

    const typingInterval = setInterval(() => {
      setAnimatedText((prevState) => prevState + currentSentence[index]);
      index++;

      if (index === currentSentence.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentSentenceIndex((prevState) => prevState + 1);
          setAnimatedText("");
        }, delay);
      }
    }, speed);
  };

  return (
    <View style={style}>
      <Text style={styles.text}>{animatedText}</Text>
      {showCursor && <Text style={styles.cursor}>|</Text>}
    </View>
  );
};

const AnimatedTyping = () => {
  return (
    <View style={styles.container}>
      <AnimatedTypewriterText
        sentences={[
          '"It does not matter how slowly you go,',
          'as long as you do not stop."',
          '"Be persistent and never give up hope."',
          '"A problem is a chance for you to do your best."',
          '"Love the life you live.',
          'Live the life you love."',
        ]}
        delay={1000}
        speed={60}
        style={styles.textContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontStyle: "italic",
    color: "#7B4019"
  },
  cursor: {
    fontSize: 18,
    marginBottom: 10,
    opacity: 0.6,
    position: "absolute",
    right: -5,
  },
});

export default AnimatedTyping;
