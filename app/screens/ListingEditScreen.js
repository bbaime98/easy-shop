import React, {useState} from "react"
import {StyleSheet, Alert} from "react-native"
import * as Yup from "yup"
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms"
import Screen from "../components/Screen"
import CategoryPickerItem from "../components/CategoryPickerItem"
import FormImagePicker from "../components/forms/FormImagePicker"
import useLocation from "../components/hooks/useLocation"
import listinAPi from "../api/listings"
import UploadScreen from "./UploadScreen"

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
})

const Categories = [
  {label: "Car", value: 1, backgroundColor: "red", icon: "apps"},
  {label: "House", value: 4, backgroundColor: "yellow", icon: "email"},
  {label: "Camera", value: 8, backgroundColor: "green", icon: "lock"},
]
export default function ListingEditScreen() {
  const location = useLocation()
  const [uploadVisible, setUploadVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleSubmit = async (listing, {resetForm}) => {
    setProgress(0)
    setUploadVisible(true)
    const result = await listinAPi.addListing(
      {...listing, location},
      (progress) => setProgress(progress)
    )

    if (!result.ok) {
      setUploadVisible(false)
      return alert("Could not save the listing")
    }

    resetForm()
  }
  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          placeholder="Description"
          numberOfLines={3}
        />
        <AppFormPicker
          items={Categories}
          name="category"
          // numberOfColumns={3}
          // PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
