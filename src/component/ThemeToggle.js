import React,{useContext,} from "react";

import {ThemeContext,} from "../context/ThemeContext";
import "./ThemeToggle.css";

function ThemeToggle() {

  const {darkMode,toggleTheme,} = useContext(ThemeContext);

  return (
    
    <button onClick={toggleTheme}>

      {darkMode
        ? "Light Mode"
        : "Dark Mode"}

    </button>
  
  );
}


export default ThemeToggle;