import React, { useState, useEffect, ReactNode } from "react";
import { useColorScheme } from "react-native";
import { lightTheme, darkTheme, AppTheme } from "../styles/theme";
import { getData, storeData } from "@/lib/utils/storage";
import { ThemeContext, ThemeContextType } from "./ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemColorScheme === "dark");
  const [theme, setTheme] = useState<AppTheme>(isDark ? darkTheme : lightTheme);

  useEffect(() => {
    const loadThemePreference = async () => {
      try {
        const savedTheme = await getData<"light" | "dark" | "system">(
          "themePreference"
        );

        if (savedTheme === "light") {
          setIsDark(false);
          setTheme(lightTheme);
        } else if (savedTheme === "dark") {
          setIsDark(true);
          setTheme(darkTheme);
        } else {
          const systemIsDark = systemColorScheme === "dark";
          setIsDark(systemIsDark);
          setTheme(systemIsDark ? darkTheme : lightTheme);
          storeData("themePreference", "system");
        }
      } catch (error) {
        const systemIsDark = systemColorScheme === "dark";
        setIsDark(systemIsDark);
        setTheme(systemIsDark ? darkTheme : lightTheme);
      }
    };

    loadThemePreference();
  }, [systemColorScheme]);

  const toggleTheme = async () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    setTheme(newIsDark ? darkTheme : lightTheme);
    await storeData("themePreference", newIsDark ? "dark" : "light");
  };

  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
    isDark,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
