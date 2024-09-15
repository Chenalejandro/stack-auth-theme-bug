"use client";
import { useTheme } from "next-themes";

export default function ColorModeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle theme
    </button>
  );
}
