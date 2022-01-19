import React, { createContext, useState, useEffect } from "react";
export const ThemeContext = createContext();
const ThemeContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("DarkTheme") !== null) {
      setDarkTheme(JSON.parse(window.localStorage.getItem("DarkTheme")));
    }
  }, []);

  useEffect(() => {
    if (darkTheme === true) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }

    window.localStorage.setItem("DarkTheme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  const data = {
    darkTheme,
    setDarkTheme,
  };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
export default ThemeContextProvider;
