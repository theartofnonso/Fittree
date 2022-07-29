import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native-web';
import workoutsConstants from '../../utils/workout/workoutsConstants';
import {LinearGradient} from "expo-linear-gradient";
import {createTheme, responsiveFontSizes, ThemeProvider, Typography, useMediaQuery, useTheme} from "@mui/material";

const WorkoutCardBig = props => {

    const theme = useTheme();
    const isBigScreen = useMediaQuery(theme.breakpoints.up('sm'));

    let responsiveFontTheme = createTheme();
    responsiveFontTheme = responsiveFontSizes(responsiveFontTheme);

    return (
        <View>
            <View style={[isBigScreen ? styles.imageContainer : styles.imageContainerSmall]}>
                <Image
                    style={[isBigScreen ? styles.thumbnail : styles.thumbnailSmall]}
                    source={{
                        uri: 'https://' + props.workout.thumbnailUrl,
                        cache: 'force-cache',
                    }}
                />
                <LinearGradient
                    colors={['transparent', '#000000']}
                    style={styles.overlay}
                />
            </View>
            <View style={styles.textContainer}>
                <ThemeProvider theme={responsiveFontTheme}>
                    <Typography variant="h6" color='#ffffff' sx={{fontFamily: 'Montserrat', fontWeight: 500}}>{props.workout.title}</Typography>
                    <Typography variant="body2" color='#ffffff' sx={{fontFamily: 'Montserrat', fontWeight: 500, fontSize: 10, marginVertical: 1}}>
                        {props.workout.intensityLevel}{' '}
                        {props.workout.type === workoutsConstants.workoutType.CIRCUIT ? `| ${props.workout.rounds} Round(s)` : null}
                    </Typography>
                </ThemeProvider>
                <View style={styles.scrollViewContainer}>
                    <ScrollView horizontal>
                        {props.workout.equipments.map((equipment, index) => {
                            return (
                                <View key={index}>
                                    <ThemeProvider theme={responsiveFontTheme}>
                                        <Typography
                                            variant="body2"
                                            color='#ffffff'
                                            sx={{
                                                fontSize: 12,
                                                marginRight: 0.5,
                                                fontFamily: 'Montserrat',
                                                fontWeight: 500,
                                            }}>{equipment}</Typography>
                                    </ThemeProvider>
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>
                <View style={styles.scrollViewContainer}>
                    <ScrollView horizontal>
                        {props.workout.bodyParts.map((bodyPart, index) => {
                            return (
                                <View key={index}>
                                    <ThemeProvider theme={responsiveFontTheme}>
                                        <Typography
                                            variant="body2"
                                            color='#ffffff'
                                            sx={{
                                                fontSize: 12,
                                                marginRight: 0.5,
                                                fontFamily: 'Montserrat',
                                                fontWeight: 500,
                                            }}>{bodyPart}</Typography>
                                    </ThemeProvider>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
            </View>
            <View style={styles.timerContainer}>
                <Text style={styles.timerText}>{Math.round(props.workout.duration / 60000)} mins</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        height: '100%',
        overflow: 'hidden',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    imageContainerSmall: {
        height: 400,
        overflow: 'hidden',
        borderRadius: 8
    },
    thumbnail: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
    thumbnailSmall: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
    },
    scrollViewContainer: {
        height: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: 10,
        left: 10,
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

export default WorkoutCardBig;
