// @generated: @expo/next-adapter@2.1.52
import React from 'react';
import { StyleSheet, Text, View } from 'react-native-web';
import { Video } from 'expo-av';
import {Entypo} from "@expo/vector-icons";


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
      <Video
          source={{
            uri: 'https://d26u7w064jxl38.cloudfront.net/public/Videos/bHDsSasrfaeEUjSUb7qT0cH5j2jXpbe7qJeqlfFacevRbJEay5.mp4',
          }}
          resizeMode="contain"
          isLooping
          shouldPlay={true}
          isMuted={true}
      />
        <Entypo name="chevron-left" size={24} color="#282828" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
