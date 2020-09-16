import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import Header from "./components/Header"
import TabNavigator from "./components/TabNavgator"

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <TabNavigator />
    </NavigationContainer>
  )
}
