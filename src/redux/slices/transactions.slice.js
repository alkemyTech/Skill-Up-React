import { createSlice } from '@reduxjs/toolkit';

const transactionsSliceEmptyState = {
  transactions: [],
  nextPage: false,
  loading: false
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: transactionsSliceEmptyState,
  reducers: {
    resetTransactionsState: () => {
      return transactionsSliceEmptyState;
    },
    setTransactions: (state, action) => {
      return {
        ...state,
        transactions: action.payload
      };
    },
    setPage: (state, action) => {
      return {
        ...state,
        nextPage: action.payload
      };
    },
    setLoadingOn: (state) => {
      return {
        ...state,
        loading: true
      };
    },
    setLoadingOff: (state) => {
      return {
        ...state,
        loading: false
      };
    }
  }
});

export const { setTransactions, setPage, setLoadingOff, setLoadingOn } = transactionsSlice.actions;
export default transactionsSlice.reducer;
