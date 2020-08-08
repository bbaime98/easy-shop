import React, {useState, useEffect} from "react"
import {StyleSheet, FlatList} from "react-native"
import Screen from "../components/Screen"
import Card from "../components/Card"
import routes from "../navigation/routes"
import colors from "../config/colors"

import listingApi from "../api/listings"
import AppText from "../components/AppText"
import Button from "../components/AppButton"
import ActivityIndicator from "../components/ActivityIndicator"
import useApi from "../components/hooks/useApi"

export default function ListingsScreen({navigation}) {
  const {data: listings, error, loading, request: loadListings} = useApi(
    listingApi.getListings
  )
  useEffect(() => {
    loadListings()
  }, [])

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
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
