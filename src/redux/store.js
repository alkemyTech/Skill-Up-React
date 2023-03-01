import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user.slice';
import accountSlice from './slices/account.slice';
import transactionsSlice from './slices/transactions.slice';
import { authSlice } from './slices/auth.Slice';

const rootReducer = combineReducers({
  accountSlice,
  transactionsSlice
});

const store = configureStore({
  reducer: {
    rootReducer,
    auth: authSlice.reducer,
    transactions: transactionsSlice,
    user: userSlice,
    account: accountSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;
