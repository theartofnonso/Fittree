/* eslint-disable */
import React, {useEffect, useState} from "react";
import PlayWorkout from "./PlayWorkout";
import workoutsConstants from "../../../utils/workout/workoutsConstants";

const PlayRepsSetsWorkout = ({workout, exercises, end}) => {

    const [exerciseDuration, setExerciseDuration] = useState(exercises[0][0].repsOrTimeValue);

    const [exerciseIndex, setExerciseIndex] = useState(0);

    const [setIndex, setSetIndex] = useState(0);

    const [showIntervalModal, setShowIntervalModal] = useState(true);

    const [intervalModalDescription, setIntervalModalDescription] = useState("Workout Starting");

    const [intervalModalTime, setIntervalModalTime] = useState(5000);

    const [paused, togglePaused] = useState(false);

    const [showWorkoutCompletedModal, setShowWorkoutCompletedModal] = useState(false)

    useEffect(() => {
        let intervalId = null;

        if (showIntervalModal) return;

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

        if (!isPlayMode()) {
            if (nextExerciseIndex < workout.workoutExercises.items.length) {
                setExerciseIndex(nextExerciseIndex);
                setExerciseDuration(getWorkoutExercise().repsOrTimeValue);
            }
            return;
        }

        if (nextSetIndex >= exercises[exerciseIndex].length) {
            if (nextExerciseIndex >= exercises.length) {
                setShowWorkoutCompletedModal(true);
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
            setExerciseDuration(getWorkoutExercise().repsOrTimeValue);
            setIntervalModalDescription(exercises[exerciseIndex][setIndex].exercise.title);
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

        if (!isPlayMode()) {
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
     * Pause workout
     */
    const pauseWorkout = () => {
        togglePaused(true);
    };

    /**
     * Play workout
     */
    const playWorkout = () => {
        togglePaused(false);
    };

    /**
     * Check if workout is in play mode
     * @returns {boolean}
     */
    const isPlayMode = () => true

    /**
     * Navigate to Fit
     */
    const navigateToExercisePreview = () => {
        if (isPlayMode()) {
            pauseWorkout();
        }
    };

    /**
     * Get the workoutFit
     */
    const getWorkoutExercise = () => exercises[exerciseIndex][setIndex];

    return (
        <PlayWorkout
            workoutExercise={getWorkoutExercise()}
            previewExercise={navigateToExercisePreview}
            seekForward={seekForward}
            seekBackward={seekBackward}
            play={playWorkout}
            pause={pauseWorkout}
            isPaused={paused}
            close={end}
            type={workoutsConstants.workoutType.REPS_SETS}
            extraData={{exerciseDuration, exerciseExtras: `Set ${setIndex + 1} of ${getWorkoutExercise().sets}`}}
            interval={{intervalModalTime, intervalModalDescription}}
            shouldPlayInterval={showIntervalModal}
            onFinishInterval={() => setShowIntervalModal(false)}
            onEnd={showWorkoutCompletedModal}/>
    );
};

export default PlayRepsSetsWorkout;
