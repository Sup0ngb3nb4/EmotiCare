import { useSelector } from "react-redux";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default ({ Icon, iconName, color }) => {
  const { theme } = useSelector((state) => state.StaticReducer);
  return <Icon name={iconName} size={width < 600 ? width * 0.06 : width * 0.04} color={color? color : theme?.iconColor}/>;
};
