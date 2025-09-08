import React from "react";
import "./index.css";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h1>About Wilan Guitar</h1>
        <p>
          Wilan Guitar is a simple web app that provides lyrics and chords for
          your favorite songs. Whether you are just starting to learn or already
          playing like a pro, this platform helps you play along easily and enjoy
          music anytime.
        </p>

        <p>
          Features include browsing songs, viewing chords, saving favorites, and
          exploring new music. Our goal is to make guitar playing fun and
          accessible for everyone.
        </p>

        <div className="about-footer">
          <h3>Created by Kent Wilan Fegarido © 2024</h3>
        </div>
      </div>
    </section>
  );
}
