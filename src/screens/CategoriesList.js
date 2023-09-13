import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const CategoriesList = ({category}) => {
  return (
    <> 
    <Header title={category}/>
    <View>
    <Text>Categories List</Text>
  </View>
  </>
   
  )
}

export default CategoriesList

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:'100%',
    },
})