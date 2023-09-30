import { Image, Pressable, SafeAreaView, Text, View,FlatList } from 'react-native'

import React from 'react'
import { addItem } from '../../features/cart/cartSlice'
import styles from './Details.style'
import { useDispatch } from 'react-redux'
import Feather from '@expo/vector-icons/Feather'
import { colors } from '../../constants/colors'

const Details = ({ route }) => {
  const { product } = route.params
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }))
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <FlatList
      
      data={product.images}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      decelerationRate={0.5}
      renderItem={({item}) => (
        <Image
        style={styles.image}
        source={{
          uri: item
        }}

      />)}
      />

      </View>
      <View style={styles.infocontainer}>
      <View style={styles.description}>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.descriptions}>{product.description}</Text>
      <Text style={styles.price}>{`$ ${product.price}`}</Text>
      <Pressable onPress={handleAddToCart} style={styles.boton} >
        <Text style={styles.textoboton}>Add to cart</Text>
        <Feather name="shopping-cart" size={20} color={colors.secondary} />
      </Pressable>
      </View>
      </View>

      
    </View>
  )
}

export default Details
