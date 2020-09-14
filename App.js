import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import * as firebase from 'firebase'
import * as Facebook from 'expo-facebook';

import { Container, Content, Header, Form, Input, Item, Button, Label, } from 'native-base'
const firebaseConfig = {
  apiKey: "AIzaSyABg7IEzJbh_EgwkWaARKL_cvQKFJ_o1gE",
  authDomain: "easy-shop-42753.firebaseapp.com",
  databaseURL: "https://easy-shop-42753.firebaseio.com",
  projectId: "easy-shop-42753",
  storageBucket: "easy-shop-42753.appspot.com",
  messagingSenderId: "893648098228",
  appId: "1:893648098228:web:c3bcac3c8053b75c8518e1",
}

firebase.initializeApp(firebaseConfig)
class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      email: '',
      password: ''
    })
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        console.log("USER CRED____", user)
      }
    })
  }
  signupUser = (email, password) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password)
    } catch (error) {
      console.log(error)
    }
  }

  loginUser = async (email, password) => {
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password)
      // console.log('USER____', user)
    } catch (error) {
      console.log(error)
    }
  }

  loginWithFacebook = async () => {
    try {
      await Facebook.initializeAsync('1293821754291306');
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        try {
          const credentials = await firebase.auth.FacebookAuthProvider.credential(token)
          await firebase.auth().signInWithCredential(credentials)

        } catch (error) {
          console.log('CREDIALS LOGIN ERROR', error)
        }
      }

    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);

    }
  }
  render() {
    return <Container style={styles.container}>
      <Form>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
          />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
          />
        </Item>
        <Button
          full
          rounded
          success
          style={{ marginTop: 10 }}
          onPress={() => this.loginUser(this.state.email, this.state.password)}
        >

          <Text>LOGIN</Text>
        </Button>
        <Button
          full
          rounded
          primary
          style={{ marginTop: 10 }}
          onPress={() => this.signupUser(this.state.email, this.state.password)}
        >

          <Text>SIGNUP</Text>
        </Button>
        <Button
          full
          rounded
          primary
          style={{ marginTop: 10 }}
          onPress={() => this.loginWithFacebook()}
        >

          <Text>LOGIN WITH FACEBOOK</Text>
        </Button>
      </Form>
    </Container>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10
  },
})

export default App
