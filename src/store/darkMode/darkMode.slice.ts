import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { DarkMode } from "./darkMode.types";
const initialState: DarkMode = {
    darkMode: false,
  };

export const darkModeSlice = createSlice({
    name:'darkMode',
    initialState,
    reducers: {
        toggleMode: (state) => {
        state.darkMode = !state.darkMode;
        },
    }
})