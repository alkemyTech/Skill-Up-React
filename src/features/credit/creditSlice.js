import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    creditsAvailable: 10
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addCredit: (state, action) => {
            state.creditsAvailable += action.payload
        }
    }
});

// this is for dispatch
export const { addCredit } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;