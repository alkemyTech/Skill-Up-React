import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'src/features/auth/authSlice';
import creditReducer from 'src/features/credit/creditSlice';
import userReducer from 'src/features/users/userSlice';
import uiReducer from 'src/features/ui/uiSlice';

export default configureStore({
	reducer: {
		credits: creditReducer,
		user: userReducer,
		auth: authReducer,
		ui: uiReducer,
	},
});
