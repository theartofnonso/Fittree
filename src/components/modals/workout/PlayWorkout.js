/* eslint-disable */
import React, {useState} from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import PauseModal from "./PauseModal";
import IntervalModal from "./IntervalModal";
import workoutsConstants from "../../../utils/workout/workoutsConstants";
import {timeOrReps} from "../../../utils/workout/workoutsHelperFunctions";
import WorkoutCompletedModal from "./WorkoutCompletedModal";
import Ionicons from "react-native-vector-icons/Ionicons";
import {createTheme, responsiveFontSizes, ThemeProvider, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Video} from "expo-av";

const PlayWorkout = props => {

    const [isLoading, setIsLoading] = useState(true);

    const theme = useTheme();
    const isBigScreen = useMediaQuery(theme.breakpoints.up('sm'));
    const isBiggerScreen = useMediaQuery(theme.breakpoints.up('md'));

    let responsiveFontTheme = createTheme();
    responsiveFontTheme = responsiveFontSizes(responsiveFontTheme);

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

    return (
        <View style={styles.root}>
            <View style={styles.container}>
                {isBigScreen &&
                    <TouchableOpacity style={styles.closeBtnStyle} onPress={() => closeWorkout()}>
                        <Entypo name="cross" size={32} color="white"/>
                    </TouchableOpacity>
                }
                <View style={[getWrapperStyling()]}>
                    {!isBigScreen &&
                        <View style={styles.navigationBar}>
                            <TouchableOpacity onPress={() => props.close}>
                                <Entypo name="cross" size={24} color="#282828"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.playBtn} onPress={props.previewExercise}>
                                <Ionicons name="information-circle-sharp" size={24} color="black"/>
                            </TouchableOpacity>
                        </View>
                    }
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
                            onLoad={() => setIsLoading(false)}
                        />
                    </View>
                    <View style={[isBigScreen ? styles.playInfoContainer : styles.playInfoContainerSmall]}>
                        {!props.isPaused ?
                            <View style={[isBigScreen ? styles.playBtnsContainer : styles.playBtnsContainerSmall]}>
                                <TouchableOpacity style={styles.playBtn} onPress={props.seekBackward}>
                                    <Typography variant="body2"
                                                sx={{fontFamily: 'Montserrat', fontWeight: 500}}>Prev</Typography>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.playBtn} onPress={props.pause}>
                                    <Entypo
                                        name="controller-paus"
                                        size={24}
                                        color="#282828"
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.playBtn} onPress={props.seekForward}>
                                    <Typography variant="body2"
                                                sx={{fontFamily: 'Montserrat', fontWeight: 500}}>Next</Typography>
                                </TouchableOpacity>
                            </View> : null}
                        <View>
                            <ThemeProvider theme={responsiveFontTheme}>
                                <Typography variant="h6" sx={{
                                    fontFamily: 'Montserrat',
                                    fontWeight: 900
                                }}>{props.workoutExercise.exercise.title}</Typography>
                                <Typography variant="body2" sx={{
                                    fontFamily: 'Montserrat',
                                    fontWeight: 500
                                }}>{getRepsOrTimeValue()}</Typography>
                                <Typography variant="body2" sx={{
                                    fontFamily: 'Montserrat',
                                    fontWeight: 500
                                }}>{props.extraData.exerciseExtras}</Typography>
                            </ThemeProvider>
                        </View>
                    </View>
                </View>
            </View>
            <PauseModal
                isVisible={props.isPaused}
                close={props.close}
                play={props.play}
            />
            {props.shouldPlayInterval ?
                <IntervalModal
                    description={props.interval.intervalModalDescription}
                    intervalTime={props.interval.intervalModalTime}
                    close={props.close}
                    onFinish={props.onFinishInterval}/> : null}
            {/*<WorkoutCompletedModal*/}
            {/*    isVisible={props.isPaused}*/}
            {/*    navigateToWorkoutPreview={props.close}/>*/}
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
        gridTemplateColumns: '300px 250px',
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
        paddingRight: 8
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
        backgroundColor: 'black',
        borderRadius: 8
    },
    videoXs: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
    },
    videoMd: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    videoLg: {},
    playInfoContainer: {
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    playInfoContainerSmall: {
        paddingTop: 10,
    },
    playBtnsContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    playBtnsContainerSmall: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    playBtn: {
        marginRight: 8,
    }
});
export default PlayWorkout;
