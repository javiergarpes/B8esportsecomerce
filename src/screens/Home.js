import Categories from '../Components/Categories'
import Header from '../Components/Header'
import React from 'react'
import { StyleSheet } from 'react-native'


const Home = () => {
  return (
    <>
    <Header title={'Home'}/>
    <Categories/>
    
    </>
  
  )
}

export default Home

const styles = StyleSheet.create({})