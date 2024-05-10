import { use } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function SwitchTheme() {
 const { theme, toggleTheme } = use(ThemeContext);

 return (
  <button onClick={toggleTheme}>
   Switch theme to {theme === "claro" ? "escuro" : "claro"}
  </button>
 );
};