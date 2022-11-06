import { configureStore } from '@reduxjs/toolkit';
import creditReducer from '../features/credit/creditSlice';

export default configureStore({
	reducer: {
		credits: creditReducer,
	},
});
