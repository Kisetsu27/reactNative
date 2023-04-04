import { View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import Checkbox from 'expo-checkbox';
import { sendRequest, urlLookup } from '../settings/Settings';

import { FontAwesome5 } from '@expo/vector-icons'






export default function AimagScreen() {

  useEffect(() => {
    sendRequest('http://btax.mandakh.org:8000/lookup/', {action: 'aimagsum'})
      .then((data) => {
        setData(data)
        // console.log(data)
      })
  }, [])


  const [isChecked, setChecked] = useState(false);

  const [aimagData, setData] = useState()

  // console.log(isChecked)
  

  const DATA = aimagData && aimagData.data

  const Item = ({title}) => (
    <View style={styles.item}>
      <View style = {styles.v0}>
        <FontAwesome5 name = 'home' size = {20} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style = {styles.v1}>
        <Checkbox
          value = {isChecked}
          onValueChange = {setChecked}
          // onChange = {setIsChecked(!isChecked)}
        />
        <FontAwesome5 name = 'arrow-right' size = {20}/>
      </View>
    </View>
  )

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.aimagname} />}
        keyExtractor={item => item.aimagcode}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'white',
    paddingTop: 20,
    height: 60,
    paddingHorizontal: 20,
    borderBottomWidth: .5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
  },
  v0: {
    flexDirection: 'row'
  },
  v1: {
    flexDirection: 'row',
    marginLeft: 'auto',
    gap: 10
  }
});
