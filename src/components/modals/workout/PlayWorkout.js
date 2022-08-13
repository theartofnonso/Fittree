/* eslint-disable */
import React, {useEffect, useState} from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import PauseModal from "./PauseModal";
import IntervalModal from "./IntervalModal";
import workoutsConstants from "../../../utils/workout/workoutsConstants";
import {timeOrReps} from "../../../utils/workout/workoutsHelperFunctions";
import WorkoutCompletedModal from "./WorkoutCompletedModal";
import {createTheme, responsiveFontSizes, ThemeProvider, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Video} from "expo-av";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import PreviewExercise from "./PreviewExercise";

const PlayWorkout = props => {

    const theme = useTheme();
    const isBigScreen = useMediaQuery(theme.breakpoints.up('sm'));
    const isBiggerScreen = useMediaQuery(theme.breakpoints.up('md'));

    let responsiveFontTheme = createTheme();
    responsiveFontTheme = responsiveFontSizes(responsiveFontTheme);


    const [showExercise, setShowExercise] = useState(false)

    const [startTime, setStartTime] = useState(0)

    useEffect(() => {
        const currentTime = Date.now();
        setStartTime(currentTime)
    }, [])

    /**
     * Display Reps or Time value
     * @returns {string}
     */
    const getRepsOrTimeValue = () => {
        let repsOrTimeValue = props.workoutExercise.repsOrTimeValue;
        if (props.workoutExercise.repsOrTime === workoutsConstants.exerciseInfo.TIME) {
            repsOrTimeValue = props.extraData.exerciseDuration / 1000;
        }
        return repsOrTimeValue + " " + timeOrReps(props.workoutExercise.repsOrTime);
    };

    /**
     * Get appropriate styling for wrapper component
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

    /**
     * Get appropriate styling for video component
     * @returns {number}
     */
    const getVideoStyling = () => {
        if (isBiggerScreen) {
            return styles.videoLg
        } else if (isBigScreen) {
            return styles.videoMd
        } else {
            return styles.videoXs
        }
    }

    /**
     * Preview exercise information
     */
    const previewExercise = () => {
        props.previewExercise()
        setShowExercise(true)
    }

    return (
        <View style={styles.root}>
            <View style={styles.container}>
                {isBigScreen &&
                    <TouchableOpacity style={styles.closeBtnStyle} onPress={props.close}>
                        <Entypo name="cross" size={32} color="white"/>
                    </TouchableOpacity>
                }
                <View style={[getWrapperStyling()]}>
                    {!isBigScreen ?
                        <View style={styles.navigationBar}>
                            <TouchableOpacity onPress={props.close}>
                                <Entypo name="cross" size={32} color="#282828"/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={previewExercise}>
                                <MaterialCommunityIcons name="information-variant" size={32} color="#282828"/>
                            </TouchableOpacity>
                        </View>
                        : null}
                    <View style={[isBigScreen ? styles.videoContainer : styles.videoContainerSmall]}>
                        <Video
                            style={[getVideoStyling()]}
                            source={{
                                uri: "https://" + props.workoutExercise.exercise.videoUrls[0],
                            }}
                            resizeMode="contain"
                            shouldPlay={true}
                            isLooping={true}
                            isMuted={true}
                        />
                    </View>
                    <View style={[isBigScreen ? styles.playInfoContainer : styles.playInfoContainerSmall]}>
                        {!props.isPaused ?
                            <View style={[isBigScreen ? styles.playBtnsContainer : styles.playBtnsContainerSmall]}>
                                <TouchableOpacity onPress={props.seekBackward}>
                                    <Typography variant="body1"
                                                sx={{fontFamily: 'Montserrat', fontWeight: 500}}>Prev</Typography>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.pauseBtn} onPress={props.pause}>
                                    <Entypo
                                        name="controller-paus"
                                        size={24}
                                        color="#282828"
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={props.seekForward}>
                                    <Typography variant="body1"
                                                sx={{fontFamily: 'Montserrat', fontWeight: 500}}>Next</Typography>
                                </TouchableOpacity>
                            </View> : null}
                        <View>
                            <ThemeProvider theme={responsiveFontTheme}>
                                <Typography variant="h6" sx={{
                                    fontFamily: 'Montserrat',
                                    fontWeight: 500
                                }}>{props.workoutExercise.exercise.title}</Typography>
                                <Typography variant="body1" sx={{
                                    fontFamily: 'Montserrat',
                                    fontWeight: 300
                                }}>{getRepsOrTimeValue()}</Typography>
                                <Typography variant="body1" sx={{
                                    fontFamily: 'Montserrat',
                                    fontWeight: 300
                                }}>{props.extraData.exerciseExtras}</Typography>
                            </ThemeProvider>
                        </View>
                        {isBigScreen ?
                            <TouchableOpacity style={{position: 'absolute', bottom: 8, right: 8}}
                                              onPress={previewExercise}>
                                <MaterialCommunityIcons name="information-variant" size={32} color="#282828"/>
                            </TouchableOpacity> : null}
                    </View>
                </View>
            </View>
            {props.isPaused ?
                <PauseModal
                    isVisible={props.isPaused}
                    close={props.close}
                    play={props.play}
                /> : null}
            {props.shouldPlayInterval ?
                <IntervalModal
                    description={props.interval.description}
                    intervalTime={props.interval.duration}
                    navigateToWorkoutPreview={props.close}
                    onFinish={props.onFinishInterval}/> : null}
            {props.onEnd ?
                <WorkoutCompletedModal
                    isVisible={props.onEnd}
                    startTime={startTime}
                    navigateToWorkoutPreview={props.close}/> : null}
            {showExercise ?
                <PreviewExercise
                    exercise={props.workoutExercise.exercise}
                    close={() => setShowExercise(false)}/> : null}
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
    },
    wrapperMd: {
        display: 'grid',
        gridTemplateColumns: '300px 250px',
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
    navigationBar: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    closeBtnStyle: {
        position: 'fixed',
        top: 10,
        right: 10,
    },
    btnStyle: {
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: 40,
    },
    videoContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    videoContainerSmall: {
        height: 300,
        backgroundColor: '#282828'
    },
    videoXs: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
    },
    videoMd: {

    },
    videoLg: {},
    playInfoContainer: {
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    playInfoContainerSmall: {
        padding: 20
    },
    playBtnsContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    playBtnsContainerSmall: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    pauseBtn: {
        alignItems: "center",
        borderRadius: 5,
        flexDirection: "column",
        justifyContent: "center",
        width: 40,
        height: 40,
        marginHorizontal: 15,
    },
});
export default PlayWorkout;
