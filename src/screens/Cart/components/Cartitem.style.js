import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

export default styles = StyleSheet.create({ 
    container: {
        margin: 15,
        padding: 8,
        borderRadius: 20,
        backgroundColor: colors.once,
        flexDirection:'row'
      },
      name: {
        fontSize: 20,
        color: colors.noveno,
      },
      image: {
        width: 90,
        height: 90,
        borderRadius:10,
        
      },
      details: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      cardcontainer:{
        flex:1,
        margin:10,
        flexDirection:'column'
      },
      price: {
        fontSize: 18,
        color: colors.noveno,
      },
      quantity: {
        fontSize: 18,
        color: colors.noveno,
      },
})