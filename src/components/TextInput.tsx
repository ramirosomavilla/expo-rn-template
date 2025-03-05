import React from "react";
import {
  View,
  Text,
  TextInput as RNTextInput,
  TextInputProps,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../hooks/useTheme";
import Icon from "react-native-vector-icons/FontAwesome6";

interface CustomTextInputProps extends TextInputProps {
  label: string;
  mode?: "outlined" | "flat";
  right?: {
    icon: string;
    onPress: () => void;
  };
}

const TextInput: React.FC<CustomTextInputProps> = ({
  label,
  mode = "flat",
  right,
  style,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          mode === "outlined" && {
            borderWidth: 1,
            borderColor: colors.primary,
          },
        ]}
      >
        <RNTextInput
          style={[
            styles.input,
            { color: colors.text, backgroundColor: colors.background },
            mode === "flat" && {
              borderBottomWidth: 1,
              borderBottomColor: colors.primary,
            },
            style,
          ]}
          placeholderTextColor={colors.secondary || colors.text} // Asegurar que el placeholder cambia en dark mode
          {...props}
        />
        {right && (
          <TouchableOpacity
            onPress={right.onPress}
            style={styles.iconContainer}
          >
            <Icon name={right.icon} size={24} color={colors.text} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  iconContainer: {
    paddingHorizontal: 8,
  },
});

export default TextInput;
