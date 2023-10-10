import { Text, View,Image, Pressable} from "react-native";


import React from "react"
import styles from '../Header/Header.style'
import Feather from 'react-native-vector-icons/Feather';
import { clearUser } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { deleteSession } from "../../db";



const Header = ({ title }) => {
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(clearUser())
    deleteSession
  }
  return (
    <View style={styles.container}>
      
      <Image style={styles.Images} source={require('./../../assets/image/LogoB8esports/logoB8-Blanco_Logo-B8.png')}/>
      
      <Text style={styles.text}>{title}</Text>
      <View style={{flexDirection:'row',justifyContent:"space-around", alignItems:"center",marginHorizontal:"25%"}}>
      <Feather
          name='log-out'
          size={24}
          
          onPress={logout}/>
      </View>
    </View>
  );
};

export default Header;


/* image 1 */

