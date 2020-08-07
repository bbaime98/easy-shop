import React from "react"
import {StyleSheet, Image} from "react-native"
import Screen from "../components/Screen"
import {AppForm, SubmitButton, AppFormField} from "../components/forms"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
})
export default function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo1.png")} style={styles.logo} />
      <AppForm
        initialValues={{email: "", password: "", name: ""}}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          placeholder="Name"
          name="name"
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
