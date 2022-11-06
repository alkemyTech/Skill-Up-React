import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: {},
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserList: (state, action) => {
			state.user = action.payload;
		},
		clearUserList: (state) => {
			state.user = initialState.user;
		},
	},
});

export const { setUserList, clearUserList } = userSlice.actions;

export default userSlice.reducer;

