import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    isAdmin: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        setIsAdmin: (state, action) => {
            state.isAdmin = action.payload;
        }
    }
});

export const { setIsAuthenticated, setIsAdmin } = authSlice.actions;
export default authSlice.reducer;