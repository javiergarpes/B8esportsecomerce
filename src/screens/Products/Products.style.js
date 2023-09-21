import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    
  },
  listContainer: {
    flex: 1,
    marginTop: 15,
    paddingHorizontal: 15,
    backgroundColor:colors.octavo,
  },
  weapperStyle: {
    justifyContent: 'space-between',
  },
  productContainer: {
    width: '47%',
    backgroundColor: colors.primary,
    marginBottom: 20,
    alignItems: 'flex-start',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 20,
    gap: 10,
  },
  image: {
    alignSelf: 'center',
    height: 150,
    width: 150,
  },
  title: {
    fontWeight: '700',
    fontVariant: 'small-caps',
  },
  price: {
    fontSize: 20,
    fontVariant: '',
  },
})
