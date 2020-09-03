import React, {Component} from "react"
import {View, StyleSheet, Text} from "react-native"
import {Icon} from "native-base"

class PostsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>PostsScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})

export default PostsScreen
