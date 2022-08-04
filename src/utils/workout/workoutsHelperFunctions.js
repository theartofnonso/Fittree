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
export const loadCircuitWorkout = (workout) => {
    let rounds = new Array(workout.rounds);
    for (let i = 0; i < rounds.length; i++) {
        rounds[i] = Array.from(workout.workoutExercises.items).sort((a, b) => a.index - b.index);
    }
    return rounds
};

/**
 * Load the exercises into the exercises array to play
 * @param workout
 */
export const loadRepsAndSetsWorkout = (workout) => {
    let exercises = new Array(workout.workoutExercises.items.length);
    const sortedWorkoutExercises = Array.from(workout.workoutExercises.items).sort((a, b) => a.index - b.index);
    for (let i = 0; i < exercises.length; i++) {
        const exercise = sortedWorkoutExercises[i];
        const sets = new Array(exercise.sets);
        for (let i = 0; i < sets.length; i++) {
            sets[i] = exercise;
        }
        exercises[i] = sets;
    }

    return exercises;
};

export const generateShareableLink = username => 'https://www.fittree.io/' + username;
