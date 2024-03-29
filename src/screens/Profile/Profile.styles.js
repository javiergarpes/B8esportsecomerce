import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    backgroundColor: colors.decimo,
    alignItems:"center",
   
  },
  image:{
    width:200,
    height:200,
    borderRadius:100

  },
  cameraButton: {
    backgroundColor: colors.secondary,
    height: 50,
    width: '50%',
    borderRadius: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
