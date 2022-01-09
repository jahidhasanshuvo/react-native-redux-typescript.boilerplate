import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface UserProps {
  username: string;
}

export const initialState: UserProps = {
  username: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    editUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});
export const {editUsername} = userSlice.actions;
