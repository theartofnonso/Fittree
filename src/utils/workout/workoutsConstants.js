/**
 * Timer for in workoutS
 * @type {{type: {REPS: string, DURATION: string}}}
 */
const exerciseInfo = {
  TIME: 'Time',
  COUNT: 'Count',
  duration: {
    MINS: 'Mins',
    SECS: 'Secs',
  },
  REPS: 'Reps',
};

/**
 * Messages displayed while playing a workout
 */
const playMessages = {
  WORKOUT_STARTING: 'Workout is Starting',
  NEXT_ROUND: 'Next Round',
  NEXT_SET: 'Next Set',
  NEXT_EXERCISE: 'Next Exercise',
};

/**
 * Workout type
 * @type {{REPS_SETS: string, CIRCUIT: string}}
 */
const workoutType = {
  CIRCUIT: 'CircuitWorkout',
  REPS_SETS: 'RepsAndSetsWorkout',
};

const profileStatus = {
  LOADING: 'Loading',
  READY: 'Ready',
  FAILED: 'Failed'
}

export default {
  exerciseInfo,
  workoutType,
  profileStatus,
  playMessages
};
