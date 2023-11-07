import { Pressable, Text, View,Image } from "react-native";

import React from "react";
import { Card } from "../../../../Components";
import { setCategorySelected } from '../../../../features/shop/shopSlice'
import styles from "./CategoryItem.style";
import { useDispatch } from "react-redux";


const CategoryItem = ({ category, navigation,categories }) => {
  const dispatch = useDispatch()
  return (
    <Pressable
    onPress={() => {
      
      dispatch(setCategorySelected(category))
      navigation.navigate('Products', { category })
    }}
    style={styles.container}
  >
      <View style={styles.cardContainer}>
         
      <Image
          
          style={styles.image}
          source={{
            uri: categories.image,
          }}
        /> 
          
        <Text style={styles.text}>{category}</Text>
      </View>
    </Pressable>
  );
};

export default CategoryItem;
