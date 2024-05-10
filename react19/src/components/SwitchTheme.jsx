import { use } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function SwitchTheme() {
 const { theme, toggleTheme } = use(ThemeContext);

  const handleThemeChange = () => {
    toggleTheme()
  }
 return (
  <button onClick={handleThemeChange}>
   Switch theme to {theme === "light" ? "dark" : "light"}
  </button>
 );
};