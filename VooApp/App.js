import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, statu } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

import HomeScreen from './source/screens/Home'
import ProfileScreen from './source/screens/Profile'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

export default function App() {
  return(
    // <NavigationContainer>
    //   <Stack.Navigator
    //   screenOptions={{
    //     headerShown: false
    //   }}>
    //     <Stack.Screen name='Home' component={homeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Profile"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#43C4E1',
          tabBarStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            shadowColor: 'transparent',
            borderTopWidth: 0
          },
          tabBarShowLabel: false,        

        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name = 'home' color = {color} size = {size}/>
            ),
          
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name = 'person-outline' color = {color} size = {size}/>
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style = 'light' />
    </NavigationContainer>
  )
} 

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
    backgroundColor: "#182028",
    borderRadius: 25,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    marginVertical: 10,
    borderRadius: 1, 
    borderColor: "#333B42"
  }, 
})
