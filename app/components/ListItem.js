import React from "react"
import { StyleSheet, View, Image, TouchableHighlight } from "react-native"
import AppText from "./AppText"
import colors from "../config/colors"
import Swipeable from 'react-native-gesture-handler/Swipeable';

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
            <AppText style={styles.owntitle}>{title}</AppText>
            {subTitle && <AppText style={styles.ownsubTitle}>{subTitle}</AppText>}
          </View>
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
  },
  owntitle: {
    fontWeight: "600",
  },
  ownsubTitle: {
    color: colors.medium,
  },
})

export default ListItem;
