"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../redux/globalState";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSelector(selectTheme);

  useEffect(() => {
    const applyTheme = (isDark: boolean) => {
      document.documentElement.classList.toggle("dark", isDark);
    };

    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      if (theme === "system") {
        applyTheme(event.matches);
      }
    };

    // Aplicar o tema inicial
    if (theme === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      applyTheme(prefersDark);
    } else {
      applyTheme(theme === "dark");
    }

    // Adicionar listener para mudanças no tema do sistema
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    // Remover listener ao desmontar o componente
    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]);

  return <>{children}</>;
}
