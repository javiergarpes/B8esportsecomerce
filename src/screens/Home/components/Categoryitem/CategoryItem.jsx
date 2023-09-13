import { Pressable, Text } from 'react-native'

import React from 'react'
import {Card} from '../../../../Components'
import styles from './Categoryitem.style'

const CategoryItem = ({category}) => {
  return (
    <Pressable onPress={()=>console.log(`esta es la category: ${category}`)}>
        <Card style={styles.cardContainer}>
            <Text style={styles.text}>{category}</Text>
        </Card>
    </Pressable>
  )
}

export default CategoryItem

