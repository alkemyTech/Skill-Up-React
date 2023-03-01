import { createSlice } from '@reduxjs/toolkit';
import { clearLocalStorage, persistLocalStorage } from '../../utilities/localStorage.utility';

export const EmptyUserState = {
    account_id: null,
    email: '',
    is_locked: false,
    money: '',
    first_name: '',
    last_name: '',
    points: null,
    role_id: null,
    token: '',
    user_id: null
};

export const UserKey = 'user_wallet';

export const userSlice = createSlice({
    name: 'user',
    initialState: localStorage.getItem('user_wallet')
        ? JSON.parse(localStorage.getItem('user_wallet'))
        : EmptyUserState,
    reducers: {
        createUser: (state, action) => {
            persistLocalStorage(UserKey, action.payload);
            return action.payload;
        },
        updateUser: (state, action) => {
            const result = { ...state, ...action.payload };
            persistLocalStorage(UserKey, result);
            return result;
        },
        resetUser: () => {
            clearLocalStorage(UserKey);
            return EmptyUserState;
        }
    }
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
