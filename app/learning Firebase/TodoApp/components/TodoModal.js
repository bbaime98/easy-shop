import React, {Component} from "react"
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
} from "react-native"
import {AntDesign, Ionicons} from "@expo/vector-icons"
import colors from "../colors"
import CloseButton from "./CloseButton"
import Screen from "./Screen"

class TodoModal extends Component {
  state = {
    // name: this.props.list.name,
    // color: this.props.list.color,
    // todos: this.props.list.todos,
    newTodo: "",
  }
  toggleTodoComplete = (index) => {
    let list = this.props.list
    list.todos[index].completed = !list.todos[index].completed
    this.props.updateList(list)
  }
  renderTodo = (todo, index) => {
    return (
      <View style={styles.todoContainer}>
        <TouchableOpacity onPress={() => this.toggleTodoComplete(index)}>
          <Ionicons
            name={todo.completed ? "ios-square" : "ios-square-outline"}
            size={24}
            color={colors.gray}
            style={{width: 32}}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.todo,
            {
              textDecorationLine: todo.completed ? "line-through" : "none",
              color: todo.completed ? colors.gray : colors.black,
            },
          ]}
        >
          {todo.title}
        </Text>
      </View>
    )
  }
  addTodo = () => {
    let list = this.props.list
    list.todos.push({title: this.state.newTodo, completed: false})

    this.props.updateList(list)
    this.setState({newTodo: ""})

    Keyboard.dismiss()
  }

  render() {
    const list = this.props.list
    const taskCount = list.todos.length
    const completedCount = list.todos.filter((todo) => todo.completed).length
    return (
      // <SafeAreaView style={styles.container}>
      <Screen>
        {/* <TouchableOpacity
          // style={{position: "absolute", top: 64, right: 32, zIndex: 10}}*/}
        <CloseButton onPress={this.props.closeModal} />
        <View
          style={[
            styles.section,
            styles.header,
            {borderBottomColor: list.color},
          ]}
        >
          <View>
            <Text style={styles.title}>{list.name}</Text>
            <Text style={styles.taskCount}>
              {completedCount} of {taskCount} tasks
            </Text>
          </View>
        </View>

        <View style={[styles.section, {flex: 3}]}>
          <FlatList
            data={list.todos}
            renderItem={({item, index}) => this.renderTodo(item, index)}
            keyExtractor={(item) => item.title}
            contentContainerStyle={{paddingHorizontal: 32, paddingVertical: 64}}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={[styles.section, styles.footer]}>
          <TextInput
            style={[styles.input, {borderColor: list.color}]}
            onChangeText={(text) => this.setState({newTodo: text})}
            value={this.state.newTodo}
          />
          <TouchableOpacity
            style={[styles.addTodo, {backgroundColor: list.color}]}
            onPress={() => this.addTodo()}
          >
            <AntDesign name="plus" size={16} color={colors.white} />
          </TouchableOpacity>
        </View>
      </Screen>
    )
  }
}

const styles = StyleSheet.create({
  section: {
    flex: 1,
    alignItems: "stretch",
  },
  header: {
    justifyContent: "flex-end",
    marginLeft: 64,
    borderBottomWidth: 3,
  },
  taskCount: {
    marginTop: 4,
    marginBottom: 16,
    color: colors.gray,
    fontWeight: "600",
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: colors.black,
  },
  footer: {
    paddingHorizontal: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  addTodo: {
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  todoContainer: {
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  todo: {
    fontWeight: "700",
    fontSize: 16,
    color: colors.black,
  },
})

export default TodoModal
