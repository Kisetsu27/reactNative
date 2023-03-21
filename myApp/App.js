import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createDrawerNavigator } from '@react-navigation/drawer'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import HomeScreen from './source/screens/Home'
import DetailScreeen from './source/screens/Details'

import p1 from './source/screens/Page1'
import p2 from './source/screens/Page2'
import p3 from './source/screens/Page3'
import p4 from './source/screens/Page4'

const Homestack = createNativeStackNavigator()

const nextStack = createNativeStackNavigator()

const Tab = createBottomTabNavigator()

const Drawer = createDrawerNavigator()


export default function App() {
  const HomeTab =() =>{
    return (
      <Homestack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Homestack.Screen name = 'Home' component={HomeScreen} />
        <Homestack.Screen name = 'Details' component={DetailScreeen} />
      </Homestack.Navigator>
    )
}

const NextTab = () => {
  return (
    <nextStack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <nextStack.Screen name = 'Page1' component={p1} />
        <nextStack.Screen name = 'Page2' component={p2} />
        <nextStack.Screen name = 'Page3' component={p3} />
      </nextStack.Navigator>
  )
}


// const DrawerScreen1 = () => {
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//   <Button
//     onPress={() => navigation.navigate('Notifications')}
//     title="Go to notifications"
//   />
//   </View>
// }
const NotificationScreen = () => {
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Button
    onPress={() => navigation.navigate('Notifications')}
    title="Go to notifications"
  />
  </View>
}


const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="NextTab"
        component={NextTab}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      
    </Tab.Navigator>
  )
}


const NextTabBottom = () => {
  return (

    <Tab.Navigator
    initialRouteName="Next"
    screenOptions={{
      tabBarActiveTintColor: '#e91e63',
    }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
          />
      <Tab.Screen
        name="Next"
        component={NextTab}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
          tabBarBadge: 3,
        }}
        />
      
    </Tab.Navigator>
)
}


  return (
    <NavigationContainer>

    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name = 'Home' component = {BottomTab} />
      <Drawer.Screen name = 'NextTab' component = {NextTabBottom} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
});
