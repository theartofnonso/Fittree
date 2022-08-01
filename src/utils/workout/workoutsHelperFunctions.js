import workoutsConstants from './workoutsConstants';

/**
 * Display either Secs for Time values or Reps for count values
 * @param timeOrCount
 */
export const timeOrReps = timeOrCount =>
  timeOrCount === workoutsConstants.exerciseInfo.TIME
    ? workoutsConstants.exerciseInfo.duration.SECS
    : workoutsConstants.exerciseInfo.REPS;
