import { Card, CardContent, CardHeader } from "@/components/Card";
import { ToggleThemeButton } from "@/components/ToggleThemeButton";
import { useTheme } from "@/hooks/useTheme";
import { useTheme as useThemeContext } from "@/contexts/ThemeContext";
import { routes } from "@/lib/routes";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
} from "react-native";

const HomeScreen = () => {
  const { colors } = useTheme();
  const { theme } = useThemeContext();
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style={theme.dark ? "light" : "dark"} />
      <SafeAreaView
        style={{
          backgroundColor: colors.background,
          alignItems: "flex-end",
        }}
      >
        <ToggleThemeButton style={{ marginRight: 16 }} />
      </SafeAreaView>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { backgroundColor: colors.background },
        ]}
      >
        <Text style={[styles.heroTitle, { color: colors.primary }]}>
          Your Dream App Starts Here
        </Text>
        <Text style={[styles.heroSubtitle, { color: colors.secondary }]}>
          Create stunning, high-performance apps effortlessly.
        </Text>

        <Card>
          <CardHeader>
            <Ionicons
              name="log-in-outline"
              size={40}
              color={colors.primary}
              style={styles.icon}
            />
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              Log In
            </Text>
          </CardHeader>
          <CardContent>
            <Text style={[styles.cardText, { color: colors.text }]}>
              Easily log in to your account with your email and password.
            </Text>
            <Link href={routes.auth.login} style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Log In</Text>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Ionicons
              name="color-palette-outline"
              size={40}
              color={colors.primary}
              style={styles.icon}
            />
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              Eye-Catching Design
            </Text>
          </CardHeader>
          <CardContent>
            <Text style={[styles.cardText, { color: colors.text }]}>
              Vibrant colors and sleek animations that captivate your users at
              first sight.
            </Text>
            <TouchableOpacity style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Try It Now</Text>
            </TouchableOpacity>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Ionicons
              name="flash-outline"
              size={40}
              color={colors.primary}
              style={styles.icon}
            />
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              Lightning Fast
            </Text>
          </CardHeader>
          <CardContent>
            <Text style={[styles.cardText, { color: colors.text }]}>
              Get your app up and running in minutes with zero hassle.
            </Text>
            <TouchableOpacity style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Get Started</Text>
            </TouchableOpacity>
          </CardContent>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
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
  icon: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  cardText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
  },
  ctaButton: {
    backgroundColor: "#ff6f61",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  ctaButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default HomeScreen;
