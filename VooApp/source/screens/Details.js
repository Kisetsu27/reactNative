import { View, Text, ScrollView, SafeAreaView, StyleSheet, StatusBar, Image, Pressable, FlatList } from 'react-native'
import React, {useState, useRef} from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Video } from 'expo-av';


const DATA = [
  {
    ep: '1',
    title: 'No Rules 2: New World - 1р анги',
  },
  {
    ep: '2',
    title: 'No Rules 2: New World - 2р анги',
  },
  {
    ep: '3',
    title: 'No Rules 2: New World - 3р анги',
  },
  {
    ep: '4',
    title: 'No Rules 2: New World - 4р анги',
  },
  {
    ep: '5',
    title: 'No Rules 2: New World - 5р анги',
  },
  {
    ep: '6',
    title: 'No Rules 2: New World - 6р анги',
  },
  {
    ep: '7',
    title: 'No Rules 2: New World - 7р анги',
  },
  {
    ep: '8',
    title: 'No Rules 2: New World - 8р анги',
  },
  {
    ep: '9',
    title: 'No Rules 2: New World - 9р анги',
  },
  {
    ep: '10',
    title: 'No Rules 2: New World - 10р анги',
  },
];

const Item = ({title, ep}) => (
  <View style = {styles.epList} key = {ep}>
    <Image source={require('../../assets/img/nr2.jpg')}  style = {styles.epImage}/>
    <Text style={styles.epTitle}>{title}</Text>
  </View>
);


const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Pressable onPress={toggleReadMore}>
      <Text style = {styles.readmore}>
        {isReadMore ? text.slice(0, 100) : text}
        {isReadMore ? <Text>...<Ionicons name =  'chevron-down' /></Text> : <Ionicons name =  'chevron-up' />}
      </Text>
    </Pressable>
  )
}


export default function Details() {

const playbackInstance = useRef(null);
  
  const [isFav, setIsFav] = useState()

  const toggleFav = () => {
    setIsFav(!isFav)
  }

  return (
    <SafeAreaView style = {styles.container}>
      <View>
      <Video
        ref={playbackInstance}
        style={styles.video}
        useNativeControls
        source={{ uri:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" }}
        resizeMode="cover"
        isLooping
        />
      </View>
        {/* <Image source={require("../../assets/img/nr2.jpg")} style = {styles.himage}/> */}
        <View style = {styles.description}>
          <View>
            <Text style = {styles.title}>No Rules 2: New World (2023)</Text>
            <Image source={require('../../assets/img/rating.png')} style = {styles.rate} resizeMode='contain' />
            <Text style = {styles.age}>+16</Text>
          </View>
          <Pressable onPress={toggleFav}>
            <Ionicons name = {isFav ? 'heart-outline' : 'heart'} size = {30} style = {isFav ? styles.heart : styles.hearted}/>
          </Pressable>
        </View>
        <ReadMore>
{`Эрдэс хотод шинэ хотын дарга ирж шударга ёсыг тогтоохоор ирнэ. Гэвч тэр шударга ёсны төлөө биш өөрийн эрх ашгийн төлөө ирсэн байдаг. Мөрдөгч Хангай Эрдэс хотод шударга ёс тогтоохын төлөө тэдний эсрэг тууштай тэмцэнэ.

Найруулагчид : Р.Эрхэмбүрэн
Зохиолч : Р.Эрхэмбүрэн,А.Баттүшиг
Одууд : А.Өнөржаргал,Э.Мөнхтөр,Н.Ялалт,Р.Эрхэмбүрэн,Т.Нямдорж,Б.Болорчулуун,Г.Алтандуулга,Б.Од`} 
        </ReadMore>
        <View style = {styles.episodeWrapper}>
          <Text style = {styles.episode}>Ангиуд</Text>
          <FlatList
            data={DATA}
            renderItem={({item}) => <Item title={item.title} />}
            keyExtractor={item => item.id}
          />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: "#20262C"
  },
  himage: {
    width:'100%',
    height: 230,
  },
  description: {
    paddingTop: 25,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    color: '#fff',
    fontSize: 18
  },
  rate: {
    width: 125,
    height: 20,
    marginVertical: 7
  },
  age: {
    color: '#fff',
    fontSize:13
  },
  heart: {
    color: '#fff'
  },
  hearted: {
    color: '#44c2d2'
  },
  readmore: {
    marginHorizontal: 20,
    marginVertical: 20,
    color: '#fff',
    fontSize: 13,
    textAlign: 'justify'
  },
  episode: {
    color: "#fff",
    fontSize: 18,
    paddingVertical: 8,
    borderBottomColor: '#44c2d2',
    borderBottomWidth: 2,
    width: 110,
    paddingHorizontal: 15
  },
  episodeWrapper: {
    paddingHorizontal: 20,
    borderTopWidth: .5,
    borderTopColor: '#fff',
    height: 410
  },
  epList: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
    gap: 10,
  },
  epImage: {
    width: 140,
    height:80,
    borderRadius: 7
  },
  epTitle: {
    fontSize: 16,
    color: "#fff",
    flexWrap: 'wrap',
    width:240,
  },
  video: {
    width: "100%",
    height: 230,
    position: 'relative'
  }
})