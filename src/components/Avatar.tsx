import { View, Image, Text, StyleSheet } from "react-native";
import { useTheme } from "../hooks/useTheme";

interface AvatarProps {
  source?: string;
  name: string;
  size?: number;
  borderColor?: string;
}

export const Avatar = ({
  source,
  name,
  size = 50,
  borderColor,
}: AvatarProps) => {
  const { colors } = useTheme();
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);

  const avatarSize = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  const textSize = {
    fontSize: size * 0.4,
  };

  return (
    <View
      style={[
        styles.container,
        avatarSize,
        {
          backgroundColor: source ? "transparent" : colors.primary,
          borderColor: borderColor || colors.border,
        },
      ]}
    >
      {source ? (
        <Image
          source={{ uri: source }}
          style={[styles.image, avatarSize]}
          resizeMode="cover"
        />
      ) : (
        <Text style={[styles.initials, textSize, { color: "#ffffff" }]}>
          {initials}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 2,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  initials: {
    fontWeight: "bold",
  },
});
