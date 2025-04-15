import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={toggleTheme}
      className="ml-4 p-2 rounded transition hover:bg-gray-700"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
