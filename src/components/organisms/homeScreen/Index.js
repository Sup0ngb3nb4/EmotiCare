// import React, { TouchableOpacity, View } from "react-native";
// import { styles } from "./Styles";
// import TabButton from "../../atoms/tabButton/Index";
// import { useState } from "react";

// import { useSelector, useDispatch } from "react-redux";

// const HomeScreen = () => {
//     const { navigation } = props;
//   const [selectedOption, setSelectedOption] = useState("Sad");
//   const dispatch = useDispatch();
//   const { error } = useSelector((state) => state.AuthReducer);

//   const handleSignup = () => {
//     switch (selectedOption) {
//       case "Happy":
//         dispatch({ type: selectedOption });
//         break;
//       case "Sad":
//         dispatch({ type: selectedOption });
//         break;
//     }
//   };
//   return (
//     <View style={styles.container}>
//       <View style={styles.tabContainer}>
//         <TabButton
//           source={require("../../../../assets/happy.jpeg")}
//           text="Happy"
//           active={selectedOption === "Happy"}
//           onPress={() => setSelectedOption("Happy")}
//         />
//         <TabButton
//           source={require("../../../../assets/sad.jpeg")}
//           text="Sad"
//           active={selectedOption === "Sad"}
//           onPress={() => setSelectedOption("Sad")}
//         />
//       </View>
//     </View>
//   );
// };

// export default HomeScreen;
