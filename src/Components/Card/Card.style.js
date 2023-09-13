import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";



export default styles = StyleSheet.create({
    container:{
        backgroundColor:colors.secondary,
        shadowColor:colors.primary,
        shadowOffset: { width: 3 , height :5},
        elevation:10,
        shadowOpacity:1,
        shadowRadius:1,
    },


})