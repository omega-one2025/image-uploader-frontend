import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface AuthState {
  access_token: string;
  refresh_token: string;
}

// Define the initial state using that type
const initialState: AuthState = {
  access_token: '',
  refresh_token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.access_token = action.payload;
    },
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { setAccessToken } = authSlice.actions;
export default authSlice.reducer;
