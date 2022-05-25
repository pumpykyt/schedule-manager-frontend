import {configureStore} from "@reduxjs/toolkit";
import {authApi} from "../apis/authApi";
import {setupListeners} from "@reduxjs/toolkit/query";
import {authSlice} from '../slices/authSlice';
import {scheduleApi} from "../apis/scheduleApi";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        auth: authSlice.reducer,
        [scheduleApi.reducerPath]: scheduleApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(scheduleApi.middleware, authApi.middleware)
});

setupListeners(store.dispatch);