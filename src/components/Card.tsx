import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { useTheme } from "../hooks/useTheme";

// Card component
export interface CardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const Card: React.FC<CardProps> = ({ children, style }) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.border,
          borderRadius: theme.radius.lg,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

// Card Header
export interface CardHeaderProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, style }) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.cardHeader,
        {
          paddingHorizontal: theme.spacing.md,
          paddingTop: theme.spacing.sm,
          paddingBottom: theme.spacing.xs,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

// Card Title
export interface CardTitleProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, style }) => {
  const theme = useTheme();

  return (
    <Text
      style={[
        styles.cardTitle,
        {
          color: theme.colors.text,
          fontSize: theme.fontSizes.xl,
          fontWeight: theme.fontWeights.bold,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

// Card Description
export interface CardDescriptionProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  style,
}) => {
  const theme = useTheme();

  return (
    <Text
      style={[
        styles.cardDescription,
        {
          color: theme.colors.accent,
          fontSize: theme.fontSizes.sm,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

// Card Content
export interface CardContentProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  style,
}) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.cardContent,
        {
          padding: theme.spacing.md,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

// Card Footer
export interface CardFooterProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, style }) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.cardFooter,
        {
          padding: theme.spacing.md,
          paddingTop: 0,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
    alignItems: "center",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 16,
  },
  cardTitle: {
    marginBottom: 4,
  },
  cardDescription: {},
  cardContent: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
