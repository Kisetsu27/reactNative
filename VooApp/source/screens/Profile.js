import { View, Text, SafeAreaView, ImageBackground, StyleSheet, StatusBar, ScrollView, Image, FlatList } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { Ionicons } from '@expo/vector-icons'

import React from 'react'





const DATA = [
  {
    id: '1',
    icon: 'heart-outline',
    title: 'Хадгалсан'
  },
  {
    id: '2',
    icon: 'download-outline',
    title: 'Татсан контентууд',
  },
  {
    id: '3',
    icon: 'fast-food-outline',
    title: 'VOO cinema',
  },
  {
    id: '4',
    icon: 'bookmark-outline',
    title: 'Багцын мэдээлэл',
  },
  {
    id: '5',
    icon: 'cart-outline',
    title: 'Худалдан авалтын түүх',
  },
  {
    id: '6',
    icon: 'gift-outline',
    title: 'Урамшууллын код',
  }
]
const DATA2 = [
  {
    id: '1',
    icon: 'help-circle-outline',
    title: 'Тусламж'
  },
  {
    id: '2',
    icon: 'shield-checkmark-outline',
    title: 'Үйлчилгээний нөхцөл',
  },
  {
    id: '3',
    icon: 'settings-outline',
    title: 'Тохиргоо',
  },
]



const Item = ({title, icon}) => (
  <View style = {styles.optionList}>
    <Ionicons name = {icon} style = {styles.optionIconLeft} />
    <View style = {styles.optionRight} >
      <Text style = {styles.optionTxt}>{title}</Text>
      <Ionicons name = 'chevron-forward' style = {styles.optionIcon} />
    </View>
  </View>
)

const ItemDivider = () => {
  return (
    <View 
      style = {{
        height: 1,
        width: '85%',
        backgroundColor: '#fff',
        marginLeft: 'auto'
      }}
    />
  )
}

export default function Profile() {
  return (
    <SafeAreaView style = {styles.container}>
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
                <View style = {styles.topWhiteSection}>
                  <View style = {styles.header}>
                    <Image source = {require('../../assets/img/logo.png')} style = {styles.logo}/>
                    <Ionicons name = 'notifications-outline' style = {styles.headerIcon} />
                    <Ionicons name = 'search-outline' style = {styles.headerIcon} />
                    <Ionicons name = 'time-outline' style = {styles.headerIcon} />
                  </View>
                  <View style = {styles.optionList}>
                    <Ionicons name = 'person-outline' style = {styles.optionIconLeft} />
                    <View style = {styles.optionRight} >
                      <Text style = {styles.optionTxt}>Миний булан</Text>
                      <Text style = {styles.optionName}>Г.Тэмүүлэн</Text>
                      <Ionicons name = 'chevron-forward' style = {styles.optionIcon} />
                    </View>
                  </View>
                </View>
                <View style = {styles.whiteSection}>
                  <FlatList
                    data={DATA}
                    renderItem={({item}) => <Item title={item.title} icon = {item.icon}/>}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={ItemDivider}
                  />  
                </View>
                <View style = {styles.whiteSection}>
                  <FlatList
                    data={DATA2}
                    renderItem={({item}) => <Item title={item.title} icon = {item.icon}/>}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={ItemDivider}
                  />  
                </View>
                <View style = {styles.bottomWhiteSection}>
                  <View style = {styles.optionListLast}>
                      <Ionicons name = 'log-out-outline' style = {styles.optionIconLeft} />
                      <View style = {styles.optionRight} >
                        <Text style = {styles.optionTxt}>Гарах</Text>
                        <Ionicons name = 'chevron-forward' style = {styles.optionIcon} />
                      </View>
                    </View>
                </View>
            </ImageBackground>

        </LinearGradient>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gradient: {
    flex: 1
  },
  bgimage: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
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
  topWhiteSection: {
    backgroundColor: 'rgba(255, 255, 255 / 0.01)',
    // padding: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 0,
    marginBottom: 10,
    height: 180
  },
  optionList: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginVertical: 12,
    paddingHorizontal: 15,
  },
  optionIconLeft: {
    marginRight: 15,
    fontSize: 25,
    color: "#fff",
  },
  optionRight: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    borderBottomColor: '#fff',
    // borderBottomWidth: 1
  },
  optionTxt: {
    color: 'white',
    fontSize: 14,
    marginRight: 'auto'
  },
  optionName: {
    color: 'white',
    fontSize: 13,
  },
  optionIcon: {
    fontSize: 20,
    color: '#fff',
    margin: 5
  },
  whiteSection: {
    backgroundColor: 'rgba(255, 255, 255 / 0.01)',
    marginBottom: 10
  },
  bottomWhiteSection: {
    backgroundColor: 'rgba(255, 255, 255 / 0.01)',
    height: 200,
    marginBottom: 'auto',
    position: 'relative'
  },
  optionListLast: {
    position: 'absolute',
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginVertical: 10
  }
})







{/* <View style = {styles.optionList}>
                      <Ionicons name = 'person-outline' style = {styles.optionIconLeft} />
                      <View style = {styles.optionRightLine} >
                        <Text style = {styles.optionTxt}>Хадгалсан</Text>
                        <Ionicons name = 'chevron-forward' style = {styles.optionIcon} />
                      </View>
                  </View>
                  <View style = {styles.optionList}>
                      <Ionicons name = 'person-outline' style = {styles.optionIconLeft} />
                      <View style = {styles.optionRightLine} >
                        <Text style = {styles.optionTxt}>Татсан контентууд</Text>
                        <Ionicons name = 'chevron-forward' style = {styles.optionIcon} />
                      </View>
                  </View>
                  <View style = {styles.optionList}>
                      <Ionicons name = 'person-outline' style = {styles.optionIconLeft} />
                      <View style = {styles.optionRightLine} >
                        <Text style = {styles.optionTxt}>VOO Cinema</Text>
                        <Ionicons name = 'chevron-forward' style = {styles.optionIcon} />
                      </View>
                  </View>
                  <View style = {styles.optionList}>
                      <Ionicons name = 'person-outline' style = {styles.optionIconLeft} />
                      <View style = {styles.optionRightLine} >
                        <Text style = {styles.optionTxt}>Багцын мэдээлэл</Text>
                        <Ionicons name = 'chevron-forward' style = {styles.optionIcon} />
                      </View>
                  </View>
                  <View style = {styles.optionList}>
                      <Ionicons name = 'person-outline' style = {styles.optionIconLeft} />
                      <View style = {styles.optionRightLine} >
                        <Text style = {styles.optionTxt}>Худалдан авалтын түүх</Text>
                        <Ionicons name = 'chevron-forward' style = {styles.optionIcon} />
                      </View>
                  </View>
                  <View style = {styles.optionList}>
                      <Ionicons name = 'person-outline' style = {styles.optionIconLeft} />
                      <View style = {styles.optionRight} >
                        <Text style = {styles.optionTxt}>Урамшууллын код</Text>
                        <Ionicons name = 'chevron-forward' style = {styles.optionIcon} />
                      </View>
                  </View> */}