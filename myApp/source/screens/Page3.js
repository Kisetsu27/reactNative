import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function Page3({ navigation }) {
  return (
    <View>
        <Text>
            this is page 3
        </Text>
        <Pressable onPress = {()=> {
            navigation.navigate('Page1')
        }}>
             <Text style = {{fontWeight: 'bold'}}>Go to page 1</Text>
        </Pressable>
    </View>
  )
}