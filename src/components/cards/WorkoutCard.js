import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native-web';
import {LinearGradient} from "expo-linear-gradient";
import {createTheme, responsiveFontSizes, ThemeProvider, Typography} from "@mui/material";

const WorkoutCard = ({workout}) => {

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return (
        <View style={styles.card}>
            <Image
                style={styles.thumbnail}
                source={{
                    uri: 'https://' + workout.thumbnailUrl,
                    cache: 'force-cache',
                }}
            />
            <LinearGradient
              colors={['transparent', '#000000']}
              style={styles.overlay}
            />
            <View style={styles.textContainer}>
                <ThemeProvider theme={theme}>
                    <Typography variant="h6" color='#ffffff'>{workout.title}</Typography>
                    <Typography variant="body2" color='#ffffff'>{workout.intensityLevel}</Typography>
                </ThemeProvider>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        borderRadius: 8,
        overflow: 'hidden',
    },
    thumbnail: {
        width: '100%',
        height: 250,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
    },
    textContainer: {
        ...StyleSheet.absoluteFillObject,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        padding: 15
    },
    text: {
        color: 'white',
    },
    title: {
        color: 'white'
    },
    intensityLevel: {
        fontFamily: 'Days One',
        marginTop: -5,
    },
    textBig: {
        fontFamily: 'Days One',
        fontSize: 18,
    },
    chipBtnText: {
        fontSize: 12,
        color: 'white',
        marginRight: 8,
    },
    chipsContainer: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        flex: 1,
    },
    bottomCardSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    liveText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    liveContainer: {
        borderRadius: 3,
        paddingHorizontal: 2,
        width: 40,
        backgroundColor: '#ffffffff',
    },
});

export default WorkoutCard;
