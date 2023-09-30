import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c1b1b",
  },
  loginContainer: {
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  inputEmail: {
    
    fontFamily: "PlusJakartaSans",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0.06,
    color: "#ffffff",
    borderColor: "#21d4b4",
    width: 328,
    height: 70,
    borderRadius: 12,
    backgroundColor: "#1c1b1b",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#21d4b4",
    textAlign: "left",
    marginTop:10,
    marginBottom:10,
  },
  loginButton: {
    width: 328,
    height: 60,
    borderRadius: 12,
    backgroundColor: "#21d4b4",
    alignContent:'center',
    alignSelf:"center",
    paddingTop:"5%",
    alignItems:"center"
    
  },
  inputEmailtext: {
    color: "white",
  },
  Images: {
    width: 100,
    height: 100,
    justifyContent: "center",
  },
})