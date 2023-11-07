import React from "react";
import styles from "./Home.style";

import { CategoryItem } from "./components";
import { Header } from "../../Components";
import { View, FlatList, Text, Image } from "react-native";
import dataCategories from "../../data/dataCategories";

import CarrucelData, { PLATFORMS } from "../../data/CarrucelData";
import { useGetCategoriesQuery, useGetplataformsQuery } from "../../services/shopApi";

const Item = ({ title }) => (
	<View style={styles.itemx}>
		<Text style={styles.titlex}>{title}</Text>
	</View>
);
const Home = ({ navigation }) => {
	const { data, isLoading } = useGetCategoriesQuery();

	return (
		<View style={styles.container}>
			<Header title={"Torneos"} />

			<View style={styles.containerx}>
				<FlatList
					data={CarrucelData}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					decelerationRate={0}
					renderItem={({ item }) => (
						<Image
							style={styles.image}
							source={{
								uri: item.images,
							}}
						/>
					)}
					keyExtractor={(item) => item.id}
				/>
			</View>

			<View style={{ flex:1,flexDirection:'row',marginBottom:"10%"}}>
				<FlatList
					data={data}
          numColumns={2}
          columnWrapperStyle={styles.weapperStyle}
					keyExtractor={(category) => category.title}
					renderItem={({ item }) => (
            
						<CategoryItem category={item.title} navigation={navigation} categories={item} />
					)}
				/>
			</View>
      <View style={styles.plataformcontainer}>
      <FlatList
					data={PLATFORMS}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					decelerationRate={0}
					renderItem={({ item }) => (
						<Image
							style={styles.imageplataform}
							source={{
								uri: item.images,
							}}
						/>
					)}
					keyExtractor={(item) => item.id}
				/>
      </View>
		</View>
	);
};

export default Home;
