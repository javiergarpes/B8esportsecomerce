import { Pressable, TextInput, View } from 'react-native'
import React, { useState,useEffect } from 'react'
import { colors } from '../../constants/colors'
import AntDesign from '@expo/vector-icons/AntDesign'
import styles from './Searchinput.style'


const SearchInput = ({ onSearch }) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    onSearch(value)
  }, [value])

  const search = () => {
    onSearch(value)
  }

  const clearInput = () => {
    setValue('')
    onSearch('')
  }

  
  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Search product"
        placeholderTextColor={"white"}
      />
      <Pressable onPress={search}>
        <AntDesign name="search1" size={24} color={"white"} />
      </Pressable>
      <Pressable onPress={clearInput}>
        <AntDesign name="closecircleo" size={24} color={"white"}  />
      </Pressable>
    </View>
  )
}

export default SearchInput