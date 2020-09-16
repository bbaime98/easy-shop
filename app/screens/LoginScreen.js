import React, { useState, useEffect, Component } from "react"
import { StyleSheet, Image, View, Text } from "react-native"
import Screen from "../components/Screen"
import {
  AppForm,
  SubmitButton,
  AppFormField,
  ErrorMessage,
} from "../components/forms"
import * as Yup from "yup"
import authApi from "../api/auth"
import useAuth from "../auth/useAuth"


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
})
const LoginScreen = () => {
  const auth = useAuth()
  const [loginFailed, setLoginFailed] = useState(false)

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password)

    if (!result.ok) return setLoginFailed(true)
    setLoginFailed(false)
    auth.login(result.data)
  }
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password."
          visible={loginFailed}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          placeholder="Email"
          name="email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          name="password"
        />

        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
})

export default LoginScreen
