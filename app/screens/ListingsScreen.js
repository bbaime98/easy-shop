import React from "react"
import {StyleSheet, FlatList} from "react-native"
import Screen from "../components/Screen"
import Card from "../components/Card"
import colors from "../config/colors"

const listings = [
  {
    id: 1,
    title:
      "Message Footer This should be used for referencing the issues using the following keywords: Start, Delivers, Fixes and Finishes. it should be inside a square bracket",
    price: 100,
    image: require("../assets/shop.jpg"),
  },
  {
    id: 2,
    title:
      "Message Footer This should be used for referencing the issues using the following keywords: Start, Delivers, Fixes and Finishes. it should be inside a square bracket Message Footer This should be used  for referencing the issues using the following keywords: Start, Delivers, Fixes and Finishes. it should be inside a square bracket",
    price: 300,
    image: require("../assets/shop.jpg"),
  },
]
export default function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
})
