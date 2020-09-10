import React, {useState} from "react"
import {NavigationContainer} from "@react-navigation/native"
import AuthNavigator from "./app/navigation/AuthNavigator"
import navigationTheme from "./app/navigation/navigationTheme"
import OfflineNotice from "./app/components/OfflineNotice"
import AuthContext from "./app/auth/context"
import AppNavigator from "./app/navigation/AppNavigator"
import authStoarge from "./app/auth/storage"
import {AppLoading} from "expo"
import TodoApp from "./app/TodoApp/App"

export default function App() {
  //   const [user, setUser] = useState()
  //   const [isReady, setisReady] = useState(false)

  //   const restoreUser = async () => {
  //     const user = await authStoarge.getUser()
  //     if (user) setUser(user)
  //   }
  //   if (!isReady)
  //     return (
  //       <AppLoading startAsync={restoreUser} onFinish={() => setisReady(true)} />
  //     )

  return (
    // <AuthContext.Provider value={{user, setUser}}>
    //   <OfflineNotice />
    //   <NavigationContainer theme={navigationTheme}>
    //     {user ? <AppNavigator /> : <AuthNavigator />}
    //   </NavigationContainer>
    // </AuthContext.Provider>
    <TodoApp />
  )
}

// import React from "react"
// import {Text} from "react-native"
// import Screen from "./app/components/Screen"
// import {createStackNavigator} from "@react-navigation/stack"
// import {NavigationContainer} from "@react-navigation/native"
// import Login from "./app/screens/LoginScreen"

// const Tweets = () => (
//   <Screen>
//     <Text>Tweet screen</Text>
//   </Screen>
// )
// const TweetsDetails = () => (
//   <Screen>
//     <Text>Details screen</Text>
//   </Screen>
// )
// const Stack = createStackNavigator()
// const StackNavig = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Tweets" component={Login} />
//     <Stack.Screen name="Details" component={TweetsDetails} />
//   </Stack.Navigator>
// )
// export default function App() {
//   return (
//     <NavigationContainer>
//       <StackNavig />
//     </NavigationContainer>
//   )
// }
