"use client";

import { ThemeProvider } from "@/src/context/ThemeContext";
import { store } from "@/src/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Provider } from "react-redux";

const RECAPTCHAKEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHAKEY}>
          <ThemeProvider>{children}</ThemeProvider>
        </GoogleReCaptchaProvider>
      </QueryClientProvider>
    </Provider>
  );
}
