"use client";

import { createContext, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface ThemeContextType {
  theme: string;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = () => {
  const darkMode = useSelector((state: RootState) => state.global.darkMode);

  useEffect(
    () => {
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    [darkMode]
  );

  return null;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
