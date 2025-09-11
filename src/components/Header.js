import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "boxicons/css/boxicons.min.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, setClickCount] = useState(0);
  const clickTimeout = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Handle profile click (5 taps to open login)
  const handleProfileClick = () => {
    setClickCount((prev) => {
      const newCount = prev + 1;

      if (newCount === 5) {
        alert("Login success 🚀"); // Replace with actual login logic
        closeMenu(); // ✅ close navbar only after 5 clicks
        return 0;
      }

      // Reset count after 300ms of inactivity
      clearTimeout(clickTimeout.current);
      clickTimeout.current = setTimeout(() => setClickCount(0), 300);

      return newCount;
    });
  };

  // Close menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${menuOpen ? "active" : ""}`}>
<Link to="/" className="logo" onClick={closeMenu}>
  <img src="/images/logo.png" alt="WilaN Guitar Logo" className="logo-img"  />
  
</Link>


      {/* Menu icon */}
      <div
        id="menu-icon"
        className={`bx ${menuOpen ? "bx-x" : "bx-menu"}`}
        onClick={toggleMenu}
      ></div>

      {/* Navbar */}
      <ul className={`navbar ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>home</Link>
        </li>
        <li>
          <Link to="/songs" onClick={closeMenu}>songs</Link>
        </li>
        <li>
          <Link to="/chords" onClick={closeMenu}>chords</Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>about</Link>
        </li>
        <li>
          <Link to="/favorite" onClick={closeMenu}>favorite</Link>
        </li>
<li className="login">
          <Link  to="/login" onClick={closeMenu}>login</Link>
        </li>       
        <li className="ad">
          <span
            id="loginButton"
            onClick={handleProfileClick}
            style={{ cursor: "pointer" }}
          >
            <i className="bx bxs-user-circle"></i>
          </span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
