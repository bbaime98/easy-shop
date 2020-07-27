import React from "react"
import {StyleSheet, Image, View} from "react-native"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from "../config/colors"

export default function ViewImageScreen() {
  return (
    <View>
      <View>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View>
        <MaterialCommunityIcons
          name="trash-can-outine"
          color="white"
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/shop.jpg")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
})
