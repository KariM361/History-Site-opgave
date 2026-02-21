import { useEffect, useState } from "react";
import style from "./ThemeToggle.module.scss";
import bulb from "../../assets/bulb.png";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    const newMode = !dark;
    setDark(newMode);

    document.body.classList.toggle("dark", newMode);
  }

  return (
    <img
      src={bulb}
      className={style.bulb}
      onClick={toggleTheme}
      alt="theme toggle"
    />
  );
}