import React, { useContext } from "react";
import { ThemeContext } from "../../Context/themeContext";
import "./footer.css";

function Footer() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="footer-container">
      <button
        className="footer-btn"
        onClick={() => {
          const newTheme = theme === "light" ? "dark" : "light";
          setTheme(newTheme);
        }}
      >
        Changer de mode
      </button>
    </div>
  );
}

export default Footer;
