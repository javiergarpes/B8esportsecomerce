import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:colors.octavo,
        
    },
    image:{
        alignSelf:"center",
        height:'45%',
        width:"90%",
        borderRadius:8,
    },
    title:{
        fontSize : 30 ,
        fontFamily:'Bebas',
        marginVertical:15,
    },
    price:{
        fontSize: 25,
        fontWeight:"bold",
        marginVertical:15,
        fontFamily:'Bebas',
    },
    description:{
        fontSize :21 ,
    },




})