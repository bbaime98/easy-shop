import React from "react"
import {StyleSheet} from "react-native"
import * as Yup from "yup"
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms"
import Screen from "../components/Screen"
import CategoryPickerItem from "../components/CategoryPickerItem"

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
})

const Categories = [
  {label: "Car", value: 1, backgroundColor: "red", icon: "apps"},
  {label: "House", value: 4, backgroundColor: "yellow", icon: "email"},
  {label: "Camera", value: 8, backgroundColor: "green", icon: "lock"},
]
export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
