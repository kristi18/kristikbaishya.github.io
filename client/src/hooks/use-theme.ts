import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

export function useThemeDetector() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    isDarkMode: mounted && (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)),
    theme,
    setTheme,
    toggleTheme,
    mounted
  };
}
