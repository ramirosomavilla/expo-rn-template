import { ToggleThemeButton } from "@/components/ToggleThemeButton";
import { useTheme } from "@/hooks/useTheme";
import { useTheme as useThemeContext } from "@/contexts/ThemeContext";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

export default function HomeLayout() {
  const { colors } = useTheme();
  const { theme } = useThemeContext();
  return (
    <>
      <StatusBar style={theme.dark ? "light" : "dark"} />
      <SafeAreaView
        style={{
          backgroundColor: colors.background,
          alignItems: "flex-end",
        }}
      >
        <ToggleThemeButton style={{ marginRight: 16 }} />
      </SafeAreaView>
      <Slot />
    </>
  );
}
