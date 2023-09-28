import React from "react";
import styles from "./Home.style";

import {  CategoryItem } from "./components";
import { Header } from "../../Components";
import { View, FlatList,Text,Image } from "react-native";
import dataCategories from "../../data/dataCategories";

import CarrucelData from "../../data/CarrucelData";
import { useGetCategoriesQuery } from "../../services/shopApi";


const Item = ({title}) => (
  <View style={styles.itemx}>
    <Text style={styles.titlex}>{title}</Text>
  </View>
);
const Home = ({  navigation }) => {
  const {data,isLoading}=useGetCategoriesQuery()
  return (
    <View style={styles.container}>
      <Header title={"Torneos"} />
      
      <View style={styles.containerx}>
      <FlatList
      
        data={CarrucelData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        renderItem={({item}) => (
          <Image
          style={styles.image}
          source={{
            uri: item.images,
          }}
        />
        )}
        keyExtractor={item => item.id}

        
      />
    </View>
      
      <View style={{ paddingBottom:250,backgroundColor:'white'}}>
      <FlatList
        data={data}
        keyExtractor={(category) => category.title}
        renderItem={({ item }) => (
          <CategoryItem
            category={item.title}
            navigation={navigation}
          />
        )}
      />
      </View>
    </View>
  );
};

export default Home;