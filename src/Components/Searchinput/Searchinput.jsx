import { Pressable, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../constants/colors'
import AntDesign from '@expo/vector-icons/AntDesign'
import styles from './Searchinput.style'


const SearchInput = ({ onSearch }) => {
  const [value, setValue] = useState('')

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
      />
      <Pressable onPress={search}>
        <AntDesign name="search1" size={25} color={colors.decimo} />
      </Pressable>
      <Pressable onPress={clearInput}>
        <AntDesign name="closecircleo" size={25} color={colors.decimo} />
      </Pressable>
    </View>
  )
}

export default SearchInput