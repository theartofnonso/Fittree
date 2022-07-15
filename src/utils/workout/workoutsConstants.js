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
 * Play or preview workout mode
 * @type {{PLAY: string, PREVIEW: string}}
 */
const playMode = {
  PLAY: 'PLAY',
  PREVIEW: 'PREVIEW',
};

/**
 * Intensity Levels
 * @type {{EASY: string, AVERAGE: string, HARD: string}}
 */
const intensityLevels = {
  EASY: 'EASY',
  AVERAGE: 'AVERAGE',
  HARD: 'HARD',
};

/**
 * Workout type
 * @type {{REPS_SETS: string, CIRCUIT: string}}
 */
const workoutType = {
  CIRCUIT: 'CircuitWorkout',
  REPS_SETS: 'RepsAndSetsWorkout',
  circuitInfo: {
    title: 'Circuit Workout',
    description: 'Create a workout with exercises grouped into rounds',
  },
  repsSetsInfo: {
    title: 'Reps and Sets Workout',
    description: ' Create a workout with exercises grouped into sets',
  },
};

const TABLE_NAME = 'Workout';

const notificationsMessage = {
  NEW_WORKOUT_MESSAGE: 'has released a new workout',
};

export default {
  timer,
  playMode,
  intensityLevels,
  workoutType,
  TABLE_NAME,
  notificationsMessage,
};
