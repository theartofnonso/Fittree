/* eslint-disable */
import React, {useEffect, useState} from "react";
import {Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native-web";
import VideoLoadingIndicator from "../VideoLoadingIndicator";
import WIntervalModal from "./IntervalModal";
import WPauseModal from "./PauseModal";
import WorkoutCompletedModal from "./WorkoutCompletedModal";
import {Video} from "expo-av";
import Entypo from "react-native-vector-icons/Entypo";

const REPS = "Reps";
const SECS = "Secs";

const PlayCircuitWorkout = props => {

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
        console.log(rounds[roundsIndex][exerciseIndex])
        return rounds[roundsIndex][exerciseIndex];
    }

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.videoContainer}>
                {isLoading && <VideoLoadingIndicator/>}
                <Video
                    style={styles.video}
                    source={{
                        uri: "https://" + getWorkoutFit().fit.videoUrls[0],
                    }}
                    resizeMode="contain"
                    shouldPlay={true}
                    isLooping={true}
                    isMuted={true}
                    onLoad={() => setIsLoading(false)}
                />
                <View style={styles.navBarStyle}>
                    <TouchableOpacity style={styles.btnStyle} onPress={navigateBack}>
                        <Entypo name="cross" size={24} color="#fafafa"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyle} onPress={navigateToFitPreview}>
                        <Entypo name="info" size={20} color="white"/>
                    </TouchableOpacity>
                </View>
            </View>
            {!paused ? (
                <View style={styles.controlBtnsContainer}>
                    <TouchableOpacity onPress={seekBackward}>
                        <Text>Prev</Text>
                    </TouchableOpacity>
                    {isPlayMode() ?
                        <TouchableOpacity style={styles.pauseBtn} onPress={pauseWorkout}>
                            <Entypo
                                name="controller-paus"
                                size={28}
                                color="#282828"
                            />
                        </TouchableOpacity> : <View style={styles.noPauseBtn}/>}
                    <TouchableOpacity onPress={seekForward}>
                        <Text>Next</Text>
                    </TouchableOpacity>
                </View>
            ) : null}
            <View style={styles.infoContainer}>
                <Text style={styles.workoutFitTitle}>{getWorkoutFit().fit.title}</Text>
                {getWorkoutFit().repsOrTime === SECS && <Text>{exerciseDuration / 1000}s</Text>}
                {getWorkoutFit().repsOrTime === REPS && <Text>{getWorkoutFit().repsOrTimeValue} Reps</Text>}
                {isPlayMode() && <Text style={styles.fontSmall}>Round {roundsIndex + 1} of {workout.rounds}</Text>}
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
                    navigateToWorkoutPreview={navigateBack} close={() => {
                    setShowWorkoutCompletedModal(false)
                    props.end()}}/> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: "white",
        height: Dimensions.get("window").height,
    },
    navBarStyle: {
        ...StyleSheet.absoluteFill,
        height: 100,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 25,
        marginLeft: 15,
        width: 40,
        borderRadius: 15,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    btnStyle: {
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: 40,
    },
    videoContainer: {
        height: 400,
    },
    video: {
        ...StyleSheet.absoluteFillObject,
    },
    infoContainer: {
        padding: 20,
    },
    workoutFitTitle: {
        fontFamily: "Days One",
        fontSize: 25,
    },
    controlBtnsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    prevNextBtn: {
        alignItems: "center",
        backgroundColor: "#282828",
        borderRadius: 5,
        flexDirection: "column",
        justifyContent: "center",
        height: 40,
        width: 80,
        fontSize: 12,
    },
    prevBtnColor: {
        backgroundColor: "#282828",
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
    noPauseBtn: {
        borderRadius: 2,
        width: 5,
        height: 10,
        backgroundColor: 'rgb(196,196,196)',
        marginHorizontal: 15,
    },
    fontSmall: {
        fontSize: 15,
    }
});
export default PlayCircuitWorkout;
