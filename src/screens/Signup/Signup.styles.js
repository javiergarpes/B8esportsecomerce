import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:colors.octavo
      },
      loginContainer: {
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputEmail: {
        width: '95%',
        backgroundColor: colors.sexto,
        height: 30,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10
      },
      loginButton: {
        backgroundColor: colors.sexto,
        width: '50%',
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputEmailtext:{
        color:"white"
      },
      Images:{
        width:100 ,
        height :100,
        justifyContent:'center',
      }
    })