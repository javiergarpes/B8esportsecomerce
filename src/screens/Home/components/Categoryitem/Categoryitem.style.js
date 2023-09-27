import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/colors";

export default styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal:30,
        marginVertical:13,
        padding:11,
        width:'85%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:colors.secondary,
        shadowColor:colors.primary,
        shadowOffset: { width: 3 , height :5},
        elevation:10,
        shadowOpacity:1,
        shadowRadius:1,
        
    },
    text:{
      fontSize:30,
      fontFamily:'Bebas',
    }
})