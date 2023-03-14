import { View, Text, StyleSheet, StatusBar, SafeAreaView, Platform, Image, ScrollView, Pressable} from 'react-native'
import React from 'react'


import Ionicons  from '@expo/vector-icons/Ionicons'



export default function Home({navigation}) {
  return (
    <SafeAreaView style = {{ flex: 1}}>
      <ScrollView  style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style = {styles.greeting}>Өдрийн мэнд</Text>
          </View>
          <View style = {styles.headerRight}>
            <Image source = {require('../../assets/ticket.png')} style = {{width: 30}} />
            <Image source = {require('../../assets/profile.png')} style = {styles.profile} />
          </View>
        </View>
        <View style = {styles.cardContainer}>
          <View style = {styles.card1}>
            <Text style = {styles.cardText}>Товч ном</Text>
            <Ionicons name ='triangle' style = {styles.cardShape}/>
          </View>
          <View style = {styles.card2}>
            <Text style = {styles.cardText}>Цахим ном</Text>
            <Ionicons name ='square' style = {styles.cardShape}/>
          </View>
          <View style = {styles.card3}>
            <Text style = {styles.cardText}>Аудио ном</Text>
            <Ionicons name ='play' style = {styles.cardShape}/>
          </View>
          <View style = {styles.card4}>
            <Text style = {styles.cardText}>Подкаст</Text>
            <Ionicons name = 'ellipse' style = {styles.cardShape} />
          </View>
        </View>
        <Pressable onPress={() => {
          navigation.navigate('Details')
        }}>
        <View style = {styles.featureContainer}>
          <View style = {styles.featureTop}>
            <Text style = {styles.subTitle} >Бодит амьдралаас сэдэвлэв</Text>
            <Text style = {styles.title} >Энэ 7 хоногийн онцлох</Text>
          </View>
          <Image source={require('../../assets/feat.jpg')} style = {{width: '100%' , height:500}} />
        </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    padding: 20,
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 500
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 15,
  },
  cardContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 13,
  },
  card1: {
    backgroundColor: '#10C9CB',
    width: '48%',
    height: 100,
    borderRadius: 20,
    padding: 15
  },
  card2: {
    backgroundColor: '#EE5557',
    width: '48%',
    height: 100,
    borderRadius: 20,
    padding: 15,
  },
  card3: {
    backgroundColor: '#FFAE27',
    width: '48%',
    height: 100,
    borderRadius: 20,
    padding: 15,
    alignItems: 'flex-start',
  },
  card4: {
    backgroundColor: '#9662CE',
    width: '48%',
    height: 100,
    borderRadius: 20,
    padding: 15,
    alignItems: 'flex-start',
  },
  cardText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 500
  },
  cardShape: {
    color: '#fff',
    fontSize: 32,
  },
  featureContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 30,
    overflow: 'hidden',
    marginBottom: 100,
  },
  featureTop: {
    margin: 15
  },
  subTitle: {
    fontWeight: 300,
    textTransform: 'uppercase',
    fontSize: 15,
    color: 'gray'
  },
  title: {
    fontWeight: 'bold',
    fontSize:32
  }

})