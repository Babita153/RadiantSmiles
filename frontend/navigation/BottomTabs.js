import { StyleSheet, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from "../screens/HomeScreen";
import Contact from "../screens/Contact";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar
      }}>

      <Tab.Screen style={{ tintColor: "#B347D9" }}
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image style = {styles.icon}
            source = {require("../assets/home.png")} />
          )
        }} 
        />

        <Tab.Screen style={{ tintColor: "#B347D9" }}
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: () => (
            <Image style = {styles.icon}
            source = {require("../assets/telephone.png")} />
          )
        }} 
        />

        <Tab.Screen style={{ tintColor: "#B347D9" }}
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Image style = {styles.icon}
            source = {require("../assets/user.png")} />
          )
        }} 
        />

    </Tab.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    width: "80%",
    borderRadius: 50,
    backgroundColor: "white",
    position: 'absolute',
    bottom: 26,
    alignSelf: "center",
    marginLeft: "10%",
  },

  icon: {
    height: 30,
    width: 30,
    tintColor: "black",
    padding:15,
    marginTop:10,
  }
})