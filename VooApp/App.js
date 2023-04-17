import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import React from "react";

export default function App() {
  const animationStyle = React.useCallback((value = number) => {
    "worklet";

    const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
    const scale = interpolate(value, [-1, 0, 1], [1.25, 1, 0.25]);
    const opacity = interpolate(value, [-0.75, 0, 1], [0, 1, 0]);

    return {
      transform: [{ scale }],
      zIndex,
      opacity,
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "yellow" }}>
      <View style={{ flex: 1, backgroundColor: "yellow" }}>
      <Carousel
        {...baseOptions}
        loop
        autoPlay={isAutoPlay}
        autoPlayInterval={isFast ? 100 : 2000}
        data={[...new Array(12).keys()]}
        renderItem={({ index }) => <SBItem key={index} index={index} />}
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
