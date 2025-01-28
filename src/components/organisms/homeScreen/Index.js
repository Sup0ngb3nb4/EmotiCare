import React, { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./Styles";
import TabButton from "../../atoms/tabButton/Index";
import { useState } from "react";

import { useDispatch } from "react-redux";
import Happy from "./Happy";
import Sad from "./Sad";

const HomeScreen = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState("Sad");
  const dispatch = useDispatch();

  const handleSignup = () => {
    switch (selectedOption) {
      case "Happy":
        dispatch({ type: selectedOption });
        break;
      case "Sad":
        dispatch({ type: selectedOption });
        break;
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/counselling.png")}
        style={styles.logo}
      />

      <View style={styles.tabContainer}>
        <TabButton
          source={require("../../../../assets/happy.png")}
          text="Joyful"
          active={selectedOption === "Happy"}
          onPress={() => setSelectedOption("Happy")}
        />
        <TabButton
          source={require("../../../../assets/sad.png")}
          text="Upset"
          active={selectedOption === "Sad"}
          onPress={() => setSelectedOption("Sad")}
        />
      </View>

      {selectedOption == "Happy" && <Happy navigation={navigation}/>}
      {selectedOption == "Sad" && <Sad navigation={navigation}/>}
    </View>
  );
};

export default HomeScreen;
