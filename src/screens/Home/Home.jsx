import React from "react";
import styles from "./Home.style";

import {  CategoryItem } from "./components";
import { Header } from "../../Components";
import { View, FlatList,Text,Image } from "react-native";
import dataCategories from "../../data/dataCategories";
import { SafeAreaView } from "react-native-safe-area-context";
import CarrucelData from "../../data/CarrucelData";

const Item = ({title}) => (
  <View style={styles.itemx}>
    <Text style={styles.titlex}>{title}</Text>
  </View>
);
const Home = ({  navigation }) => {
  return (
    <View style={styles.container}>
      <Header title={"Torneos"} />
      
      <SafeAreaView style={styles.containerx}>
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
    </SafeAreaView>
      
      
      <FlatList
        data={dataCategories}
        keyExtractor={(category) => category}
        renderItem={({ item }) => (
          <CategoryItem
            category={item}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

export default Home;
