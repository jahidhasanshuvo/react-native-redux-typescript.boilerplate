import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface UserProps {
  username: string;
  accessToken: string;
  refreshToken: string;
}

export const initialState: UserProps = {
  username: '',
  accessToken: '',
  refreshToken: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
  },
});
export const {setUsername, setAccessToken, setRefreshToken} = userSlice.actions;
