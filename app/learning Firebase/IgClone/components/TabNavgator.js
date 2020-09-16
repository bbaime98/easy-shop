import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeTab from "../Tabs/HomeTab"
import SearchTab from "../Tabs/SearchTab"
import AddMediaTab from "../Tabs/AddMediaTab"
import LikesTab from "../Tabs/LikesTab"
import ProfileTab from "../Tabs/ProfileTab"
import {MaterialCommunityIcons} from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeTab}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchTab}
      // options={({navigation}) => ({
      //   tabBarButton: () => (
      //     <NewListingButton
      //       onPress={() => navigation.navigate(routes.LISTING_EDIT)}
      //     />
      //   ),
      // })}
    />
    <Tab.Screen
      name="AddMedia"
      component={AddMediaTab}
      //   options={({navigation}) => ({
      //     tabBarButton: () => (
      //       <NewListingButton
      //         onPress={() => navigation.navigate(routes.LISTING_EDIT)}
      //       />
      //     ),
      //   })}
    />
    <Tab.Screen
      name="Likes"
      component={LikesTab}
      // options={{
      //   tabBarIcon: ({color, size}) => (
      //     <MaterialCommunityIcons name="account" color={color} size={size} />
      //   ),
      // }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileTab}
      // options={{
      //   tabBarIcon: ({color, size}) => (
      //     <MaterialCommunityIcons name="account" color={color} size={size} />
      //   ),
      // }}
    />
  </Tab.Navigator>
)

export default TabNavigator
