import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() =>
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="theme-toggle-btn"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun className="theme-toggle-icon text-white" />
      ) : (
        <Moon className="theme-toggle-icon text-black" />
      )}
    </button>
  );
}

export default ThemeToggle;
