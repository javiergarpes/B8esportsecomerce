import { Image, Pressable, Text, TextInput, View } from "react-native";

import React, { useState } from "react";
import styles from "./login.styles";
import { colors } from "../../constants/colors";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email,setEmail]= useState('')
  const [password,setPassword]=useState('')
  const [triggerSignup, result]=useSignUpMutation()
  const dispatch = useDispatch()
  const onSubmit =()=> {
    console.log(email,password)
    triggerLogin({
      email,
      password,
    })
    console.log(result)
    if(result.isSuccess){
      dispatch(setUser(result))
    }
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
        />
        <TextInput
          style={styles.inputEmail}
          placeholder="Contraseña"
          placeholderTextColor="white"
        />
        <Pressable style={styles.loginButton}>
          <Text style={{ color: colors.decimo, fontFamily: "Bebas",fontSize: 20, }}>
            Login
          </Text>
        </Pressable>
        <Text style={{ color: "white", fontSize: 12, fontFamily: "Bebas", margin:8 }}>
          No have an account?
        </Text>
        <Pressable style={styles.loginButton}>
          <Text style={{ color: colors.decimo, fontFamily: "Bebas",fontSize: 20, }}>
            Sign up
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
