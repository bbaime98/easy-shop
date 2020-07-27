import React from "react"
import { StyleSheet, View, Image } from "react-native"
import AppText from "../components/AppText"
import colors from "../config/colors"
import ListItem from "../components/ListItem"

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/shop1.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Car with a radio</AppText>
        <AppText style={styles.price}>100$</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="Bien Aime"
            subTitle="10 Listings"
            image={require('../assets/shop.jpg')}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 5,
  },
})

export default ListingDetailsScreen;
