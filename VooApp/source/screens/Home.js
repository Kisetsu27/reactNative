import { View, Text, StyleSheet,ScrollView, Image, StatusBar, Platform, Dimensions, Pressable, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler'
import Carousel from 'react-native-reanimated-carousel'

const width = Dimensions.get('window').width;


const images1 = [
    {
        id: '0',
        image: require('../../assets/img/carousel/0.png')
    },
    {
        id: '1',
        image: require('../../assets/img/carousel/1.png')
    },
    {
        id: '2',
        image: require('../../assets/img/carousel/2.png')
    },
    {
        id: '3',
        image: require('../../assets/img/carousel/3.png')
    },
]
const images2 = [
    {
        id: '0',
        image: require('../../assets/img/carousel2/0.png')
    },
    {
        id: '1',
        image: require('../../assets/img/carousel2/1.png')
    },
    {
        id: '2',
        image: require('../../assets/img/carousel2/2.png')
    },
    {
        id: '3',
        image: require('../../assets/img/carousel2/3.png')
    },
]
const images3 = [
    {
        id: '0',
        image: require('../../assets/img/carousel/0.png')
    },
    {
        id: '1',
        image: require('../../assets/img/carousel/1.png')
    },
    {
        id: '2',
        image: require('../../assets/img/carousel/2.png')
    },
    {
        id: '3',
        image: require('../../assets/img/carousel/3.png')
    },
]



const FirstRoute = () => (
    <View style={styles.tab1} >
        <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data= {images1}
                scrollAnimationDuration={1000}
                // onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Image source = {images1[index].image} resizeMode='contain'  style = {{ width: '100%'}}/>

                    </View>
                    
                )}
            />
        <ScrollView 
            style = {styles.genre} 
            horizontal = {true} 
            showsHorizontalScrollIndicator = {false} 
            contentContainerStyle = {{gap: 20, justifyContent: 'center', alignItems: 'center'}}
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
        <ScrollView
            style = {styles.feature} 
            horizontal = {true} 
            showsHorizontalScrollIndicator = {false} 
            contentContainerStyle = {{gap: 10}}
        >
            <View style = {styles.featItem}>
                <Image source = {require("../../assets/img/feature/bujo.jpg")} style = {styles.featImg} />
                <Text style = {styles.featTxt}>Bujo</Text>
            </View>
            <View style = {styles.featItem}>
                <Image source = {require("../../assets/img/feature/2.jpg")} style = {styles.featImg} />
                <Text style = {styles.featTxt}>Бэрүүд</Text>
            </View>
            <View style = {styles.featItem}>
                <Image source = {require("../../assets/img/feature/3.jpg")} style = {styles.featImg} />
                <Text style = {styles.featTxt}>No rules</Text>
            </View>
            <View style = {styles.featItem}>
                <Image source = {require("../../assets/img/feature/4.jpg")} style = {styles.featImg} />
                <Text style = {styles.featTxt}>Search</Text>
            </View>
            <View style = {styles.featItem}>
                <Image source = {require("../../assets/img/feature/5.jpg")} style = {styles.featImg} />
                <Text style = {styles.featTxt}>The Mouse</Text>
            </View>
            <View style = {styles.featItem}>
                <Image source = {require("../../assets/img/feature/6.jpg")} style = {styles.featImg} />
                <Text style = {styles.featTxt}>95%</Text>
            </View>
        </ScrollView>
        <Text style = {styles.showcaseTitle}>Шинээр нэмэгдсэн</Text>
        <ScrollView
            style = {styles.feature} 
            horizontal = {true} 
            showsHorizontalScrollIndicator = {false} 
            contentContainerStyle = {{gap: 10}}
        >
            <View style = {styles.featItem}>
                <Image source = {require("../../assets/img/feature/7.jpg")} style = {styles.featImg} />
                <Text style = {styles.featTxt}>Хохирогч</Text>
            </View>
            <View style = {styles.featItem}>
                <Image source = {require("../../assets/img/feature/8.jpg")} style = {styles.featImg} />
                <Text style = {styles.featTxt}>2000</Text>
            </View>
            <View style = {styles.featItem}>
                <Image source = {require("../../assets/img/feature/9.jpg")} style = {styles.featImg} />
                <Text style = {styles.featTxt}>Сайн мөрдөгч 2</Text>
            </View>
            <View style = {styles.featItem}>
                <Image source = {require("../../assets/img/feature/10.jpg")} style = {styles.featImg} />
                <Text style = {styles.featTxt}>The Kairos</Text>
            </View>
            <View style = {styles.featItem}>
                <Image source = {require("../../assets/img/feature/6.jpg")} style = {styles.featImg} />
                <Text style = {styles.featTxt}>95%</Text>
            </View>
            <View style = {styles.featItem}>
                <Image source = {require("../../assets/img/feature/2.jpg")} style = {styles.featImg} />
                <Text style = {styles.featTxt}>Бэрүүд</Text>
            </View>
            <View style = {styles.featItem}>
                <Image source = {require("../../assets/img/feature/bujo.jpg")} style = {styles.featImg} />
                <Text style = {styles.featTxt}>Bujo</Text>
            </View>
            <View style = {styles.featItem}>
                <Image source = {require("../../assets/img/feature/4.jpg")} style = {styles.featImg} />
                <Text style = {styles.featTxt}>Search</Text>
            </View>
        </ScrollView>
    </View>
  );
  
