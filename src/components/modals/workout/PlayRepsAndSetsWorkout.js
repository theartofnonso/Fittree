/* eslint-disable */
import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native-web";
import WIntervalModal from "./IntervalModal";
import WPauseModal from "./PauseModal";
import WorkoutCompletedModal from "./WorkoutCompletedModal";
import Entypo from "react-native-vector-icons/Entypo";
import {Video} from "expo-av";
import {useMediaQuery, useTheme} from "@mui/material";
import {Title} from "react-native-paper";

const REPS = "Reps";
const SECS = "Secs";

const PlayRepsAndSetsWorkout = props => {

    const theme = useTheme();
    const isBigScreen = useMediaQuery(theme.breakpoints.up('sm'));
    const isBiggerScreen = useMediaQuery(theme.breakpoints.up('md'));

    const [workout, setWorkout] = useState(null);

    const [exerciseDuration, setExerciseDuration] = useState(null);

    const [exercises, setExercises] = useState(null);

    const [setIndex, setSetIndex] = useState(0);

    const [exerciseIndex, setExerciseIndex] = useState(0);

    const [showIntervalModal, setShowIntervalModal] = useState(true);

    const [intervalModalDescription, setIntervalModalDescription] = useState("Workout Starting");

    const [intervalModalTime, setIntervalModalTime] = useState(5000);

    const [paused, togglePaused] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    const [showWorkoutCompletedModal, setShowWorkoutCompletedModal] = useState(false)

    /**
     * Get appropriate styling for wrapper
     * @returns {number}
     */
    const getWrapperStyling = () => {
        if(isBiggerScreen) {
            return styles.wrapperMd
        } else if (isBigScreen) {
            return styles.wrapperLg
        } else {
            return styles.wrapperXs
        }
    }

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

        let exercises = new Array(workout.workoutFits.items.length);
        const sortedWorkoutFits = Array.from(workout.workoutFits.items).sort((a, b) => a.index - b.index);
        for (let i = 0; i < exercises.length; i++) {
            const exercise = sortedWorkoutFits[i]
            const sets = new Array(exercise.sets);
            for (let i = 0; i < sets.length; i++) {
                sets[i] = exercise;
            }
            exercises[i] = sets;
        }
        setExercises(exercises);

        // Set initial ExerciseDuration
        setExerciseDuration(exercises[0][0].repsOrTimeValue)
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
     * Seek through fits
     */
    const seekForward = () => {

        const nextExerciseIndex = exerciseIndex + 1;
        const nextSetIndex = setIndex + 1;

        if(!isPlayMode()) {
            if (nextExerciseIndex < props.route.params.payload.workout.workoutFits.items.length) {
                setExerciseIndex(nextExerciseIndex);
                setExerciseDuration(getWorkoutFit().repsOrTimeValue);
            }
            return;
        }

        if (nextSetIndex >= exercises[exerciseIndex].length) {
            if (nextExerciseIndex >= exercises.length) {
                setShowWorkoutCompletedModal(true)
            } else {
                setExerciseIndex(nextExerciseIndex);
                setSetIndex(0);
                setExerciseDuration(exercises[0][0].repsOrTimeValue);
                setIntervalModalDescription("Next Exercise");
                setIntervalModalTime(workout.exerciseInterval);
                setShowIntervalModal(true);
            }
        } else {
            setSetIndex(nextSetIndex);
            setExerciseDuration(getWorkoutFit().repsOrTimeValue);
            setIntervalModalDescription(exercises[exerciseIndex][setIndex].fit.title);
            setIntervalModalTime(workout.setsInterval);
            setShowIntervalModal(true);
        }
    };

    /**
     * Seek through fits
     */
    const seekBackward = () => {
        const prevExerciseIndex = exerciseIndex - 1;
        const prevSetIndex = setIndex - 1;

        if(!isPlayMode()) {
            if (prevExerciseIndex >= 0) {
                setExerciseIndex(prevExerciseIndex);
            } else {
                setExerciseIndex(0);
            }
        } else {
            if (prevSetIndex >= 0) {
                setSetIndex(prevSetIndex);
            } else {
                setSetIndex(0);
            }
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
    const getWorkoutFit = () => exercises[exerciseIndex][setIndex];

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
                        </View>
                    }
                    <View style={[isBigScreen ? styles.videoContainer : styles.videoContainerSmall]}>
                        <Video
                            style={[isBigScreen ? styles.video : styles.videoSmall]}
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
                        {!paused ? <View style={[ isBigScreen ? styles.playBtnsContainer : styles.playBtnsContainer]}>
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
                            {/*<TouchableOpacity style={styles.playBtn} onPress={navigateToFitPreview}>*/}
                            {/*    <Entypo name="info" size={20} color="#282828"/>*/}
                            {/*</TouchableOpacity>*/}
                        </View> : null}
                        <View>
                            <Title style={styles.workoutFitTitle}>{getWorkoutFit().fit.title}</Title>
                            {getWorkoutFit().repsOrTime === SECS && <Title>{exerciseDuration / 1000}s</Title>}
                            {getWorkoutFit().repsOrTime === REPS && <Title>{getWorkoutFit().repsOrTimeValue} Reps</Title>}
                            {isPlayMode() && <Title style={styles.fontSmall}>Set {setIndex + 1} of {getWorkoutFit().sets}</Title>}
                            {isPlayMode() && <Title style={styles.fontSmall}>Exercise {exerciseIndex + 1} of {exercises.length}</Title>}
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
        gridTemplateColumns: '350px 250px',
        backgroundColor: 'white',
        margin: 'auto',
        borderRadius: 8,
    },
    wrapperLg: {
        display: 'grid',
        gridTemplateColumns: '300px 250px',
        backgroundColor: 'white',
        margin: 'auto',
        borderRadius: 8,
    },
    navigationBar: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'flex-start',
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
        height: 300,
        backgroundColor: 'black',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    videoContainerSmall: {
        height: 300,
        backgroundColor: 'black',
        borderRadius: 8
    },
    video: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    videoSmall: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
    },
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
        marginBottom: 10,
        border: '1px solid red'
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
export default PlayRepsAndSetsWorkout;
