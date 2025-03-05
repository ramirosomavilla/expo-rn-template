import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useTheme } from "../hooks/useTheme";

interface ButtonProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  mode?: "contained" | "outlined";
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  mode = "contained",
  disabled,
  loading,
  children,
  style,
}) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        mode === "contained"
          ? { backgroundColor: colors.primary }
          : {
              backgroundColor: "transparent",
              borderWidth: 2,
              borderColor: colors.primary,
            },
        disabled && { opacity: 0.5 },
        ,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={colors.text} />
      ) : (
        <Text style={[styles.text, { color: colors.text }]}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;
