import { StyleSheet,StatusBar } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({ 
    container:{
        flex:1,
        backgroundColor:colors.decimo,
        height:"auto"
    },
    containerx: {
        flexDirection:"row",
        borderColor:colors.secondary,
        backgroundColor:colors.decimo,
        marginTop:1,
        padding:1,
        width:"100%",
        height:"11%",
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
      weapperStyle: {
        justifyContent: 'space-between',
      },
      plataformcontainer:{  height:80,
        marginTop:20,
        bottom:'5%',
        justifyContent:'center',
        marginTop:0,
        alignItems:'center',
      },
      imageplataform:{
       
        alignSelf: 'center',
        height: 60,
        alignItems:"center",
        marginHorizontal:11,
        width: 60,
        borderRadius:12,
      },
      
})