import React from "react"
import {StyleSheet, View, Image, TouchableHighlight} from "react-native"
import AppText from "./AppText"
import colors from "../config/colors"
import Swipeable from "react-native-gesture-handler/Swipeable"
import {MaterialCommunityIcons} from "@expo/vector-icons"

const ListItem = ({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailContainer}>
            <AppText style={styles.owntitle} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.ownsubTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            color={colors.medium}
            size={25}
            name="chevron-right"
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  detailContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  owntitle: {
    fontWeight: "900",
  },
  ownsubTitle: {
    color: colors.medium,
  },
})

export default ListItem
