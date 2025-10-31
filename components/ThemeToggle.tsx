"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("theme") as "light" | "dark" | null;
      const preferred = stored ?? (document.documentElement.classList.contains("dark") ? "dark" : "light");
      setTheme(preferred);
      document.documentElement.classList.toggle("dark", preferred === "dark");
    } catch {}
  }, []);

  const toggleTheme = () => {
    const next = isDark ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed right-3 top-3 z-80 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm backdrop-blur transition-colors hover:bg-white/20 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/20"
    >
      {isDark ? (
        <div className="flex items-center gap-2 text-white">
          <Sun className="h-4 w-4" />
          <span className="hidden sm:inline">Light</span>
        </div>
      ) : (
        <div className="flex items-center gap-2 text-black">
          <Moon className="h-4 w-4" />
          <span className="hidden sm:inline">Dark</span>
        </div>
      )}
    </button>
  );
}


