/* eslint-disable */
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API, graphqlOperation} from "aws-amplify";
import * as queries from "../graphql/queries";

const initialState = {
    profile: null,
    status: 'loading',
    liveWorkouts: []
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
                state.profile = action.payload;
                state.status = 'ready'
                state.liveWorkouts = action.payload ? action.payload.workouts.items.filter(item => item.isLive) : []
            });
    },
});

/**
 * Get the creator's data
 * @type {AsyncThunk<unknown, void, {}>}
 */
export const fetchCreatorProfile = createAsyncThunk("creatorProfile/get", async payload => {
    const {username} = payload;
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
});

export const selectCreator = state => state.creatorProfile.profile;

export const selectCreatorStatus = state => state.creatorProfile.status;

export const selectWorkout = state => state.creatorProfile.currentWorkout;

export const selectWorkouts = state => state.creatorProfile.liveWorkouts;

export const {workoutAdded} = creatorProfileSlice.actions;

export default creatorProfileSlice.reducer;
