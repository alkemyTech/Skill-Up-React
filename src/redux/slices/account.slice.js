import { createSlice } from '@reduxjs/toolkit';

const accountSliceEmptyState = {
  informacion: null
};

const accountSlice = createSlice({
  name: 'account',
  initialState: accountSliceEmptyState,
  reducers: {
    setAccountInformation: (state, action) => {
      return {
        ...state,
        informacion: action.payload
      };
    }
  }
});

export const { setAccountInformation } = accountSlice.actions;
export default accountSlice.reducer;
