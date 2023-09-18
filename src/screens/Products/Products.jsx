import {
  FlatList,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./Products.style";
import { Header, SearchInput } from "../../Components/";
import allProducts from "../../data/products";
import Searchinput from "../../Components/Searchinput/Searchinput";

const Products = ({ navigation, route }) => {
  const [arrProducts, setArrPoducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const { category } = route.params;

  useEffect(() => {
    if (category) {
      const products = allProducts.filter(
        (product) => product.category === category
      );
      const productFiltered = products.filter((product) =>
        product.title.includes(keyword)
      );
      setArrPoducts(productFiltered);
    } else {
      const productsFiltered = allProducts.filter((product) =>
        product.title.includes(keyword)
      );
      setArrPoducts(productsFiltered);
    }
  }, [category, keyword]);
  return (
    <View style={styles.container}>
      <Header title={category} />
      <Searchinput onSearch={setKeyword} />
      <View style={styles.listContainer}>
        <FlatList
          data={arrProducts}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", { product: item })}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Products;
