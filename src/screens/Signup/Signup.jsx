import { Image, Pressable, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import styles from "./Signup.styles";
import { colors } from "../../constants/colors";
import { useSignUpMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";
import Login from "../Login/Login";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [triggerSignup, result] = useSignUpMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log('Login button')
    triggerSignup({
      email,
      password,
    })
      .unwrap()
      .then(result => {
        console.log(result)
        dispatch(setUser(result))
      })
      .catch(err => console.log(err))
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.Images}
        source={require("./../../assets/image/LogoB8esports/logoB8-Blanco_Logo-B8.png")}
      />
      <View style={styles.loginContainer}>
        <Text style={{ color: "white", fontSize: 20, fontFamily: "Bebas" }}>
          Sing up to start
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
        <TextInput
          style={styles.inputEmail}
          placeholder="Confirmar Contraseña"
          placeholderTextColor="white"
          value={confirmPass}
          onChangeText={setConfirmPass}
        />
        <Pressable style={styles.loginButton} onPress={onSubmit}>
          <Text
            style={{ color: colors.decimo, fontSize: 20, fontFamily: "Bebas" }}
          >
            Create Account
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
          Already have an account?
        </Text>
        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{ color: colors.decimo, fontSize: 20, fontFamily: "Bebas" }}
          >
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
//
export default Signup;
