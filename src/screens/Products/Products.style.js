import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.octavo,
    
  },
  listContainer: {
    flex: 1,
    marginTop: 15,
    paddingHorizontal: 15,
    backgroundColor:colors.once,
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
    height: 160,
    width: 160,
    borderRadius:24,
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
