import { View, Text, ScrollView, StyleSheet, SafeAreaView, Platform, StatusBar, Pressable, Image, useWindowDimensions, TouchableOpacity, Animated } from 'react-native'
import React, { useState } from 'react'

import { LinearGradient } from 'expo-linear-gradient'

import Ionicons  from '@expo/vector-icons/Ionicons'

import { TabView, SceneMap } from 'react-native-tab-view'


const Description = () => {
    <View style = {{flex: 1, backgroundColor: '#ff4081'}} >
        <Text>1</Text>
    </View>
}

const Chapter = () => {
    <View style = {{flex: 1, backgroundColor: '#673ab7'}} >
        <Text>1</Text>

    </View>
}

const Comment = () => {
    <View style = {{flex: 1, backgroundColor: '#673ab7'}} >
        <Text>1</Text>

    </View>
}

const More = () => {
    <View style = {{flex: 1, backgroundColor: '#673ab7'}} >
        <Text>1</Text>

    </View>
}




export default function Details({navigation}) {

    const layout = useWindowDimensions();

    const [index, setindex] = React.useState(0)
    const [routes] = React.useState([
        {key: 'first', title: 'Тайлбар'},
        {key: 'second', title: 'Бүлэг'},
        {key: 'third', title: 'Сэтгэгдэл'},
        {key: 'fourth', title: 'Дэлгэрэнгүй'},
    ])


    const renderTopBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
        return (
        <View style={styles.tabBar}>
            {props.navigationState.routes.map((route, i) => {
            const opacity = props.position.interpolate({
                inputRange,
                outputRange: inputRange.map((inputIndex) =>
                inputIndex === i ? 1 : 0.5
                ),
            });

            return (
                <TouchableOpacity
                style={styles.tabItem}
                onPress={() => setindex( i )}>
                <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
                </TouchableOpacity>
            );
            })}
        </View>
        );
    }

    const renderScene = SceneMap({
        first: Description,
        second: Chapter,
        third: Comment,
        fourth: More,
    })
  return (
    <SafeAreaView style = {styles.container}>

    <ScrollView style = {styles.scrollView}>
        <LinearGradient colors={['#d1a29f', 'transparent']} start = {{x: 0, y: 0}} end = {{y: 0.3, x:0}} style = {styles.gradientBackground}>
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
            <View style = {styles.titleView}>
                <Image source = {require('../../assets/feat.png')} style = {styles.titleImg}/>
                <Text style = {styles.titleText}>Гүйж яваа эмэгтэй</Text>
                <View style = {styles.author}>
                    <Image source={require('../../assets/profile.png')} style = {{width: 40, height: 40, borderRadius: 50}} />
                    <Text style = {styles.authorTxt}>Х.Болор-Эрдэнэ</Text>
                </View>
            </View>

            <View style = {styles.costView}>
                <View style = {styles.costSub}>
                    <Ionicons name = 'book' style = {styles.costIcon} />
                    <Text style = {styles.costText}>Цахим хувилбар</Text>
                    <Text style = {styles.price}>11000₮</Text>

                </View>
                <View style = {styles.costSub}>
                    <Ionicons name = 'headset' style = {styles.costIcon} />
                    <Text style = {styles.costText}>Аудио хувилбар</Text>
                    <Text style = {styles.price}>16500₮</Text>
                </View>
            </View>
            
            <View style = {styles.listen}>
                <Ionicons name = 'headset' style = {styles.listenIcon} />
                <Text style = {styles.listenText}>Сонсож үзэх</Text>
            </View>

            <View>
                    <TabView
                        navigationState={{ index, routes}}
                        renderScene = { renderScene }
                        onIndexChange = { setindex }
                        initialLayout = {{width: layout.width}}
                        renderTabBar = {renderTopBar}
                    ></TabView>
            </View>
        </LinearGradient>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    gradientBackground: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 20 : 0,
        padding: 25,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerIcon: {
        backgroundColor: 'rgba(200,200,200, 0.7)',
        padding: 12,
        borderRadius: 15
    },
    icon: {
        color: '#fff',
        fontSize: 24
    },
    titleView: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50,
    },
    titleImg :{
        borderRadius: 20,
        width: 170,
        height: 250,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 500,
        marginVertical: 20
    },
    author: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    authorTxt: {
        color: '#6E7071',
        fontWeight: 500
    },
    costView: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10,
        borderRadius: 10,
        marginVertical: 20
    },
    costSub: {
        alignItems: 'center',
        gap: 2
    },
    costIcon: {
        color: '#0080FF',
        fontSize: 16
    },
    costText: {
        color: '#6E7071',
        fontSize: 15,
        fontWeight: 300
    },
    price: {
        fontWeight: 600,
        fontSize: 16,
        marginTop: 5
    },
    listen: {
        borderColor: '#0080FF',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        gap: 10
    },
    listenIcon: {
        color: '#999',
        fontSize: 16
    },
    listenText: {
        fontWeight: 400,
        fontSize: 14
    },
    tabBar: {
        flexDirection: 'row',
        paddingTop: StatusBar.currentHeight,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
})