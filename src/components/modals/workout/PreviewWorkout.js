/* eslint-disable */
import React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native-web";
import WorkoutCardBig from "../../cards/WorkoutCardBig";
import WorkoutExerciseCard from "../../cards/WorkoutExerciseCard";
import Entypo from "react-native-vector-icons/Entypo";
import {createTheme, responsiveFontSizes, ThemeProvider, Typography, useMediaQuery, useTheme} from "@mui/material";

const PreviewWorkout = ({workout, play, close}) => {

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

    /**
     * Get appropriate styling for wrapper
     * @returns {number}
     */
    const getWrapperStyling = () => {
        if (isBiggerScreen) {
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
                    <TouchableOpacity style={styles.closeBtnStyle} onPress={close}>
                        <Entypo name="cross" size={32} color="white"/>
                    </TouchableOpacity>
                }
                <View style={[getWrapperStyling()]}>
                    {!isBigScreen &&
                        <View style={styles.navigationBar}>
                            <TouchableOpacity onPress={close}>
                                <Entypo name="cross" size={24} color="#282828"/>
                            </TouchableOpacity>
                        </View>
                    }
                    <WorkoutCardBig workout={workout}/>
                    <View style={[isBigScreen ? styles.previewInfo : styles.previewInfoSmall]}>
                        <ThemeProvider theme={responsiveFontTheme}>
                            <Typography variant="body2" sx={{
                                fontFamily: 'Montserrat',
                                fontWeight: 300,
                                paddingTop: 0.5,
                                whiteSpace: 'pre-line'
                            }}>{workout.description}</Typography>
                        </ThemeProvider>
                        {workout.workoutExercises.map((workoutExercise, i) =>
                            <WorkoutExerciseCard key={i} workoutExercise={workoutExercise} type={workout.type}/>)}
                    </View>
                    <TouchableOpacity style={[isBigScreen ? styles.startWorkoutBtn : styles.startWorkoutBtnSmall]}
                                      onPress={playWorkout}>
                        <Entypo name="controller-play" size={32} color="white"/>
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
        paddingHorizontal: 15,
        paddingTop: 10
    },
    previewInfoSmall: {
        paddingTop: 10,
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
        paddingHorizontal: 8,
        marginBottom: 8
    },
    closeBtnStyle: {
        position: 'fixed',
        top: 10,
        right: 10,
    },
    startWorkoutBtn: {
        backgroundColor: '#ef7a75',
        position: 'absolute',
        right: 25,
        bottom: 30,
        boxShadow: '1px 1px 5px gray',
        padding: 10,
        borderRadius: 18,
    },
    startWorkoutBtnSmall: {
        backgroundColor: '#ef7a75',
        position: 'fixed',
        right: 25,
        bottom: 30,
        boxShadow: '1px 1px 5px gray',
        padding: 10,
        borderRadius: 18,
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
