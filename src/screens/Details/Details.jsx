import { Image, Pressable, SafeAreaView, Text, View,FlatList } from 'react-native'

import React from 'react'
import { addItem } from '../../features/cart/cartSlice'
import styles from './Details.style'
import { useDispatch } from 'react-redux'

const Details = ({ route }) => {
  const { product } = route.params
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }))
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
      <FlatList
      
      data={product.images}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      decelerationRate={0}
      renderItem={({item}) => (
        <Image
        style={styles.image}
        source={{
          uri: item
        }}

      />)}
      />

      </View>
      <View style={styles.description}>
      <Text style={styles.title}>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text style={styles.price}>{`$ ${product.price}`}</Text>
      <Pressable onPress={handleAddToCart}>
        <Text>Add to cart</Text>
      </Pressable>
      </View>

      
    </SafeAreaView>
  )
}

export default Details
