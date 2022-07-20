/* eslint-disable */
import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native-web";
import WIntervalModal from "./IntervalModal";
import WPauseModal from "./PauseModal";
import WorkoutCompletedModal from "./WorkoutCompletedModal";
import Entypo from "react-native-vector-icons/Entypo";
import {useMediaQuery} from "react-responsive";
import {Video} from "expo-av";

const REPS = "Reps";
const SECS = "Secs";

const PlayCircuitWorkout = props => {

    const isBigScreen = useMediaQuery({query: '(min-width: 700px)'})

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
        return rounds[roundsIndex][exerciseIndex];
    }

    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <View style={[isBigScreen ? styles.wrapper : styles.wrapperSmall]}>
                    <View style={styles.videoContainer}>
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
                    </View>
                    <View style={styles.playInfoContainer}>
                        {!paused ? <View style={styles.playBtnsContainer}>
                            <TouchableOpacity style={styles.playBtn} onPress={seekBackward}>
                                <Entypo
                                    name="controller-paus"
                                    size={28}
                                    color="#282828"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.playBtn} onPress={pauseWorkout}>
                                <Entypo
                                    name="controller-jump-to-start"
                                    size={28}
                                    color="#282828"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.playBtn} onPress={seekForward}>
                                <Entypo
                                    name="controller-next"
                                    size={28}
                                    color="#282828"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.playBtn} onPress={navigateToFitPreview}>
                                <Entypo name="info" size={20} color="#282828"/>
                            </TouchableOpacity>
                        </View> : null}
                        <Text style={styles.workoutFitTitle}>{getWorkoutFit().fit.title}</Text>
                        {getWorkoutFit().repsOrTime === SECS && <Text>{exerciseDuration / 1000}s</Text>}
                        {getWorkoutFit().repsOrTime === REPS && <Text>{getWorkoutFit().repsOrTimeValue} Reps</Text>}
                        <Text style={styles.fontSmall}>Round {roundsIndex + 1} of {workout.rounds}</Text>
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
                    navigateToWorkoutPreview={navigateBack} close={() => {
                    setShowWorkoutCompletedModal(false)
                    props.end()
                }}/> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        overflow: 'hidden',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container: {
        height: '100vh',
    },
    wrapper: {
        display: 'grid',
        gridTemplateColumns: '400px 350px',
        gridTemplateRows: '600px',
        backgroundColor: 'white',
        margin: 'auto',
        borderRadius: 8,
    },
    wrapperSmall: {
        display: 'grid',
        gridTemplateColumns: '300px',
        gridTemplateRows: '1fr 1fr',
        height: 500,
        backgroundColor: 'white',
        borderRadius: 8,
        margin: 'auto',
    },
    btnStyle: {
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: 40,
    },
    videoContainer: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        height: 300,
        overflow: 'hidden'
    },
    video: {
        height: 300,
    },
    playInfoContainer: {
        paddingTop: 10,
        paddingLeft: 10
    },
    workoutFitTitle: {
        fontFamily: "Days One",
        fontSize: 25,
    },
    playBtnsContainer: {
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 10
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
