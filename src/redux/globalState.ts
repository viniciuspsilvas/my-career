import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type ThemeMode = "light" | "dark" | "system";

export interface GlobalState {
  theme: ThemeMode;
  drawerOpened: boolean;
}

const initialState: GlobalState = {
  theme: "system",
  drawerOpened: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.theme = state.theme = action.payload;
    },
    toggleDrawer: (state) => {
      state.drawerOpened = !state.drawerOpened;
    },
  },
});

export const { toggleTheme, toggleDrawer } = globalSlice.actions;

export const selectTheme = (state: RootState) => state.global.theme;
export const isDrawerOpened = (state: RootState) => state.global.drawerOpened;

export default globalSlice.reducer;
