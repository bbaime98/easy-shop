import React from "react"
import {View, StyleSheet, Text} from "react-native"
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"
import {MaterialCommunityIcons} from "@expo/vector-icons"

import PostsScreen from "../screens/PostsScreen"

const Stack = createStackNavigator()
const navigationOptions = {
  headerLeft: () => (
    <MaterialCommunityIcons
      name="camera-outline"
      size={34}
      style={styles.leftIcon}
    />
  ),
  title: "Social App",
  headerRight: () => (
    <MaterialCommunityIcons name="send" size={34} style={styles.rightIcon} />
  ),
  headerTransparent: true,
}
const StackNavigator = () => (
  // <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
      name="home"
      component={PostsScreen}
      options={navigationOptions}
    />
  </Stack.Navigator>
  // </NavigationContainer>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  leftIcon: {
    paddingLeft: 10,
  },
  rightIcon: {
    paddingRight: 10,
  },
})

export default StackNavigator
