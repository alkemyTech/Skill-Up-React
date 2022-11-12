import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const cleanSlice = createSlice({
	name: 'store',
	initialState,
	reducers: {
		clean: () => ({}),
	},
});

export const cleanActions = cleanSlice.actions;

export default cleanSlice.reducer;
