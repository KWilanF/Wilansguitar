import React, { useEffect, useState } from "react";
import "./index.css";
import Guitar from "../../assets/Guitar.png";

const Home = () => {
  const [isWebView, setIsWebView] = useState(false);

  useEffect(() => {
    // Detect if app is running inside WebView
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (
      userAgent.includes("wv") || // Android WebView
      userAgent.includes("WebView") // iOS WebView
    ) {
      setIsWebView(true);
    }
  }, []);

  const redirectWithLoading = (url) => {
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

        {/* Show this only if NOT inside WebView */}
        {!isWebView && (
          <a
            href="/app-release.apk"
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
            Download WILANSGUITAR App
          </a>
        )}
      </div>

      <div className="home-img">
        <img src={Guitar} alt="Guitar Background" />
      </div>
    </section>
  );
};

export default Home;
