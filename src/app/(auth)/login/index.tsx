import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { login } from "@/lib/store/slices/authSlice";
import { AuthNavProps } from "@/lib/types";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";

import Button from "@/components/Button";
import { routes } from "@/lib/routes";
import { Link } from "expo-router";
import TextInput from "../../../components/TextInput";
import { useTheme } from "../../../hooks/useTheme";
import { StyleSheet } from "react-native";

const LoginScreen: React.FC<AuthNavProps<"Login">> = () => {
  const [email, setEmail] = useState("usuario@ejemplo.com");
  const [password, setPassword] = useState("123456");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);
  const { colors } = useTheme();

  const handleLogin = () => {
    if (email.trim() && password.trim()) {
      dispatch(login({ email, password }));
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { backgroundColor: colors.background },
        ]}
      >
        <View style={styles.logoContainer}>
          <Text style={[styles.title, { color: colors.primary }]}>
            React Native Template App
          </Text>
        </View>

        <View style={styles.formContainer}>
          {error && <Text style={styles.errorText}>{error}</Text>}

          <TextInput
            label="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            label="Contraseña"
            value={password}
            onChangeText={setPassword}
            mode="outlined"
            secureTextEntry={!showPassword}
            right={{
              icon: showPassword ? "eye-slash" : "eye",
              onPress: () => setShowPassword(!showPassword),
            }}
          />

          <Button
            mode="contained"
            onPress={handleLogin}
            style={styles.button}
            loading={isLoading}
            disabled={isLoading}
          >
            Iniciar Sesión
          </Button>

          <Link href={routes.auth.forgotPassword} style={styles.textLink}>
            <Text style={{ color: colors.primary }}>
              ¿Olvidaste tu contraseña?
            </Text>
          </Link>
        </View>

        <View style={styles.footerContainer}>
          <Text style={{ color: colors.text }}>¿Aún no tienes una cuenta?</Text>
          <Link href={routes.auth.register} style={styles.textLink}>
            <Text style={{ color: colors.primary, fontWeight: "bold" }}>
              Regístrate
            </Text>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 16,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 48,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    flexWrap: "nowrap",
  },
  formContainer: {
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
    paddingVertical: 8,
  },
  errorText: {
    color: "red",
    marginBottom: 16,
    textAlign: "center",
  },
  textLink: {
    alignSelf: "center",
    marginTop: 16,
  },
  footerContainer: {
    alignItems: "center",
    marginTop: 24,
  },
});

export default LoginScreen;
