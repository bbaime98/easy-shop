import React from "react"
import {StyleSheet} from "react-native"
import AppButton from "../AppButton"
import {useFormikContext} from "formik"

export default function SubmitButton({title}) {
  console.log("Submit BUTOON___")
  const {handleSubmit} = useFormikContext()
  return <AppButton title={title} onPress={handleSubmit} />
}

const styles = StyleSheet.create({
  container: {},
})
