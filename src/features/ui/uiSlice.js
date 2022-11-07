import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isSpinnerActive: false,
};

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		showSpiner: (state) => {
			state.isSpinnerActive = true;
		},
		hideSpiner: (state) => {
			state.isSpinnerActive = false;
		},
	},
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
