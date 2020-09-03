import React from "react"
import {View, StyleSheet, Text} from "react-native"
import colors from "../colors"

const TodoList = ({list}) => {
  const completedCounter = list.todos.filter((todo) => todo.completed).length
  const remainingCounter = list.todos.length - completedCounter
  return (
    <View style={[styles.container, {backgroundColor: list.color}]}>
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
    </View>
  )
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
