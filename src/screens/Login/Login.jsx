import { Image, Pressable, Text, TextInput, View } from "react-native";

import React from "react";
import styles from "./login.styles";
import { colors } from "../../constants/colors";

const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.Images}
        source={require("./../../assets/image/LogoB8esports/logoB8-Blanco_Logo-B8.png")}
      />
      <View style={styles.loginContainer}>
        <Text style={{ color: "white", fontSize: 20, fontFamily: "Bebas" }}>
          Login to start
        </Text>
        <TextInput
          style={styles.inputEmail}
          placeholder="Correo Electronico"
          placeholderTextColor={colors.octavo}
        />
        <TextInput
          style={styles.inputEmail}
          placeholder="Contraseña"
          placeholderTextColor={colors.octavo}
        />
        <Pressable style={styles.loginButton}>
          <Text style={{ color: colors.decimo, fontFamily: "Bebas" }}>
            Login
          </Text>
        </Pressable>
        <Text style={{ color: "white", fontSize: 12, fontFamily: "Bebas" }}>
          No have an account?
        </Text>
        <Pressable style={styles.loginButton}>
          <Text style={{ color: colors.decimo, fontFamily: "Bebas" }}>
            Sign up
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
