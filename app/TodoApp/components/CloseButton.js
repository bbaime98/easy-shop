import React from "react"
import {View, StyleSheet, TouchableOpacity} from "react-native"
import {AntDesign} from "@expo/vector-icons"

function CloseButton({onPress}) {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
      <AntDesign name="close" size={24} color={colors.white} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    position: "absolute",
    // top: 40,
    right: 15,
    backgroundColor: "red",
    borderRadius: 5,
    zIndex: 10,
  },
})

export default CloseButton
