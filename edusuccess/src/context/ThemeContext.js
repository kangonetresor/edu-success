import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Récupérer l'état du mode nuit depuis localStorage
    const savedTheme = localStorage.getItem("dark-mode");
    return savedTheme === "true";
  });

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Mettre à jour le thème dans localStorage et dans la classe body
    localStorage.setItem("dark-mode", isDarkMode);
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
