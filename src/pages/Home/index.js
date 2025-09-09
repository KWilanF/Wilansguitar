// src/pages/Home.js
import React from "react";
import "./index.css"; // We'll move your CSS here
import logo from "../../assets/logo.png"

const Home = () => {
  const redirectWithLoading = (url) => {
    // Optional: add loading screen later if you want
    window.location.href = url;
  };

  return (
    <section className="home" id="home">
      <div className="home-text">
        <span>Welcome To</span>
        <h1>
          Wilan Guitar <br /> Lyrics & Chords
        </h1>
        <h2>
          Feel free to Play <br /> your favorite songs
        </h2>
        <button className="btn" onClick={() => redirectWithLoading("/songs")}>
          Play Now
        </button>
<a
        href="/app-debug.apk"
        style={{
          display: "inline-block",
          padding: "14px 28px",
          backgroundColor: "#3b82f6",
          color: "#fff",
          borderRadius: "10px",
          textDecoration: "none",
          fontSize: "16px",
          fontWeight: "600",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}
      >
        📥 Download WILANSGUITAR App
      </a>
      </div>
      <div className="home-img">
        <img src={logo} alt="Guitar Background" />
      </div>
    </section>
  );
};

export default Home;
