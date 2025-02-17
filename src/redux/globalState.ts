import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "./store";

export interface GlobalState {
  darkMode: boolean;
  drawerOpened: boolean;
}

const initialState: GlobalState = {
  darkMode: false,
  drawerOpened: false
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    toggleDrawer: (state) => {
      state.drawerOpened = !state.drawerOpened;
    }
  }
});

export const { toggleDarkMode, toggleDrawer } = globalSlice.actions;

export const isDarkMode = (state: RootState) => state.global.darkMode;

export const isDrawerOpened = (state: RootState) => state.global.drawerOpened;

export default globalSlice.reducer;
