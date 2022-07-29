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
                    <Typography variant="h6" color='#ffffff' sx={{fontFamily: 'Montserrat', fontWeight: 900}}>{workout.title}</Typography>
                    <Typography variant="body2" color='#ffffff' sx={{fontFamily: 'Montserrat', fontWeight: 500, fontSize: 10}}>{workout.intensityLevel}</Typography>
                </ThemeProvider>
            </View>
            <View style={styles.timerContainer}>
                <Text style={styles.timerText}>{Math.round(workout.duration / 60000)} mins</Text>
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
    timerText: {
        color: 'white',
        fontWeight: 300,
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 10
    },
    timerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#ef7a75',
        position: 'absolute',
        right: 10,
        top: 10
    },
});

export default WorkoutCard;