const SecondRoute = () => (
    <View style={styles.tab1} >
    <Carousel
            loop
            width={width}
            height={width / 2}
            autoPlay={true}
            data= {images2}
            scrollAnimationDuration={1000}
            renderItem={({ index }) => (
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                    }}
                >
                    <Image source = {images2[index].image} resizeMode='contain' style = {{ width: '100%'}}/>

                </View>
                
            )}
        />
    <ScrollView 
        style = {styles.genre} 
        horizontal = {true} 
        showsHorizontalScrollIndicator = {false} 
        contentContainerStyle = {{gap: 20, justifyContent: 'center', alignItems: 'center'}}
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
    <ScrollView
        style = {styles.feature} 
        horizontal = {true} 
        showsHorizontalScrollIndicator = {false} 
        contentContainerStyle = {{gap: 10}}
    >
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/bujo.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>Bujo</Text>
        </View>
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/2.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>Бэрүүд</Text>
        </View>
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/3.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>No rules</Text>
        </View>
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/4.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>Search</Text>
        </View>
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/5.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>The Mouse</Text>
        </View>
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/6.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>95%</Text>
        </View>
    </ScrollView>
    <Text style = {styles.showcaseTitle}>Шинээр нэмэгдсэн</Text>
    <ScrollView
        style = {styles.feature} 
        horizontal = {true} 
        showsHorizontalScrollIndicator = {false} 
        contentContainerStyle = {{gap: 10}}
    >
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/7.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>Хохирогч</Text>
        </View>
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/8.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>2000</Text>
        </View>
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/9.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>Сайн мөрдөгч 2</Text>
        </View>
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/10.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>The Kairos</Text>
        </View>
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/6.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>95%</Text>
        </View>
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/2.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>Бэрүүд</Text>
        </View>
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/bujo.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>Bujo</Text>
        </View>
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/4.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>Search</Text>
        </View>
    </ScrollView>
</View>
);
  
const ThirdRoute = () => (
    <View style={styles.tab1} >
    <Carousel
            loop
            width={width}
            height={width / 2}
            autoPlay={true}
            data= {images3}
            scrollAnimationDuration={1000}
            // onSnapToItem={(index) => console.log('current index:', index)}
            renderItem={({ index }) => (
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                    }}
                >
                    <Image source = {images3[index].image} resizeMode='contain'  style = {{ width: '100%'}}/>

                </View>
                
            )}
        />
    <ScrollView 
        style = {styles.genre} 
        horizontal = {true} 
        showsHorizontalScrollIndicator = {false} 
        contentContainerStyle = {{gap: 20, justifyContent: 'center', alignItems: 'center'}}
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
    <ScrollView
        style = {styles.feature} 
        horizontal = {true} 
        showsHorizontalScrollIndicator = {false} 
        contentContainerStyle = {{gap: 10}}
    >
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/bujo.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>Bujo</Text>
        </View>
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/2.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>Бэрүүд</Text>
        </View>
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/3.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>No rules</Text>
        </View>
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/4.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>Search</Text>
        </View>
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/5.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>The Mouse</Text>
        </View>
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/6.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>95%</Text>
        </View>
    </ScrollView>
    <Text style = {styles.showcaseTitle}>Шинээр нэмэгдсэн</Text>
    <ScrollView
        style = {styles.feature} 
        horizontal = {true} 
        showsHorizontalScrollIndicator = {false} 
        contentContainerStyle = {{gap: 10}}
    >
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/7.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>Хохирогч</Text>
        </View>
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/8.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>2000</Text>
        </View>
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/9.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>Сайн мөрдөгч 2</Text>
        </View>
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/10.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>The Kairos</Text>
        </View>
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/6.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>95%</Text>
        </View>
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/2.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>Бэрүүд</Text>
        </View>
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/bujo.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>Bujo</Text>
        </View>
        <View style = {styles.featItem}>
            <Image source = {require("../../assets/img/feature/4.jpg")} style = {styles.featImg} />
            <Text style = {styles.featTxt}>Search</Text>
        </View>
    </ScrollView>
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
                            style = {{flex: 1, height: 1000}}
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
    tab1: {
        // flex: 1,
        alignContent: 'center'
    },
    genre: {
        // flexDirection: 'row',
        marginTop: 30,
    },
    genreItem: {
        backgroundColor: '#fff',
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    genreItemText: {
        color: '#5CD1C9',
        fontSize: 14,
       
    },
    showcaseTitle: {
        color: '#fff',
        fontSize: 18,
        marginVertical: 10,
        fontWeight: 'bold'
    },
    featItem: {
        width: 170,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative'
    },
    featImg: {
        width: "100%",
        height: '100%',
        zIndex: -10,
        position: 'absolute',
    },
    featTxt: {
        color : 'white',
        position: 'absolute',
        bottom: 0,
        left: 0,
        paddingHorizontal: 8,
        fontSize: 16,
        zIndex: -10,
    }
})