import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: 'kminchelle',
  password: '0lelplR',
  error: '',
  showPassword: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setShowPassword(state, action) {
      state.showPassword = action.payload;
    },
  },
});

export const { setUsername, setPassword, setError, setShowPassword } = authSlice.actions;

export default authSlice.reducer;
