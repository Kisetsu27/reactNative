import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function Page1({navigation}) {
  return (
    <View>
        <Text>
            this is page 1
        </Text>
        <Pressable onPress = {()=> {
            navigation.navigate('Page2', {
                firstName: 'Temuulen',
                lastName: 'Gansukh'
            })
        }}>
             <Text style = {{fontWeight: 'bold'}}>Go to page 2</Text>
        </Pressable>
    </View>
  )
}