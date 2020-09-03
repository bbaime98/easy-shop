import React, {Component} from "react"
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from "react-native"
import colors from "./colors"
import {AntDesign} from "@expo/vector-icons"
import tempData from "./tempData"
import TodoList from "./components/TodoList"

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: "row"}}>
          <View style={styles.divider} />

          <Text style={styles.title}>
            Todo
            <Text style={{fontWeight: "300", color: colors.blue}}>Lists</Text>
          </Text>
          <View style={styles.divider} />
        </View>

        <View style={{marginVertical: 48}}>
          <TouchableOpacity style={styles.addListIcon}>
            <AntDesign name="plus" size={16} color={colors.blue} />
          </TouchableOpacity>

          <Text style={styles.addText}>Add List</Text>
        </View>

        <View style={styles.flatListContainer}>
          <FlatList
            data={tempData}
            keyExtractor={(item) => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <TodoList list={item} />}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: colors.black,
    paddingHorizontal: 64,
  },
  addListIcon: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  addText: {
    color: colors.blue,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8,
  },
  flatListContainer: {
    height: 275,
    paddingLeft: 32,
  },
})

export default App
