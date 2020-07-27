import React, {useState} from "react"
import Screen from "./app/components/Screen"
import AppPicker from "./app/components/AppPicker"
import AppTextInput from "./app/components/AppTextInput"

const categories = [
  {label: "clothes", value: 1},
  {label: "cars", value: 2},
  {label: "moto", value: 4},
]
export default function App() {
  const [category, setCategory] = useState(categories[1])
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  )
}
