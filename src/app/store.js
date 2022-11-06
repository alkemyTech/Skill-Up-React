import { configureStore } from '@reduxjs/toolkit';
import creditReducer from '../features/credit/creditSlice';
import userReducer from './../features/users/userSlice';

export default configureStore({
	reducer: {
		credits: creditReducer,
		user: userReducer,
	},
});

