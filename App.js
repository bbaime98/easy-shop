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
  // const [user, setUser] = useState()
  // const [isReady, setisReady] = useState(false)

  // const restoreUser = async () => {
  //   const user = await authStoarge.getUser()
  //   if (user) setUser(user)
  // }
  // if (!isReady)
  //   return (
  //     <AppLoading startAsync={restoreUser} onFinish={() => setisReady(true)} />
  //   )

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
