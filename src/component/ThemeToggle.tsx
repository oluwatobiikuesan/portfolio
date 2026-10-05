import { useEffect, useState } from "react";
import Icon from "./Icon";

const LIGHT = "graphite";
const DARK = "graphite-dark";
const STORAGE_KEY = "theme";

function initialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === LIGHT || saved === DARK) return saved;
  } catch {
    // Storage can be unavailable (private mode); fall back to the system setting.
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? DARK : LIGHT;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignore: the theme still applies for this visit.
    }
  }, [theme]);

  const isDark = theme === DARK;

  return (
    <label className="swap swap-rotate btn btn-ghost btn-circle btn-sm" aria-label="Toggle colour theme">
      <input type="checkbox" checked={isDark} onChange={() => setTheme(isDark ? LIGHT : DARK)} />
      <Icon name="sun" className="swap-off size-[18px]" />
      <Icon name="moon" className="swap-on size-[18px]" />
    </label>
  );
}
