import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"

export default styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        paddingTop:10,
        backgroundColor:colors.octavo,
    },
    input:{
        color:'white',
        backgroundColor:colors.octavo,
        borderRadius:8,
        padding:10,
        borderWidth:1.5,
        marginLeft:4,
        borderColor: colors.once,
        width:"75%",
        fontSize:20,
        
    }
})