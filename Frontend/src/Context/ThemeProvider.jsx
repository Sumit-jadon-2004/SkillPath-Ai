import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.className = "dark";
      setMode(true);
    } else {
      document.body.className = "light";
      setMode(false);
    }
  }, []);

  const toggleMode = () => {
    const newMode = !mode;
    setMode(newMode);

    document.body.className = newMode ? "dark" : "light";
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;