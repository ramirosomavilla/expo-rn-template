import Icon from "react-native-vector-icons/FontAwesome6";
import { useTheme as useThemeContext } from "../contexts/ThemeContext";
import Button from "./Button";
import { StyleProp, ViewStyle } from "react-native";

export const ToggleThemeButton = ({
  style,
}: {
  style?: StyleProp<ViewStyle>;
}) => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Button
      onPress={() => toggleTheme()}
      style={[{ backgroundColor: "transparent" }, style]}
    >
      {theme.dark ? (
        <Icon name="sun" size={24} />
      ) : (
        <Icon name="moon" size={24} />
      )}
    </Button>
  );
};
