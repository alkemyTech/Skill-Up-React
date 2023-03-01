import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { userSlice } from './states/user';
import { pageSlice } from './states/page';
import { dataApi } from '../services/dataApi';

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        page: pageSlice.reducer,
        [dataApi.reducerPath]: dataApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dataApi.middleware)
});

setupListeners(store.dispatch);
