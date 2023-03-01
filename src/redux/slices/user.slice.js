import { createSlice } from '@reduxjs/toolkit';

const userSliceEmptyState = {
    user: {
        first_name: '',
        last_name: '',
        email: '',
        id: undefined
    },
    acquisition: {
      balance: 0,
      payments: 0,
      topups: 0
    }
};

const userSlice = createSlice({
  name: 'user',
  initialState: userSliceEmptyState,
  reducers: {
    resetUserState: () => {
      return userSliceEmptyState;
    },
    setUser: (state, action) => {
      state.user.first_name = action.payload.data.first_name;
      state.user.last_name = action.payload.data.last_name;
      state.user.email = action.payload.data.email;
      state.user.id = action.payload.data.id;
    },
    setBalance: (state, action) => {
      return {
        ...state,
        acquisition: action.payload
      };
    }
  }
});

export const { resetUserState, setBalance, setUser } = userSlice.actions;
export default userSlice.reducer;
