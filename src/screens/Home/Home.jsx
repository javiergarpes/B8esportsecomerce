import React from "react";
import styles from "./Home.style";

import { CategoryItem } from "./components";
import { Header } from '../../Components'
import { View, FlatList } from "react-native";
import dataCategories from "../../data/dataCategories";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header title={"Categories"} />
      <FlatList
        data={dataCategories}
        keyExtractor={(category) => category}
        renderItem={({ item }) => <CategoryItem category={item} />}
      />
    </View>
  );
};

export default Home;



