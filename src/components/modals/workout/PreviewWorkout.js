/* eslint-disable */
import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native-web";
import workoutsConstants from "../../../utils/workout/workoutsConstants";
import WorkoutCardBig from "../../cards/WorkoutCardBig";
import WorkoutExerciseCard from "../../cards/WorkoutExerciseCard";
import Entypo from "react-native-vector-icons/Entypo";
import {Feather} from '@expo/vector-icons';
import {createTheme, responsiveFontSizes, ThemeProvider, Typography, useMediaQuery, useTheme} from "@mui/material";

const PreviewWorkout = ({ workout, play, close}) => {

    const theme = useTheme();
    const isBigScreen = useMediaQuery(theme.breakpoints.up('sm'));
    const isBiggerScreen = useMediaQuery(theme.breakpoints.up('md'));

    let responsiveFontTheme = createTheme();
    responsiveFontTheme = responsiveFontSizes(responsiveFontTheme);

    /**
     * Play the appropriate workout
     */
    const playWorkout = () => {
        play()
    };

    if (!workout) {
        return <View/>;
    }

    /**
     * Sorted WorkoutFits
     * @type {unknown[]}
     */
    const sortedWorkoutFits = Array.from(workout.workoutFits.items).sort((a, b) => a.index - b.index);

    /**
     * Display information for intervals
     * @returns {string}
     */
    const displayRestInterval = () => {
        if (workout.type === workoutsConstants.workoutType.CIRCUIT) {
            if ((workout.rounds > 1) && workout.roundsInterval > 0) {
                return `${workout.rounds} rounds\nRest for ${workout.roundsInterval / 1000} secs after each round`;
            }
            return "No rest after each round";
        }

        if (workout.type === workoutsConstants.workoutType.REPS_SETS) {
            if ((workout.workoutFits.items.length > 1) && workout.setsInterval > 0) {
                return `Rest for ${workout.setsInterval / 1000} secs after each set`;
            }
            return "No rest after each set";
        }

    };

    /**
     * Get appropriate styling for wrapper
     * @returns {number}
     */
    const getWrapperStyling = () => {
        if(isBiggerScreen) {
            return styles.wrapperLg
        } else if (isBigScreen) {
            return styles.wrapperMd
        } else {
            return styles.wrapperXs
        }
    }

    return (
        <View style={styles.root}>
            <View style={styles.container}>
                {isBigScreen &&
                    <TouchableOpacity style={styles.closeBtnStyle} onPress={() => close()}>
                        <Entypo name="cross" size={32} color="white"/>
                    </TouchableOpacity>
                }
                <View style={[getWrapperStyling()]}>
                    {!isBigScreen &&
                        <View style={styles.navigationBar}>
                            <TouchableOpacity onPress={() => close()}>
                                <Entypo name="cross" size={24} color="#282828"/>
                            </TouchableOpacity>
                        </View>
                    }
                    <WorkoutCardBig workout={workout}/>
                    <View style={[ isBigScreen ? styles.previewInfo : styles.previewInfoSmall]}>
                        <ThemeProvider theme={responsiveFontTheme}>
                            <Typography variant="body2" sx={{marginTop: 2, marginRight: 2}}>{workout.description}</Typography>
                        </ThemeProvider>
                        <View style={{marginVertical: 10}}>
                            <ThemeProvider theme={responsiveFontTheme}>
                                <Typography variant="body2" fontSize={10}>{displayRestInterval()}</Typography>
                            </ThemeProvider>
                            {sortedWorkoutFits.map((workoutFit, i) =>
                                <WorkoutExerciseCard key={i} workoutFit={workoutFit}/>)}
                        </View>
                    </View>
                    <TouchableOpacity
                        style={[isBigScreen ? styles.startWorkoutBtn : styles.startWorkoutBtnSmall]}
                        onPress={playWorkout}>
                        <Feather name="play" size={24} color="white"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({

    root: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container: {
        height: '100vh',
    },
    wrapperXs: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        overflow: 'scroll',
        backgroundColor: 'white',
        padding: 8,
    },
    wrapperMd: {
        display: 'grid',
        gridTemplateColumns: '300px 300px',
        gridTemplateRows: '400px',
        backgroundColor: 'white',
        margin: 'auto',
        borderRadius: 8,
    },
    wrapperLg: {
        display: 'grid',
        gridTemplateColumns: '400px 400px',
        gridTemplateRows: '500px',
        backgroundColor: 'white',
        margin: 'auto',
        borderRadius: 8,
    },
    previewInfo: {
        overflow: 'scroll',
        paddingLeft: 10
    },
    previewInfoSmall: {
        overflow: 'scroll',
    },
    description: {
        marginVertical: 20,
    },
    navigationBar: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingRight: 8,
    },
    closeBtnStyle: {
        position: 'fixed',
        top: 10,
        right: 10,
    },
    startWorkoutBtn: {
        backgroundColor: '#ef7a75',
        borderRadius: '100%',
        width: 50,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 15,
        bottom: 15,
        boxShadow: '1px 1px 5px gray'
    },
    startWorkoutBtnSmall: {
        backgroundColor: '#ef7a75',
        borderRadius: '100%',
        width: 50,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        right: 15,
        bottom: 15,
        boxShadow: '1px 1px 5px gray'
    },
    card: {
        width: "100%",
        height: 380,
        borderRadius: 8,
    },
    thumbnail: {
        width: 200,
        height: 250,
        borderRadius: 8,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 8,
    },
    text: {
        color: "white",
    },
    textBig: {
        fontFamily: "Days One",
    },
    chipBtn: {
        marginRight: 8,
        backgroundColor: "white",
        borderRadius: 18,
        color: "white",
        paddingHorizontal: 8,
    },
    chipsContainer: {
        flexGrow: 0,
    },
    chipsContents: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
    },
    workoutFitsContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    divider: {
        borderWidth: 0.5,
        borderColor: "#d5d5d5",
        marginVertical: 8,
    },
    restInterval: {
        marginBottom: 10,
    },
    textBold: {
        fontWeight: "bold",
    },
    textWhite: {
        color: "white",
    },
    scrollView: {
        marginBottom: 10,
        width: "100%",
    },
    errSnackbar: {
        backgroundColor: "#f54755",
    },
    infoSnackbar: {
        backgroundColor: "#282828",
    },
});
export default PreviewWorkout;
