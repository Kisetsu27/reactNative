import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.counter}>0</Text>
        <Text style={styles.label}>KM/H</Text>
        <View style={styles.btnWrap}>
          <Ionicons name="sunny" style={styles.btn}/>
          <Ionicons name="code" style={styles.btn}/>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  counter: {
    fontSize: 200,
    color: '#fff',
  },
  label: {
    fontSize: 38,
    color: '#fff',
    fontWeight: '500'
  },
  btnWrap: {
    position: 'absolute',
    left: 15,
    bottom: 15,
    flexDirection: 'row',
    // backgroundColor: 'red',
    width: 100,
    justifyContent: 'space-between'
  },
  btn: {
    color: '#949494',
    backgroundColor: '#1E1E1E',
    fontSize: 32,
    padding: 5,
    borderRadius: 10,
  }
});
