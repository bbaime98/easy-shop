import React, {useEffect} from "react"
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker"
import colors from "../../config/colors"

export default function ImageInput({imageUri, onChangeImage}) {
  useEffect(() => {
    requestPermission()
  }, [])

  //for being able to pick images only
  const requestPermission = async () => {
    const {granted} = await ImagePicker.requestCameraRollPermissionsAsync()
    if (!granted) alert("You need to enable permission to access the library")
  }
  // for picking both image and video
  // const requestPermision = async () => {
  //   if (Constants.platform.ios) {
  //     const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
  //     if (status !== "granted") {
  //       alert("Sorry, we need camera roll permissions to make this work!")
  //     }
  //   }
  // }
  const handlePress = () => {
    if (!imageUri) selectImage()
    else
      Alert.alert("Delete", "Are sure you want to delete this image?", [
        {text: "Yes", onPress: () => onChangeImage(null)},
        {text: "No"},
      ])
  }
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        quality: 0.5,
      })
      if (!result.cancelled) onChangeImage(result.uri)
    } catch (error) {
      console.log("image selection error")
    }
  }
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.medium}
            name="camera"
            size={40}
          />
        )}
        {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
})
