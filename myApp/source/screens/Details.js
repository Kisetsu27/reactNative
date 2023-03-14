import { View, Text, ScrollView, StyleSheet, SafeAreaView, Platform, StatusBar, Pressable } from 'react-native'
import React from 'react'


import Ionicons from '@expo/vector-icons/Ionicons'

export default function Details({navigation}) {
  return (
    <SafeAreaView style = {styles.container}>

    <ScrollView style = {styles.scrollView}>
        <View style = {styles.header}>
            <Pressable onPress={() => {
                navigation.goBack()
            }}>
            <View style = {styles.headerIcon}>
                <Ionicons name= 'chevron-back'  style = {styles.icon}/>
            </View>
            </Pressable>
            <View style = {styles.headerIcon}>
                <Ionicons name = 'share-social'  style = {styles.icon} />
            </View>
        </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    scrollView: {
        flex: 1,
        padding: 25
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerIcon: {
        backgroundColor: 'gray',
        padding: 15,
        borderRadius: 15
    },
    icon: {
        color: '#fff',
        fontSize: 16
    },
})