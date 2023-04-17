import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  FlatList,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { sendRequest } from "../settings/Settings";

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#ff4081" }]}>
    <Text style={styles.txt}>abc1</Text>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#673ab7" }]}>
    <Text style={styles.txt}>abc2</Text>
  </View>
);

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#4caf50" }]}>
    <Text style={styles.txt}>abc3</Text>
  </View>
);

const initialLayout = { width: Dimensions.get("window").width };

const renderTabBar = (props) => (
  <TabBar
    {...props}
    renderIcon={({ route, focused, color }) => (
      <Ionicons
        name={route.iconName}
        size={24}
        color={focused ? "#008aff" : "gray"}
      />
    )}
    renderLabel={({ route, focused, color }) => (
      <Text style={[styles.tabLabel, focused && styles.tabLabelFocused]}>
        {route.title}
      </Text>
    )}
    style={styles.tabBar}
    labelStyle={styles.tabLabel}
    scrollEnabled={true}
  />
);

const App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "First", iconName: "ios-home" },
    { key: "second", title: "Second", iconName: "ios-heart" },
    { key: "third", title: "Third", iconName: "ios-settings" },
  ]);
  const [dataAimag, setData] = useState();

  useEffect(() => {
    urlLookUp = "http://btax.mandakh.org:8000/lookup/";
    body = {
      action: "aimagsum",
    };
    sendRequest(urlLookUp, body)
      .then((data) => {
        setData(data);
        console.log(data, "1");
      })

      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.v0}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
        />
      </View>
      <ScrollView style={styles.v1}>
        <FlatList
          data={dataAimag && dataAimag.data}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                console.log(item.aimagname);
              }}
            >
              <View style={styles.v11}>
                <Ionicons name="home" size={30} style={styles.icon} />
                <Text style={styles.item}>{item.aimagname}</Text>
                <View style={styles.v12}>
                  <FontAwesome5
                    name="arrow-right"
                    size={20}
                    style={styles.icon}
                  />
                </View>
              </View>
            </Pressable>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scene: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: "#ffffff",
  },

  txt: {
    fontSize: 40,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "gray",
  },
  tabLabelFocused: {
    color: "#008aff",
  },
  v0: { height: 300 },
  v1: { flex: 1 },
  item: { flex: 1, padding: 10, fontSize: 18, height: 44 },
  v11: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    flexDirection: "row",
  },
  icon: { margin: 5, color: "blue" },
  v12: {
    flex: 1,
    alignItems: "flex-end",
  },
});

export default App;
