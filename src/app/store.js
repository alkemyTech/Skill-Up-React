import { configureStore } from '@reduxjs/toolkit';
import creditReducer from 'src/features/credit/creditSlice';
import userReducer from 'src/features/users/userSlice';

export default configureStore({
	reducer: {
		credits: creditReducer,
		user: userReducer,
	},
});
