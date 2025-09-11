// src/pages/Home.js
import React from "react";
import "./index.css";
import Guitar from "../../assets/Guitar.png";

const Home = () => {
  const redirectWithLoading = (url) => {
    window.location.href = url;
  };

  // ✅ Detect query param "?app=true"
  const urlParams = new URLSearchParams(window.location.search);
  const isMobileApp = urlParams.get("app") === "true";

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

        {/* ✅ Button text changes depending on environment */}
        <a
          href="/app-debug.apk"
          style={{
            display: "inline-block",
            padding: "14px 28px",
            backgroundColor: "#216c27",
            color: "#fff",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "600",
            transition: "0.3s",
          }}
        >
          {isMobileApp
            ? "Update App"
            : "Download WILANSGUITAR App"}
        </a>
      </div>

      <div className="home-img">
        <img src={Guitar} alt="Guitar Background" />
      </div>
    </section>
  );
};

export default Home;
