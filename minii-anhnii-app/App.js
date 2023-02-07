import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <ScrollView style={{height: 400}}>
          <TouchableOpacity onPress={() => alert('zurag neg udaa daragdlaa')} onLongPress={()=> alert('zuragudaan daragdlaa')}>
            <Image  style={{width: 500, height: 500}} source={require('./assets/tree-736885__480.jpg')}></Image>
          </TouchableOpacity>
        </ScrollView>
        <ScrollView>
          <Text>This is my first app</Text>
        </ScrollView>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:100
  }
});
