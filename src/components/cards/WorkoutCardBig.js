import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native-web';
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
                    <Typography variant="h6" color='#ffffff'>{props.workout.title}</Typography>
                    <Typography variant="body2" color='#ffffff'>
                        {props.workout.intensityLevel}{' '}
                        {props.workout.type === workoutsConstants.workoutType.CIRCUIT ? `| ${props.workout.rounds} Round(s)` : null}
                    </Typography>
                </ThemeProvider>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {props.workout.equipments.map((equipment, index) => {
                        return (
                            <View key={index}>
                                <ThemeProvider theme={responsiveFontTheme}>
                                    <Typography
                                        variant="body2"
                                        color='#ffffff'
                                        sx={{
                                            fontSize: 10,
                                            marginRight: 0.5,
                                        }}>{equipment}</Typography>
                                </ThemeProvider>
                            </View>
                        );
                    })}
                </View>
                <View style={styles.bottomCardSection}>
                    <View style={styles.chipsContainer}>
                        {props.workout.bodyParts.map((bodyPart, index) => {
                            return (
                                <View key={index}>
                                    <ThemeProvider theme={responsiveFontTheme}>
                                        <Typography
                                            variant="body2"
                                            color='#ffffff'
                                            sx={{
                                                fontSize: 10,
                                                marginRight: 0.5,
                                            }}>{bodyPart}</Typography>
                                    </ThemeProvider>
                                </View>
                            )
                        })}
                    </View>
                </View>
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
    textContainer: {
        ...StyleSheet.absoluteFillObject,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        margin: 10,
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
});

export default WorkoutCardBig;
