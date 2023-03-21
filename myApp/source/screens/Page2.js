import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function Page2({ navigation, route }) {

    const {firstName, lastName} = route.params;

  return (
    <View>
        <Text>
            this is page 2
        </Text>

        <Text>fist name: {JSON.stringify(firstName)}</Text>
        <Text>last name: {JSON.stringify(lastName)}</Text>

        <Pressable onPress = {()=> {
            navigation.navigate('Page3')
        }}>
             <Text style = {{fontWeight: 'bold'}}>Go to page 3</Text>
        </Pressable>
    </View>
  )
}