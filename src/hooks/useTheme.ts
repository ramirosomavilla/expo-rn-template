import { useColorScheme } from "react-native";
import { useContext, useEffect, useState } from "react";
import { lightTheme, darkTheme, AppTheme } from "../styles/theme";
import { ThemeContext } from "../contexts/ThemeContext";

export const useTheme = (): AppTheme => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    // Fallback if not using ThemeProvider
    const colorScheme = useColorScheme();
    const [theme, setTheme] = useState<AppTheme>(
      colorScheme === "dark" ? darkTheme : lightTheme
    );

    useEffect(() => {
      setTheme(colorScheme === "dark" ? darkTheme : lightTheme);
    }, [colorScheme]);

    return theme;
  }

  return context.theme;
};
