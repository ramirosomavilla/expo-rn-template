import React from "react";
import { AppTheme, lightTheme } from "../styles/theme";

export type ThemeContextType = {
  theme: AppTheme;
  toggleTheme: () => void;
  isDark: boolean;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => {},
  isDark: false,
});

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
