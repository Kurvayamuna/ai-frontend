import {
  createContext,
  useState,
  useEffect,
} from "react";

export const ThemeContext =
  createContext();

export const ThemeProvider = ({
  children,
}) => {

  const [darkMode, setDarkMode] =
    useState(false);

  // TOGGLE THEME
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  // ADD / REMOVE BODY CLASS
  useEffect(() => {

    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};