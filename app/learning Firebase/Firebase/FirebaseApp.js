import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import * as firebase from 'firebase'
import { Container, Content, Header, Form, Input, Item, Button, Label, } from 'native-base'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from './LoginScreen'
import DashboardScreen from './DashboardScreen'
import LoadingScreen from './LoadingScreen'
import { firebaseConfig } from './config'

firebase.initializeApp(firebaseConfig)
class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      email: '',
      password: ''
    })
  }
  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user != null) {
  //       console.log("USER CRED____", user)
  //     }
  //   })
  // }
  render() {
    return (
      <NavigationContainer>
        <StackNavig />
      </NavigationContainer>
    )
  }
}
const Stack = createStackNavigator()
const StackNavig = () => (
  <Stack.Navigator>
    <Stack.Screen name="Loading" component={LoadingScreen} />
    <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
  </Stack.Navigator>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10
  },
})

export default App
