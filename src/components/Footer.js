// src/components/Footer.js
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Wilan Guitar </h3>
        <p>
          Your go-to app for guitar lyrics and chords.  
          Play, practice, and enjoy your favorite songs anytime!
        </p>

        <ul className="footer-links">
          <li><a href="/about">About</a></li>
          <li><a href="/songs">Songs</a></li>
          <li><a href="/favorite">Favorites</a></li>
        </ul>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} WILAN GUITAR. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
