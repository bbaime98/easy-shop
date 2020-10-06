import React, {Component} from "react"
import {View, StyleSheet, Text, TouchableOpacity, Modal} from "react-native"
import colors from "../colors"
import TodoModal from "./TodoModal"

class TodoList extends Component {
  state = {
    showListViisible: false,
  }

  toggleListModal() {
    this.setState({showListViisible: !this.state.showListViisible})
  }
  render() {
    const list = this.props.list
    const completedCounter = list.todos.filter((todo) => todo.completed).length
    const remainingCounter = list.todos.length - completedCounter

    return (
      <View>
        <Modal
          visible={this.state.showListViisible}
          animationType="slide"
          onRequestClose={() => this.toggleListModal()}
        >
          <TodoModal
            list={list}
            closeModal={() => this.toggleListModal()}
            updateList={this.props.updateList}
          />
        </Modal>
        <TouchableOpacity
          style={[styles.container, {backgroundColor: list.color}]}
          onPress={() => this.toggleListModal()}
        >
          <Text style={styles.listTitle} numberOfLines={1}>
            {list.name}
          </Text>

          <View>
            <View style={{alignItems: "center"}}>
              <Text style={styles.count}>{remainingCounter}</Text>
              <Text style={styles.subTitle}>Remaining</Text>
            </View>
            <View style={{alignItems: "center"}}>
              <Text style={styles.count}>{completedCounter}</Text>
              <Text style={styles.subTitle}>Completed</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    alignItems: "center",
    width: 200,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.white,
    marginBottom: 18,
  },
  count: {
    fontSize: 48,
    fontWeight: "200",
    color: colors.white,
  },
  subTitle: {
    fontWeight: "700",
    fontSize: 12,
    color: colors.white,
  },
})

export default TodoList
