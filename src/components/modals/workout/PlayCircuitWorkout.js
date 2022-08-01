/* eslint-disable */
import React, {useEffect, useState} from "react";
import {View} from "react-native-web";
import PlayWorkout from "./PlayWorkout";
import workoutsConstants from "../../../utils/workout/workoutsConstants";

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
            rounds[i] = Array.from(workout.workoutExercises.items).sort((a, b) => a.index - b.index);
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
            if (nextExerciseIndex < workoutFromStore.workoutExercises.items.length) {
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
            setIntervalModalDescription(rounds[roundsIndex][nextExerciseIndex].exercise.title);
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

    // /**
    //  * Close the workout
    //  */
    // const closeWorkout = () => {
    //     setShowWorkoutCompletedModal(false)
    //     props.end()
    // }

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
    const navigateToExercisePreview = () => {
        if (isPlayMode()) {
            pauseWorkout();
        }
    };

    /**
     * Get the workoutExercise
     */
    const getWorkoutExercise = () => {
        return rounds[roundsIndex][exerciseIndex];
    }

    return (
        <PlayWorkout
            workoutExercise={getWorkoutExercise()}
            previewExercise={navigateToExercisePreview}
            seekForward={seekForward}
            seekBackward={seekBackward}
            play={playWorkout}
            pause={pauseWorkout}
            isPaused={paused}
            close={navigateBack}
            type={workoutsConstants.workoutType.CIRCUIT}
            extraData={{exerciseDuration, exerciseExtras: `Round ${roundsIndex + 1} of ${workout.rounds}`}}
            interval={{ intervalModalTime, intervalModalDescription }}
            shouldPlayInterval={showIntervalModal}
            onFinishInterval={() => setShowIntervalModal(false)}
            onEnd={showWorkoutCompletedModal}/>
        // <View style={styles.root}>
        //     <View style={styles.container}>
        //         {isBigScreen &&
        //             <TouchableOpacity style={styles.closeBtnStyle} onPress={() => closeWorkout()}>
        //                 <Entypo name="cross" size={32} color="white"/>
        //             </TouchableOpacity>
        //         }
        //         <View style={[getWrapperStyling()]}>
        //             {!isBigScreen &&
        //                 <View style={styles.navigationBar}>
        //                     <TouchableOpacity onPress={() => closeWorkout()}>
        //                         <Entypo name="cross" size={24} color="#282828"/>
        //                     </TouchableOpacity>
        //                     <TouchableOpacity style={styles.playBtn} onPress={navigateToFitPreview}>
        //                         <Ionicons name="information-circle-sharp" size={24} color="black"/>
        //                     </TouchableOpacity>
        //                 </View>
        //             }
        //             <View style={[isBigScreen ? styles.videoContainer : styles.videoContainerSmall]}>
        //                 <Video
        //                     style={[getVideoStyling()]}
        //                     source={{
        //                         uri: "https://" + getWorkoutFit().exercise.videoUrls[0],
        //                     }}
        //                     resizeMode="contain"
        //                     shouldPlay={true}
        //                     isLooping={true}
        //                     isMuted={true}
        //                     onLoad={() => setIsLoading(false)}
        //                 />
        //             </View>
        //             <View style={[isBigScreen ? styles.playInfoContainer : styles.playInfoContainerSmall]}>
        //                 {!paused ?
        //                     <View style={[isBigScreen ? styles.playBtnsContainer : styles.playBtnsContainerSmall]}>
        //                         <TouchableOpacity style={styles.playBtn} onPress={seekBackward}>
        //                             <Typography variant="body2"
        //                                         sx={{fontFamily: 'Montserrat', fontWeight: 500}}>Prev</Typography>
        //                         </TouchableOpacity>
        //                         <TouchableOpacity style={styles.playBtn} onPress={pauseWorkout}>
        //                             <Entypo
        //                                 name="controller-paus"
        //                                 size={24}
        //                                 color="#282828"
        //                             />
        //                         </TouchableOpacity>
        //                         <TouchableOpacity style={styles.playBtn} onPress={seekForward}>
        //                             <Typography variant="body2"
        //                                         sx={{fontFamily: 'Montserrat', fontWeight: 500}}>Next</Typography>
        //                         </TouchableOpacity>
        //                     </View> : null}
        //                 <View>
        //                     <ThemeProvider theme={responsiveFontTheme}>
        //                         <Typography variant="h6" sx={{
        //                             fontFamily: 'Montserrat',
        //                             fontWeight: 900
        //                         }}>{getWorkoutFit().exercise.title}</Typography>
        //                         <Typography variant="body2" sx={{
        //                             fontFamily: 'Montserrat',
        //                             fontWeight: 500
        //                         }}>Round {roundsIndex + 1} of {workout.rounds}</Typography>
        //                         {getWorkoutFit().repsOrTime === REPS ?
        //                             <Typography variant="body2" sx={{
        //                                 fontFamily: 'Montserrat',
        //                                 fontWeight: 500
        //                             }}>{getWorkoutFit().repsOrTimeValue} Reps</Typography> :
        //                             <Typography variant="body2" sx={{
        //                                 fontFamily: 'Montserrat',
        //                                 fontWeight: 500
        //                             }}>{exerciseDuration / 1000}s</Typography>
        //                         }
        //                     </ThemeProvider>
        //                 </View>
        //             </View>
        //         </View>
        //     </View>
        //     {paused ?
        //         <WPauseModal
        //             close={navigateBack}
        //             play={playWorkout}
        //         /> : null}
        //     {showIntervalModal ?
        //         <WIntervalModal
        //             description={intervalModalDescription}
        //             intervalTime={intervalModalTime}
        //             close={navigateBack}
        //             onFinish={() => setShowIntervalModal(false)}/> : null}
        //     {showWorkoutCompletedModal ?
        //         <WorkoutCompletedModal
        //             navigateToWorkoutPreview={navigateBack} close={closeWorkout}/> : null}
        // </View>
    );
};

export default PlayCircuitWorkout;
