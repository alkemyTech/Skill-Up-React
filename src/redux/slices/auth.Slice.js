import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'validando',
    errorMsg: undefined
  },
  reducers: {
    onChecking: (state) => {
      state.status = 'validando';
      state.errorMsg = undefined;
    },
    onLogin: (state, action) => {
      state.status = 'validado';
      state.errorMsg = undefined;
    },
    onLogout: (state, action) => {
        state.status = 'no-validado';
        state.errorMsg = action.payload;
  }
    }
});

export const { onChecking, onLogin, onLogout } = authSlice.actions;
