import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";


export default styles = StyleSheet.create({
    container: {
      backgroundColor: colors.secondary ,
      height: 80,
      paddingTop: 30,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      flexDirection:"row",
    },
    text: {
      fontSize: 30,
      fontFamily:'Bebas',
      alignContent:'center',
      
    },
    Images:{
      justifyContent:"space-between",
      height:"118%",
      width: "14%",
      
    }
  });