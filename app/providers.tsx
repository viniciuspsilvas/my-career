"use client";

import { ThemeProvider } from "@/src/context/ThemeContext";
import { store } from "@/src/redux/store";
import { Provider } from "react-redux";

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      {children}
      <ThemeProvider />
    </Provider>
  );
}
