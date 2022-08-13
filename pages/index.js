// @generated: @expo/next-adapter@2.1.52
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native-web';
import {Video} from 'expo-av';


export default function App() {
    return (
        <View style={styles.container}>
            <Video
                style={{ height: 300, width: 300, backgroundColor: 'black', ...StyleSheet.absoluteFill}}
                source={{
                    uri: 'https://d26u7w064jxl38.cloudfront.net/public/Videos/bc5j60veDb5d5x5D007eXdP5aPOD1Kte5v750k0I05H30fU1D6.mp4',
                }}
                resizeMode="contain"
                isLooping
                shouldPlay={true}
                isMuted={true}
            />
         </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        width: 300,
        borderWidth: 1
    },
    text: {
        fontSize: 16,
    },
});
