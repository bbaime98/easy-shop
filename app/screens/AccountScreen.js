import React from "react"
import {StyleSheet, View, FlatList} from "react-native"
import Screen from "../components/Screen"
import ListItem from "../components/ListItem"
import ListItemSeparator from "../components/ListItemSeparator"
import colors from "../config/colors"
import Icon from "../components/Icon"

const menuItems = [
  {
    title: "My Stuff",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
]
export default function AccountScreen({navigation}) {
  return (
    <Screen style={styles.screeen}>
      <View style={styles.container}>
        <ListItem
          title="Bien Aime"
          subTitle="aime@gmail.com"
          image={require("../assets/shop1.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={
            ({item}) => (
              // (
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
                onPress={() => navigation.navigate(item.targetScreen)}
              />
            )
            // )
          }
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screeen: {
    backgroundColor: colors.light,
  },
})
