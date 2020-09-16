import React, { Component } from "react"
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native"
import colors from "./colors"
import { AntDesign } from "@expo/vector-icons"
import tempData from "./tempData"
import TodoList from "./components/TodoList"
import AddListModal from "./components/AddListModal"
import FirebaseConnect from "./firebase"

class App extends Component {
  state = {
    addTodoVisible: false,
    lists: [],
    user: {},
    loading: true,
  }

  componentDidMount() {
    firebase = new FirebaseConnect((error, user) => {
      if (error) {
        return alert("Something went wrong")
      }

      firebase.getLists((lists) => {
        console.log("LLLLLLIST", lists)
        this.setState({ lists, user }, () => {
          this.setState({ loading: false })
        })
      })
      this.setState({ user })
    })
  }

  toggleAddTodoModal() {
    this.setState({ addTodoVisible: !this.state.addTodoVisible })
  }

  renderList = (list) => {
    return <TodoList list={list} updateList={this.updateList} />
  }

  addList = (list) => {
    this.setState({
      lists: [
        ...this.state.lists,
        { ...list, id: this.state.lists.length + 1, todos: [] },
      ],
    })
  }

  updateList = (list) => {
    this.setState({
      lists: this.state.lists.map((item) => {
        return item.id === list.id ? list : item
      }),
    })
  }

  render() {
    const { addTodoVisible } = this.state
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          visible={addTodoVisible}
          onRequestClose={() => this.toggleAddTodoModal()}
        >
          <AddListModal
            closeModal={() => this.toggleAddTodoModal()}
            addList={this.addList}
          />
        </Modal>
        <View>
          <Text>User: {this.state.user.uid}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.divider} />

          <Text style={styles.title}>
            Todo
            <Text style={{ fontWeight: "300", color: colors.blue }}>Lists</Text>
          </Text>
          <View style={styles.divider} />
        </View>

        <View style={{ marginVertical: 48 }}>
          <TouchableOpacity
            style={styles.addListIcon}
            onPress={() => this.toggleAddTodoModal()}
          >
            <AntDesign name="plus" size={16} color={colors.blue} />
          </TouchableOpacity>

          <Text style={styles.addText}>Add List</Text>
        </View>

        <View style={styles.flatListContainer}>
          <FlatList
            data={this.state.lists}
            keyExtractor={(item) => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => this.renderList(item)}
            keyboardShouldPersistTaps="always"
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
