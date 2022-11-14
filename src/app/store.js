import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from 'src/features/auth/authSlice';
import creditReducer from 'src/features/credit/creditSlice';
import movementsReducer from 'src/features/movements/movementsSlice';
import uiReducer from 'src/features/ui/uiSlice';
import userReducer from 'src/features/users/userSlice';

const combinedReducers = combineReducers({
	credits: creditReducer,
	user: userReducer,
	auth: authReducer,
	ui: uiReducer,
	movements: movementsReducer,
});

const store = configureStore({
	reducer: (state, action) => {
		if (action.type === 'store/clean') {
			state = undefined;
		}
		return combinedReducers(state, action);
	},
});

export default store;
