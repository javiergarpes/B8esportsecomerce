import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";


export default styles = StyleSheet.create({
    container: {
      backgroundColor: colors.secondary ,
      height: 90,
      paddingTop: 35,
      width: "100%",
      
      alignItems: "center",
      flexDirection:"row",
    },
    text: {
      fontSize: 30,
      fontFamily:'Bebas',
      alignContent:'center',
      justifyContent: "center",
      
    },
    Images:{
      marginRight:"30%",
      marginBottom:5,
      height:"110%",
      width: "13%",
      
    }
  });