import React from "react"
import {ImageBackground, StyleSheet, View, Image, Text} from "react-native"
import AppButton from "../components/AppButton"

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/shop1.jpg")}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} />
        <Text style={styles.tagline}>Buy and sell online easily!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="login" />
        <AppButton title="signup" color="secondary" />
      </View>
    </ImageBackground>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
})
