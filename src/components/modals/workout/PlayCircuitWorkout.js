/* eslint-disable */
import React, {useEffect, useState} from "react";
import PlayWorkout from "./PlayWorkout";
import workoutsConstants from "../../../utils/workout/workoutsConstants";

const PlayCircuitWorkout = ({workout, rounds, end}) => {

    const [exerciseDuration, setExerciseDuration] = useState(rounds[0][0].repsOrTimeValue);

    const [roundsIndex, setRoundsIndex] = useState(0);

    const [exerciseIndex, setExerciseIndex] = useState(0);

    const [showIntervalModal, setShowIntervalModal] = useState(true);

    const [intervalModalDescription, setIntervalModalDescription] = useState(workoutsConstants.playMessages.WORKOUT_STARTING);

    const [intervalModalTime, setIntervalModalTime] = useState(5000);

    const [paused, togglePaused] = useState(false);

    const [showWorkoutCompletedModal, setShowWorkoutCompletedModal] = useState(false)

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
            if (nextExerciseIndex < workout.workoutExercises.items.length) {
                setExerciseIndex(nextExerciseIndex);
                setExerciseDuration(getWorkoutExercise().repsOrTimeValue);
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
                setIntervalModalDescription(workoutsConstants.playMessages.NEXT_ROUND);
                setIntervalModalTime(workout.roundsInterval);
                setShowIntervalModal(true);
            }
        } else {
            setExerciseIndex(nextExerciseIndex);
            setExerciseDuration(getWorkoutExercise().repsOrTimeValue);
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
    const getWorkoutExercise = () => rounds[roundsIndex][exerciseIndex];

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
            type={workoutsConstants.workoutType.CIRCUIT}
            extraData={{exerciseDuration, exerciseExtras: `Round ${roundsIndex + 1} of ${workout.rounds}`}}
            interval={{duration: intervalModalTime, description: intervalModalDescription}}
            shouldPlayInterval={showIntervalModal}
            onFinishInterval={() => {
                setShowIntervalModal(false)
                setIntervalModalDescription("")
            }}
            onEnd={showWorkoutCompletedModal}/>
    );
};

export default PlayCircuitWorkout;
