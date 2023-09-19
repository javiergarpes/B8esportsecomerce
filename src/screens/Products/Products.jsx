import {
  FlatList,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
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
    <SafeAreaView style={styles.container}>
      {/* <Header title={category} /> */}
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
        <FlatList
          data={arrProducts}
          numColumns={2}
          columnWrapperStyle={styles.weapperStyle}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.productContainer}
              onPress={() => navigation.navigate('Details', { product: item })}
            >
              <Image
                style={styles.image}
                source={{
                  uri: item.images[0],
                }}
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{`$${item.price.toFixed(2)}`}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  )
};

export default Products;
