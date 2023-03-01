import { createSlice } from '@reduxjs/toolkit';

export const InitialPageState = {
    isLoading: false
};

export const pageSlice = createSlice({
    name: 'page',
    initialState: InitialPageState,
    reducers: {
        updatePage: (state, action) => {
            const result = { ...state, ...action.payload };
            return result;
        }
    }
});

export const { updatePage } = pageSlice.actions;

export default pageSlice.reducer;
