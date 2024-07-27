import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    spinner: false,
};

let spinnerSlice = createSlice({
    name: "spinner",
    initialState,
    reducers: {
        setSpinner: (state, action) => {
            state.spinner = action.payload;
        },
    },
});

export const { setSpinner, resetSpinner } = spinnerSlice.actions;
export default spinnerSlice.reducer;