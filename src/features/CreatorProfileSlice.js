/* eslint-disable */
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API, graphqlOperation} from "aws-amplify";
import * as queries from "../graphql/queries";
import workoutsConstants from "../utils/workout/workoutsConstants";

const initialState = {
    profile: null,
    status: workoutsConstants.profileStatus.LOADING,
    liveWorkouts: [],
    exercises: []
};

const creatorProfileSlice = createSlice({
    name: 'creatorProfile',
    initialState,
    reducers: {
        workoutAdded: (state, action) => {
            state.currentWorkout = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCreatorProfile.fulfilled, (state, action) => {
                if(action.payload.status === workoutsConstants.profileStatus.FAILED) {
                    state.status = workoutsConstants.profileStatus.FAILED
                    state.profile = action.payload.profile;
                } else {
                    state.status = workoutsConstants.profileStatus.READY
                    state.profile = action.payload;
                    // Get their live workouts only
                    state.liveWorkouts = action.payload ? action.payload.workouts.items
                        .filter(item => item.isLive)
                        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)) : []
                    // Get all their exercises (it will be needed to load workouts)
                    state.exercises = action.payload ? action.payload.exercises.items : []
                }

            });
    },
});

/**
 * Get the creator's data
 * @type {AsyncThunk<unknown, void, {}>}
 */
export const fetchCreatorProfile = createAsyncThunk("creatorProfile/get", async (payload, { rejectWithValue }) => {
    const {username} = payload;

    try {
        const response = await API.graphql(graphqlOperation(queries.listCreators, {
                    filter: {
                        preferred_username: {
                            eq: username.trim(),
                        },
                    },
                },
            ),
        )
        const creators = response.data.listCreators.items
        return creators.length > 0 ? creators[0] : null
    } catch (err) {
        return rejectWithValue({
            profile: null,
            status: workoutsConstants.profileStatus.FAILED
        });
    }

});

export const selectCreator = state => state.creatorProfile.profile;

export const selectCreatorStatus = state => state.creatorProfile.status;

export const selectWorkout = state => state.creatorProfile.currentWorkout;

export const selectWorkouts = state => state.creatorProfile.liveWorkouts;

export const selectExercises = state => state.creatorProfile.exercises;

export const {workoutAdded} = creatorProfileSlice.actions;

export default creatorProfileSlice.reducer;
