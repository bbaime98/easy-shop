import React from "react"
import { StyleSheet, FlatList } from "react-native"
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from "../config/colors";


const listings = [
    {
        id: 1,
        title: 'A brand new car for sale',
        price: 100,
        image: require("../assets/shop.jpg")
    },
    {
        id: 2,
        title: "A cool house",
        price: 300,
        image: require("../assets/shop.jpg")
    }
]
export default function ListingsScreen() {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    (
                        <Card
                            title={item.title}
                            subTitle={"$" + item.price}
                            image={item.image}
                        />
                    )
                }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    },
})
