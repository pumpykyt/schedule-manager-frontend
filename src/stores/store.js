import {configureStore} from "@reduxjs/toolkit";
import {authApi} from "../apis/authApi";
import {setupListeners} from "@reduxjs/toolkit/query";
import {authSlice} from '../slices/authSlice';
import {scheduleApi} from "../apis/scheduleApi";
import { groupApi } from "../apis/groupApi";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [scheduleApi.reducerPath]: scheduleApi.reducer,
        [groupApi.reducerPath]: groupApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
            scheduleApi.middleware, 
            authApi.middleware, 
            groupApi.middleware
        )
});

setupListeners(store.dispatch);