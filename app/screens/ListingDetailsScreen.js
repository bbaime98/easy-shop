import React from "react"
import {StyleSheet, View} from "react-native"
import {Image} from "react-native-expo-image-cache"
import AppText from "../components/AppText"
import colors from "../config/colors"
import ListItem from "../components/ListItem"

const ListingDetailsScreen = ({route}) => {
  const listing = route.params
  return (
    <View>
      <Image
        style={styles.image}
        preview={{uri: listing.images[0].thumbnailUrl}}
        tint="light"
        uri={listing.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="Bien Aime"
            subTitle="10 Listings"
            image={require("../assets/shop.jpg")}
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

export default ListingDetailsScreen
