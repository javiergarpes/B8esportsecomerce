import { StyleSheet,StatusBar } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({ 
    container:{
        
        backgroundColor:colors.decimo,
        height:"auto"
    },
    containerx: {
        flexDirection:"row",
        borderColor:colors.secondary,
        backgroundColor:colors.octavo,
        marginTop:1,
        padding:1,
        width:"auto",
        height:"17%",
      },
      itemx: {
        backgroundColor: 'red',
        padding: 10,
        marginVertical: 1,
        marginHorizontal: 70,
      },
      titlex: {
        fontSize: 40,
        
      },
      image: {
        alignSelf: 'center',
        height: 100,
        alignItems:"center",
        marginHorizontal:11,
        width: 100,
        borderRadius:12,
      },
})