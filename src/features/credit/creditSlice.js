import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	creditsAvailable: 10,
};

export const creditSlice = createSlice({
	name: 'credit',
	initialState,
	reducers: {
		addCredit: (state, action) => {
			state.creditsAvailable += action.payload;
		},
		clearCredit: (state) => {
			state.creditsAvailable = initialState.creditsAvailable;
		},
	},
});

export const { addCredit, clearCredit } = creditSlice.actions;

export default creditSlice.reducer;
