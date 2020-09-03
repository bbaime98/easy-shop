import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import Header from "../IgClone/components/Header"
import TabNavigator from "../IgClone/components/TabNavgator"

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <TabNavigator />
    </NavigationContainer>
  )
}
