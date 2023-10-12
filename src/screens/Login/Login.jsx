import { Image, Pressable, Text, TextInput, View } from "react-native";
import { setUser } from "../../features/auth/authSlice";
import React, { useState } from "react";
import styles from "./login.styles";
import { colors } from "../../constants/colors";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../services/authApi";
import { insertSession } from "../../db";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [triggerLogin, result] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    triggerLogin({
      email,
      password,
    })
      .unwrap()
      .then(result => {
        dispatch(setUser(result))
        insertSession({
          localId: result.localId,
          email: result.email,
          token: result.idToken,
        })
          .then(result => console.log(result))
          .catch(error => console.log(error.message))
      })
  }
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
          placeholderTextColor="white"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.inputEmail}
          placeholder="Contraseña"
          placeholderTextColor="white"
          value={password}
          onChangeText={setPassword}
        />
        <Pressable style={styles.loginButton} onPress={onSubmit}>
          <Text
            style={{ color: colors.decimo, fontFamily: "Bebas", fontSize: 20 }}
          >
            Login
          </Text>
        </Pressable>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            fontFamily: "Bebas",
            margin: 8,
          }}
        >
          No have an account?
        </Text>
        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text
            style={{ color: colors.decimo, fontFamily: "Bebas", fontSize: 20 }}
          >
            Sign up
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
