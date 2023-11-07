import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/colors";

export default styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal:25,
        marginVertical:5,
        padding:11,
        width:'85%',
        height:200, 
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:colors.secondary,
        shadowColor:colors.octavo,
        shadowOffset: { width: 3 , height :5},
        elevation:10,
        shadowOpacity:1,
        shadowRadius:1,
        
        
        
    },
    text:{
      fontSize:30,
      fontFamily:'Bebas',
    },
    container:{
        flex:2,
        backgroundColor:colors.decimo,
        height:"80%",
        
    },
    image:{
      alignSelf: 'center',
      height: "80%",
      alignItems:"center",
      marginHorizontal:11,
      width: "100%",
      borderRadius:12,
      
    },
    text:{
      fontSize:20,
      fontFamily:'Bebas',
    },
})
