/* eslint-disable */

import workoutsConstants from './workoutsConstants';

/**
 * Display either Secs for Time values or Reps for count values
 * @param timeOrCount
 */
export const timeOrReps = timeOrCount =>
  timeOrCount === workoutsConstants.exerciseInfo.TIME
    ? workoutsConstants.exerciseInfo.duration.SECS
    : workoutsConstants.exerciseInfo.REPS;

/**
 * Load the exercises into the rounds array to play
 * @param workout
 */
export const loadCircuitWorkout = workout => {
    let rounds = new Array(workout.rounds);
    for (let i = 0; i < rounds.length; i++) {
        rounds[i] = workout.workoutExercises;
    }
    console.log(rounds)
    return rounds;
};

/**
 * Load the exercises into the exercises array to play
 * @param workout
 */
export const loadRepsAndSetsWorkout = workout => {
    let exercises = new Array(workout.workoutExercises.length);
    for (let i = 0; i < exercises.length; i++) {
        const exercise = workout.workoutExercises[i];
        const sets = new Array(exercise.sets);
        for (let j = 0; j < sets.length; j++) {
            sets[j] = exercise;
        }
        exercises[i] = sets;
    }
    return exercises;
};

/**
 * Sort out exercises
 * @param workout
 * @param exercises
 * @returns {any[]}
 */
export const sortWorkouts = (workout, exercises) =>
    Array.from(workout.workoutExercises)
        .map(workoutExerciseJSON => {
            const workoutExercise = JSON.parse(workoutExerciseJSON);
            const exercise = exercises.find(item => item.id === workoutExercise.exerciseId);
            if(exercise) {
                return { ...workoutExercise, exercise };
            } else {
                return null
            }
        })
        .filter(workoutExercise => workoutExercise !== null)
        .sort((a, b) => a.index - b.index);

export const generateShareableLink = username => 'https://www.fittree.io/' + username;
