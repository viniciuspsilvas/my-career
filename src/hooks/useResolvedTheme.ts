import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useGlobalState";

export const useResolvedTheme = () => {
  const { theme } = useTheme();
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (theme === "system") {
      const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const updateTheme = () => {
        setResolvedTheme(darkModeQuery.matches ? "dark" : "light");
      };

      updateTheme();
      darkModeQuery.addEventListener("change", updateTheme);

      return () => darkModeQuery.removeEventListener("change", updateTheme);
    } else {
      setResolvedTheme(theme);
    }
  }, [theme]);

  return resolvedTheme;
};