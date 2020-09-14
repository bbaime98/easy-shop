import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import * as firebase from 'firebase'
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
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
    render() {
        return <Container style={styles.container}>
            <Form>
                <Item floatingLabel>
                    <Label>Email</Label>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                    />
                </Item>
                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input
                        secureTextEntry={true}
                        autoCorrect={false}
                        autoCapitalize="none"
                    />
                </Item>
                <Button
                    full
                    rounded
                    success
                    style={{ marginTop: "10" }}
                >
                    <Text>LOGIN</Text>
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
