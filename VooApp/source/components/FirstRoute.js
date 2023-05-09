import { View, Text, StyleSheet,ScrollView, Image,  Pressable, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Carousel from 'react-native-reanimated-carousel'
import { useNavigation } from '@react-navigation/native';
// const initialLayout = { width: Dimensions.get("window").width };
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


export default function FirstRoute ()  {
    const navigation = useNavigation();
    return (
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
            <Pressable onPress = {() => {
                navigation.navigate('Details')
            }}>
                <View style = {styles.featItem}>
                    <Image source = {require("../../assets/img/nr2.jpg")} style = {styles.featImg} />
                    <Text style = {styles.featTxt}>No Rules 2: New World</Text>
                </View>
            </Pressable>
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
    )
        }



const styles = StyleSheet.create({
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
