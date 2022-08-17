import {configureStore} from '@reduxjs/toolkit';

import creatorProfileReducer from '../src/features/CreatorProfileSlice';

export default configureStore({
    reducer: {
        creatorProfile: creatorProfileReducer,
    },
});
