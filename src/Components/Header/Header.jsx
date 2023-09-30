import { Text, View,Image, Pressable} from "react-native";


import React from "react"
import styles from '../Header/Header.style'

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      
      <Image style={styles.Images} source={require('./../../assets/image/LogoB8esports/logoB8-Blanco_Logo-B8.png')}/>
      
      <Text style={styles.text}>{title}</Text>

    </View>
  );
};

export default Header;


