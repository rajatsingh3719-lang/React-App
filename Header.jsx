import React, { useState } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <h1>Nocturnal Animals</h1>
      <button onClick={toggleTheme}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}

export default Header;
