/* eslint-disable */
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API, graphqlOperation} from "aws-amplify";
import * as queries from "../graphql/queries";

const initialState = {
    profile: null,
    currentWorkout: {"id":"aeeb2fd7-8434-4101-9330-320c973f2dd9","creatorId":"29a0538a-991f-4a8b-a82e-d0c90e4c1d47","preferred_username":"oiio","title":"Workout 1","description":"A workout one","intensityLevel":"AVERAGE","bodyParts":["Arms","Hamstrings"],"equipments":["Elliptical Machine","Stationary Bike","Stair Climber","Climber"],"rounds":2,"roundsInterval":2000,"exerciseInterval":3000,"setsInterval":null,"thumbnailUrl":"d26u7w064jxl38.cloudfront.net/public/fitpin-public/fitpin_workout_thumbnail_01.jpg","workoutFits":{"items":[{"id":"024f94e6-7d1b-4d1c-91ef-8e660d8ffbfa","fitId":"459a6d13-d94e-4843-82e6-86aeb0142a75","workoutId":"aeeb2fd7-8434-4101-9330-320c973f2dd9","fit":{"id":"459a6d13-d94e-4843-82e6-86aeb0142a75","creatorId":"29a0538a-991f-4a8b-a82e-d0c90e4c1d47","title":"Hunter","description":"Having all those emotions come up a aonce","bodyParts":["Arms","Hamstrings"],"equipments":[],"videoUrls":["d26u7w064jxl38.cloudfront.net/public/Videos/CyBBHn143W48BZRtyf0saqmC35cizlc0Y788ohtI4qFCRK0R44.mp4","d26u7w064jxl38.cloudfront.net/public/Videos/Zi3es91iLqjmn5Wu184SydEd43K3193W8gd5e91aTEWxme4YE9.mp4"],"workoutFits":{"nextToken":null},"type":"Fit","createdAt":"2022-04-09T20:10:30.973Z","updatedAt":"2022-04-10T19:31:53.003Z","owner":"slimbion@gmail.com"},"repsOrTime":"Secs","repsOrTimeValue":4000,"sets":0,"index":2,"createdAt":"2022-04-15T23:09:06.944Z","updatedAt":"2022-04-15T23:09:06.944Z","owner":"slimbion@gmail.com"},{"id":"a76136b5-3806-42c6-913c-5125ecc406cf","fitId":"f884ef58-8174-4f58-934a-5724761df647","workoutId":"aeeb2fd7-8434-4101-9330-320c973f2dd9","fit":{"id":"f884ef58-8174-4f58-934a-5724761df647","creatorId":"29a0538a-991f-4a8b-a82e-d0c90e4c1d47","title":"Uncomfortable Enya","description":"I took me so long to say yes to Hunter","bodyParts":["Core","Shoulders"],"equipments":["Rowing Machine","Treadmill","Cross Trainer","Stationary Bike"],"videoUrls":["d26u7w064jxl38.cloudfront.net/public/Videos/cm8yP5e4M1kgUbMRcv3En7TF7uNv5H9JK5L6ana47fcP6ea33z.mp4","d26u7w064jxl38.cloudfront.net/public/Videos/dLP35SCdbcchTZfJka25GAcngd6wQSc3Z55U5a6b942Sy3u275.mp4"],"workoutFits":{"nextToken":null},"type":"Fit","createdAt":"2022-04-09T20:11:52.491Z","updatedAt":"2022-04-10T19:28:44.917Z","owner":"slimbion@gmail.com"},"repsOrTime":"Secs","repsOrTimeValue":4000,"sets":0,"index":1,"createdAt":"2022-04-15T23:09:06.938Z","updatedAt":"2022-04-15T23:09:06.938Z","owner":"slimbion@gmail.com"},{"id":"adcefb41-d67a-4bce-9c7f-3fc5348f5e7a","fitId":"02f574cd-e862-4d20-a752-753d03fecbbe","workoutId":"aeeb2fd7-8434-4101-9330-320c973f2dd9","fit":{"id":"02f574cd-e862-4d20-a752-753d03fecbbe","creatorId":"29a0538a-991f-4a8b-a82e-d0c90e4c1d47","title":"Come A Little Closer","description":"Doris come seat, you know I love coming ou here","bodyParts":["Arms","Glutes"],"equipments":["Treadmill","Cross Trainer","Stationary Bike","Spin Bike"],"videoUrls":["d26u7w064jxl38.cloudfront.net/public/Videos/0014E1fgx5ldq7bDZScN4ebtXof9s1j3DWf143T93x3nQ6647B.mp4","d26u7w064jxl38.cloudfront.net/public/Videos/gc3083M4M3t9E8O1b5u3dfO3xHGWT8BfaRpWbG6e4vwGcyWf2u.mp4","d26u7w064jxl38.cloudfront.net/public/Videos/webeq7s1aqcZ3zaaaegBJp3C8s2e49xq74lT0E6X49lAb32boy.mp4"],"workoutFits":{"nextToken":null},"type":"Fit","createdAt":"2022-04-13T15:23:50.032Z","updatedAt":"2022-04-13T15:23:50.032Z","owner":"slimbion@gmail.com"},"repsOrTime":"Secs","repsOrTimeValue":4000,"sets":0,"index":0,"createdAt":"2022-04-15T23:09:06.933Z","updatedAt":"2022-04-15T23:09:06.933Z","owner":"slimbion@gmail.com"}],"nextToken":null},"type":"CircuitWorkout","isLive":false,"createdAt":"2022-04-15T23:09:05.915Z","updatedAt":"2022-04-16T11:33:34.261Z","owner":"slimbion@gmail.com"}
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
            });
    },
});

/**
 * Get the creator's data
 * @type {AsyncThunk<unknown, void, {}>}
 */
export const fetchCreatorProfile = createAsyncThunk("creatorProfile/get", async payload => {
    const {username} = payload;
    console.log(username)
    const response = await API.graphql(graphqlOperation(queries.listCreators, {
                filter: {
                    preferred_username: {
                        eq: username.trim(),
                    },
                },
            },
        ),
    ).catch(err => console.log(err))
    console.log(response)
    const creators = response.data.listCreators.items
    return creators.length > 0 ? creators[0] : null
});

export const selectCreator = state => state.creatorProfile.profile;

export const selectWorkout = state => state.creatorProfile.currentWorkout;

export const {workoutAdded} = creatorProfileSlice.actions;

export default creatorProfileSlice.reducer;
