import {combineReducers} from '@reduxjs/toolkit';
import {userSlice} from './user/user.slice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
