import { colors } from "./colors";
import { typography, fontSizes, fontWeights, lineHeights } from "./typography";
import { spacing, radius } from "./spacing";
import { Theme } from "@react-navigation/native";

const fontFamily = "Poppins";

export type AppTheme = {
  dark: boolean;
  colors: typeof colors & {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
  typography: typeof typography;
  fontSizes: typeof fontSizes;
  fontWeights: typeof fontWeights;
  lineHeights: typeof lineHeights;
  spacing: typeof spacing;
  radius: typeof radius;
};

export const lightTheme: AppTheme = {
  dark: false,
  colors: {
    ...colors,
    // Override navigation theme colors
    primary: colors.primary,
    background: colors.background,
    card: colors.card,
    text: colors.text,
    border: colors.border,
    notification: colors.notification,
  },
  typography,
  fontSizes,
  fontWeights,
  lineHeights,
  spacing,
  radius,
};

export const darkTheme: AppTheme = {
  dark: true,
  colors: {
    ...colors,
    // Override with dark mode colors
    primary: colors.darkPrimary,
    background: colors.darkBackground,
    card: colors.darkCard,
    text: colors.darkText,
    border: colors.darkBorder,
    notification: colors.darkNotification,
  },
  typography,
  fontSizes,
  fontWeights,
  lineHeights,
  spacing,
  radius,
};

// Helper to get theme type for React Navigation
export const getNavigationTheme = (theme: AppTheme): Theme => {
  return {
    dark: theme.dark,
    colors: {
      primary: theme.colors.primary,
      background: theme.colors.background,
      card: theme.colors.card,
      text: theme.colors.text,
      border: theme.colors.border,
      notification: theme.colors.notification,
    },
    fonts: {
      regular: {
        fontFamily: fontFamily,
        fontWeight: "400",
      },
      medium: {
        fontFamily: fontFamily,
        fontWeight: "500",
      },
      bold: {
        fontFamily: fontFamily,
        fontWeight: "600",
      },
      heavy: {
        fontFamily: fontFamily,
        fontWeight: "700",
      },
    },
  };
};
