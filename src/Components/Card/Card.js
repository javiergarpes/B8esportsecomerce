import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../constants/colors'
import React from 'react'

const Card = ({children,style}) => {
  return <View style={[styles.container,style]}>{children}</View>
}

export default Card

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.secondary,
        shadowColor:'#000',
        shadowOffset: { width: 3 , height :5},
        elevation:10,
        shadowOpacity:1,
        shadowRadius:1,
    },


})