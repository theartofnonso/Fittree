/* eslint-disable */
import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native-web";
import WIntervalModal from "./IntervalModal";
import WPauseModal from "./PauseModal";
import WorkoutCompletedModal from "./WorkoutCompletedModal";
import Entypo from "react-native-vector-icons/Entypo";
import {Video} from "expo-av";
import {useMediaQuery, useTheme} from "@mui/material";
import Ionicons from "react-native-vector-icons/Ionicons";

const REPS = "Reps";
const SECS = "Secs";

const PlayCircuitWorkout = props => {

    const theme = useTheme();
    const isBigScreen = useMediaQuery(theme.breakpoints.up('sm'));
    const isBiggerScreen = useMediaQuery(theme.breakpoints.up('md'));

    const [workout, setWorkout] = useState(null);

    const [exerciseDuration, setExerciseDuration] = useState(null);

    const [rounds, setRounds] = useState(null);

    const [roundsIndex, setRoundsIndex] = useState(0);

    const [exerciseIndex, setExerciseIndex] = useState(0);

    const [showIntervalModal, setShowIntervalModal] = useState(true);

    const [intervalModalDescription, setIntervalModalDescription] = useState("Workout Starting");

    const [intervalModalTime, setIntervalModalTime] = useState(5000);

    const [paused, togglePaused] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const [showWorkoutCompletedModal, setShowWorkoutCompletedModal] = useState(false)

    /**
     * Load Workout from either Store or from navigation
     */
    useEffect(() => {
        loadWorkout(props.workout);
        setIsLoading(false)
    }, []);

    /**
     * Load the exercises into the rounds array to play
     * @param workout
     */
    const loadWorkout = (workout) => {
        let rounds = new Array(workout.rounds);
        for (let i = 0; i < rounds.length; i++) {
            rounds[i] = Array.from(workout.workoutFits.items).sort((a, b) => a.index - b.index);
        }
        setRounds(rounds);
        // Set initial ExerciseDuration
        setExerciseDuration(rounds[0][0].repsOrTimeValue)
        setWorkout(workout);
    };

    useEffect(() => {
        let intervalId = null;

        if (showIntervalModal) return

        if (!paused) {
            intervalId = setInterval(() => {
                if (exerciseDuration === 0) {
                    clearInterval(intervalId);
                    if (isPlayMode()) {
                        seekForward();
                    }
                } else {
                    setExerciseDuration(prevValue => prevValue - 1000);
                }
            }, 1000);
        } else {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId);
    }, [paused, showIntervalModal, exerciseDuration]);

    /**
     * Seek through exercises
     */
    const seekForward = () => {

        const nextRoundsIndex = roundsIndex + 1;
        const nextExerciseIndex = exerciseIndex + 1;

        if (!isPlayMode()) {
            if (nextExerciseIndex < workoutFromStore.workoutFits.items.length) {
                setExerciseIndex(nextExerciseIndex);
                setExerciseDuration(getWorkoutFit().repsOrTimeValue);
            }
            return;
        }

        if (nextExerciseIndex >= rounds[roundsIndex].length) {
            if (nextRoundsIndex >= rounds.length) {
                setShowWorkoutCompletedModal(true)
            } else {
                setRoundsIndex(nextRoundsIndex);
                setExerciseIndex(0);
                setExerciseDuration(rounds[0][0].repsOrTimeValue);
                setIntervalModalDescription("Next Round");
                setIntervalModalTime(workout.roundsInterval);
                setShowIntervalModal(true);
            }
        } else {
            setExerciseIndex(nextExerciseIndex);
            setExerciseDuration(getWorkoutFit().repsOrTimeValue);
            setIntervalModalDescription(rounds[roundsIndex][nextExerciseIndex].fit.title);
            setIntervalModalTime(workout.exerciseInterval);
            setShowIntervalModal(true);
        }

    };

    /**
     * Seek through fits
     */
    const seekBackward = () => {

        const prevExerciseIndex = exerciseIndex - 1;

        if (prevExerciseIndex >= 0) {
            setExerciseIndex(prevExerciseIndex);
        } else {
            setExerciseIndex(0);
        }
    };

    /**
     * Navigate back
     * @returns {*}
     */
    const navigateBack = () => props.navigation.pop();

    /**
     * Close the workout
     */
    const closeWorkout = () => {
        setShowWorkoutCompletedModal(false)
        props.end()
    }

    /**
     * Play workout
     */
    const playWorkout = () => {
        togglePaused(false);
    };

    /**
     * Pause workout
     */
    const pauseWorkout = () => {
        togglePaused(true);
    };

    /**
     * Check if workout is in play mode
     * @returns {boolean}
     */
    const isPlayMode = () => true

    if (!workout) {
        return <View/>;
    }

    /**
     * Navigate to Fit
     */
    const navigateToFitPreview = () => {
        if (isPlayMode()) {
            pauseWorkout();
        }
    };

    /**
     * Get the workoutFit
     */
    const getWorkoutFit = () => {
        return rounds[roundsIndex][exerciseIndex];
    }

    /**
     * Get appropriate styling for wrapper component
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

    /**
     * Get appropriate styling for video component
     * @returns {number}
     */
    const getVideoStyling = () => {
        if(isBiggerScreen) {
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
                            <TouchableOpacity onPress={() => closeWorkout()}>
                                <Entypo name="cross" size={24} color="#282828"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.playBtn} onPress={navigateToFitPreview}>
                                <Ionicons name="information-circle-sharp" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    }
                    <View style={[isBigScreen ? styles.videoContainer : styles.videoContainerSmall]}>
                        <Video
                            style={[getVideoStyling()]}
                            source={{
                                uri: "https://" + getWorkoutFit().fit.videoUrls[0],
                            }}
                            resizeMode="contain"
                            shouldPlay={true}
                            isLooping={true}
                            isMuted={true}
                            onLoad={() => setIsLoading(false)}
                        />
                    </View>
                    <View style={[isBigScreen ? styles.playInfoContainer : styles.playInfoContainerSmall]}>
                        {!paused ? <View style={[ isBigScreen ? styles.playBtnsContainer : styles.playBtnsContainerSmall]}>
                            <TouchableOpacity style={styles.playBtn} onPress={seekBackward}>
                                <Text>Prev</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.playBtn} onPress={pauseWorkout}>
                                <Entypo
                                    name="controller-paus"
                                    size={24}
                                    color="#282828"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.playBtn} onPress={seekForward}>
                                <Text>Next</Text>
                            </TouchableOpacity>
                        </View> : null}
                        <View>
                            <Text style={styles.workoutFitTitle}>{getWorkoutFit().fit.title}</Text>
                            {getWorkoutFit().repsOrTime === SECS && <Text>{exerciseDuration / 1000}s</Text>}
                            {getWorkoutFit().repsOrTime === REPS && <Text>{getWorkoutFit().repsOrTimeValue} Reps</Text>}
                            <Text style={styles.fontSmall}>Round {roundsIndex + 1} of {workout.rounds}</Text>
                        </View>
                    </View>
                </View>
            </View>
            {paused ?
                <WPauseModal
                    close={navigateBack}
                    play={playWorkout}
                /> : null}
            {showIntervalModal ?
                <WIntervalModal
                    description={intervalModalDescription}
                    intervalTime={intervalModalTime}
                    close={navigateBack}
                    onFinish={() => setShowIntervalModal(false)}/> : null}
            {showWorkoutCompletedModal ?
                <WorkoutCompletedModal
                    navigateToWorkoutPreview={navigateBack} close={closeWorkout}/> : null}
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
    workoutFitTitle: {
        fontFamily: "Days One",
        fontSize: 25,
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
    fontSmall: {
        fontSize: 15,
    },
    textColor: {
        color: '#282828'
    },
    playBtn: {
        marginRight: 8,
    }
});
export default PlayCircuitWorkout;
