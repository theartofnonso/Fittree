/**
 * Timer for a fit in workout
 * @type {{type: {REPS: string, DURATION: string}}}
 */
const timer = {
  type: {
    REPS: 'Reps',
    SECS: 'Secs',
    MINS: 'Mins',
  },
};
/**
 * Workout type
 * @type {{REPS_SETS: string, CIRCUIT: string}}
 */
const workoutType = {
  CIRCUIT: 'CircuitWorkout',
  REPS_SETS: 'RepsAndSetsWorkout',
};

export default {
  timer,
  workoutType,
};
