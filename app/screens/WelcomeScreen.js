import React from "react"
import {ImageBackground, StyleSheet, View, Image, Text} from "react-native"
import AppButton from "../components/AppButton"
import colors from "../config/colors"
import routes from "../navigation/routes"

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/shop.jpg")}
      blurRadius={1}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/shop1.jpg")} />
        <Text style={styles.tagline}>Buy and sell online easily!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="signup"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
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
    color: colors.white,
  },
})
