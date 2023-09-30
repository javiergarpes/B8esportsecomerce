import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.decimo,
  },
  listContainer: {
    flex: 5,
  },
  buttonContainer: {
    flex: 1,
  },
  boton:{
    width: '37%',
    backgroundColor: colors.secondary,
    marginBottom: 20,
    alignItems: 'flex-start',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 20,
    flexDirection:"row",
  }
})
