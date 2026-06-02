import React, { useContext } from "react";

import { Link } from "react-router-dom";

import {
  ThemeContext,
} from "../context/ThemeContext";

function Navbar() {

  const {
    darkMode,
    toggleTheme,
  } = useContext(ThemeContext);

  return (

    <div className="navbar">

      {/* LOGO */}
      <div className="logo">
        <h2>🤖 AI Chatbot</h2>
      </div>

      {/* NAV LINKS */}
      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/login">Login</Link>

        <Link to="/register">Register</Link>

      <button
  className={`toggle-switch ${
    darkMode ? "active" : ""
  }`}
  onClick={toggleTheme}
>
  <div className="switch-circle"></div>

  <span className="switch-text">
    {darkMode ? "🌙" : "☀️"}
  </span>
</button>

      </div>

    </div>
  );
}

export default Navbar;