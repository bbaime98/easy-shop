import React from "react"
import ErrorMessage from "./ErrorMessage"
import AppTextInput from "../AppTextInput"
import {useFormikContext} from "formik"

export default function AppFormField({name, width, ...otherProps}) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext()
  return (
    <>
      <AppTextInput
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}
