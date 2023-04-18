import { View, Text, StyleSheet,ScrollView, Image, StatusBar, Platform, Dimensions, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler'
import Carousel from 'react-native-reanimated-carousel'

const width = Dimensions.get('window').width;


const FirstRoute = () => (
    <View style={styles.tab1} >
        <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={1000}
                pagingEnabled = {true}
                enable = {true}
                panGestureHandlerProps={{
                    activeOffsetX: [-10, 10],
                }}
                // onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            width: '90%',
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Image source = {require(`../../assets/img/carousel/1.jpg`)} resizeMode='contain' style = {{width:'100%'}}/>

                        {/* <Text style={{ textAlign: 'center', fontSize: 30 }}>
                            {index}
                        </Text> */}
                    </View>
                )}
            />
                <ScrollView 
                    style = {styles.genre} 
                    horizontal = {true} 
                    showsHorizontalScrollIndicator = {false} 
                    contentContainerStyle = {{gap: 20}}
                >
                    <View style = {styles.genreItem}>
                        <Text style = {styles.genreItemText}>VOO Originals</Text>
                    </View>
                    <View style = {styles.genreItem}>
                        <Text style = {styles.genreItemText}>Монгол</Text>
                    </View>
                    <View style = {styles.genreItem}>
                        <Text style = {styles.genreItemText}>Солонгос драма</Text>
                    </View>
                    <View style = {styles.genreItem}>
                        <Text style = {styles.genreItemText}>Hollywood</Text>
                    </View>
                </ScrollView>
                <Text style = {styles.showcaseTitle}>Их үзсэн</Text>
    </View>
  );
  
const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} >
        <Text>dsaf</Text>
    </View>
);
  
const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }}>
        <Text>dsaf</Text>

    </View>
);

const initialLayout = { width: Dimensions.get("window").width };

const renderTabBar = (props) => (
        <TabBar
        {...props}
        renderLabel={({ route, focused, color }) => (
        <View style={styles.tabLabelView}>
            <Text style = {[styles.tabLabel, focused && styles.tabLabelFocused]}>
                {route.title}
            </Text>
        </View>
        )}
        indicatorStyle = {{ display: 'none'}}
        pressColor='transparent'
        tabStyle = {styles.tabBarStyle}
        style={styles.tabBar}
        labelStyle={styles.tabLabel}
    />
)

export default function Home() {

    
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Кино сан' },
        { key: 'second', title: 'Видео сан' },
        { key: 'third', title: 'Хүүхдийн' },
    ]);
    
    const renderScene = SceneMap({
        first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    })

  return (
    <GestureHandlerRootView style = {styles.container}>
        <LinearGradient 
            colors = {['#20262C', '#14151A']}
            style = {styles.gradient}
            start={[0,0]}
            end={[1,1]}
        >
            <ImageBackground source = {require('../../assets/img/bglogo.png')} resizeMode='contain' style = {styles.bgimage} 
                imageStyle = {{
                    top: 200,
                    left: 50,
                    width: 600,
                    opacity: .7
                }}
            >
                <ScrollView style = {styles.scrollView}>
                    <View style = {styles.header}>
                        <Image source = {require('../../assets/img/logo.png')} style = {styles.logo}/>
                        <Ionicons name = 'notifications-outline' style = {styles.headerIcon} />
                        <Ionicons name = 'search-outline' style = {styles.headerIcon} />
                        <Ionicons name = 'time-outline' style = {styles.headerIcon} />
                    </View>
                        <TabView
                            navigationState={{ index, routes }}
                            renderScene={renderScene}
                            onIndexChange={setIndex}
                            initialLayout={initialLayout}
                            renderTabBar={renderTabBar}
                            nestedScrollEnabled = {true}
                            style = {{height: 500}}
                            swipeEnabled = {false}
                        />
                  

                </ScrollView>
            </ImageBackground>
        </LinearGradient>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#1a1a22',
    },
    bgimage: {
        flex: 1,
    },
    gradient: {
        flex: 1
    },
    scrollView: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 0,
        padding: 20
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    logo: {
        width:90,
        height: 50,
        resizeMode: 'contain',
        marginRight: 'auto'
    },
    headerIcon: {
        fontSize: 30,
        color: '#fff'
    },
    tabBar: {
        backgroundColor: "transparent",
        shadowColor: 'transparent',
    },
    tabBarFocused: {
        backgroundColor: 'orange'
    },
    tabLabelView: {
        margin: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150
    },
    tabLabel: {
        color: '#fff',
        fontSize: 16
    },
    tabLabelFocused: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    genre: {
        // flexDirection: 'row',
        marginTop: 30,
    },
    genreItem: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 50,
    },
    genreItemText: {
        color: '#5CD1C9',
        fontSize: 14
    },
    showcaseTitle: {
        color: '#fff',
        fontSize: 16,
        marginVertical: 10,
        fontWeight: 'bold'
    }
})