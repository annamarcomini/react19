import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
 const [theme, setTheme] = useState("claro");

 const toggleTheme = () => {
  setTheme((prevTheme) => (prevTheme === "claro" ? "escuro" : "claro"));
 };
 
 return (<ThemeContext.Provider value={{theme, toggleTheme}}>
  {children}
 </ThemeContext.Provider>)
}

export { ThemeContext, ThemeProvider };