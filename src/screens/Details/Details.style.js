import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:colors.decimo,
        
    },
    image:{
        alignSelf:"center",
        height:300,
        width:300,
       
        resizeMode:"contain",
        alignContent:"center",
        alignItems:"baseline",
        marginHorizontal:9,
    },
    title:{
        marginTop:15,
        marginHorizontal:9,
        fontSize : 40 ,
        fontFamily:'Bebas',
        marginVertical:15,
        color:"white"
    },
    price:{
        fontSize: 25,
        fontWeight:"bold",
        marginVertical:15,
        fontFamily:'Bebas',
        color:"white",
    },
    description:{
        flex:1,
        marginHorizontal:9,
        color:"white",
    },
    imageContainer:{
        width:"100%",
        height:"15%",
        flex:1,
        alignItems:"center",
        alignContent:"center",
        
       
        
    },
    descriptions:{
        color:"white",
        fontSize:15,
    },
    textoboton:{
        color:"white",
        fontFamily:'Bebas',
        fontSize: 20,
        alignSelf:"center",
        marginRight:9,
        
        
    },
    boton:{
        width: '37%',
        backgroundColor: colors.octavo,
        marginBottom: 20,
        alignItems: 'flex-start',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 20,
        flexDirection:"row",
        
        
    },
    infocontainer:{
        flex:1,
        borderColor:colors.once,
        borderWidth:9,
        marginTop:-30,
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
        backgroundColor:colors.once

    }


   


})