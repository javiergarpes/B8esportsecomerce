import { Image, Pressable, Text, View } from 'react-native'

import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import styles from './Cartitem.style'

const Cartitem = ({item}) => {
  return (
    <View style={styles.container}>
      
      <View>
      <Image
          style={styles.image}
          source={{
            uri: item.images[0],
          }}
        />
      </View>
      <View style={styles.cardcontainer}>
      <View>
        <Text style={styles.name}>{item.title}</Text>
      </View>
      <View style={styles.details}>
        <View >
          <Text>{item.quantity}</Text>
          <Text>{item.price}</Text>
        </View>
        <Pressable style={{alignSelf:"flex-start"}}>
          <Feather name="trash" size={24} color={'red'} />
        </Pressable>
      </View>
      </View>
    </View>
  )
}

export default Cartitem