import { FlatList, Pressable, Text, View } from 'react-native'

import CartItem from './components/Cartitem'
import React from 'react'
import dataCart from '../../data/dataCart'
import styles from './Cart.style'
import { usePostOrderMutation } from '../../services/shopApi'
import { useSelector } from 'react-redux'
import { Header } from '../../Components'

const Cart = () => {
  const cart = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.total)
  const [triggerPost, result] = usePostOrderMutation()

  const renderItem = ({ item }) => <CartItem item={item} />

  const confirmCart = () => {
    triggerPost({ total, cart, user: 'LoggedUser' })
  }
  return (
    
    <View style={styles.container}>
      <Header title={"Carrito"} />
      <View style={styles.listContainer}>
        <FlatList
          data={cart}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={confirmCart}>
          <Text>Confirm</Text>
          <View>
            <Text>{`Total $${total}`}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default Cart
