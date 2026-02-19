import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.scss";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.body.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      className={`${styles.bulb} ${dark ? styles.on : ""}`}
      onClick={() => setDark(!dark)}
      aria-label="Toggle theme"
    >
      💡
    </button>
  );
}
