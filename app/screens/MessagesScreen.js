import React, { useState } from "react"
import { StyleSheet, FlatList, View } from "react-native"
import ListItem from "../components/ListItem"
import Screen from "../components/Screen"
import ListItemSeparator from "../components/ListItemSeparator"
import ListItemDeleteAction from "../components/ListItemDeleteAction"

const initialMessages = [
  {
    id: 1,
    title: "title 1",
    description: "this is a description",
    image: require("../assets/shop1.jpg"),
  },
  {
    id: 2,
    title: "title 2",
    description: "this is a second description",
    image: require("../assets/shop1.jpg"),
  },
]
export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id))
  }
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={
              () => <ListItemDeleteAction onPress={() => handleDelete(item)} />
            }
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "title 5",
              description: "this is a second description",
              image: require("../assets/shop1.jpg"),
            },
          ])
        }}
      />
    </Screen>
  )
}
