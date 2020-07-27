import React from "react"
import { View } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import colors from "../config/colors"

const Icon = ({
  name,
  size = 40,
  backgroundcolor = colors.secondary,
  iconColor = "#fff",
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: backgroundcolor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  )
}

export default Icon;
