import React from "react"
import {StyleSheet} from "react-native"
import ErrorMessage from "./ErrorMessage"
import AppTextInput from "../AppTextInput"
import {useFormikContext} from "formik"

export default function AppFormField({name, ...otherProps}) {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext()
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage
        // style={styles.message}
        error={errors[name]}
        visible={touched[name]}
      />
    </>
  )
}

const styles = StyleSheet.create({
  message: {
    paddingLeft: 40,
  },
})
