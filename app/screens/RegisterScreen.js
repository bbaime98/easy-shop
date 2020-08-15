import React, {useState} from "react"
import {StyleSheet, Image} from "react-native"
import Screen from "../components/Screen"
import {
  AppForm,
  SubmitButton,
  AppFormField,
  ErrorMessage,
} from "../components/forms"
import * as Yup from "yup"
import userAPi from "../api/users"
import useAuth from "../auth/useAuth"
import authApi from "../api/auth"
import ActivityIndicator from "../components/ActivityIndicator"
import useApi from "../components/hooks/useApi"

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
})
export default function RegisterScreen() {
  const registerApi = useApi(userAPi.register)
  const loginApi = useApi(authApi.login)
  const auth = useAuth()
  const [error, setError] = useState()

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo)

    if (!result.ok) {
      if (result.data) setError(result.data.error)
      else {
        setError("An unexpected error occured")
        console.log(result)
      }
      return
    }
    const {data: authToken} = await loginApi.request(
      userInfo.email,
      userInfo.password
    )
    auth.login(authToken)
  }
  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        {/* <Image source={require("../assets/logo1.png")} style={styles.logo} /> */}
        <AppForm
          initialValues={{email: "", password: "", name: ""}}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
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

          <SubmitButton title="Signup" />
        </AppForm>
      </Screen>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  // logo: {
  //   width: 80,
  //   height: 80,
  //   alignSelf: "center",
  //   marginTop: 50,
  //   marginBottom: 20,
  // },
})
