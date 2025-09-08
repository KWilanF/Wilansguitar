import React, { useState } from "react";
import "./index.css";
import C from "../../assets/chords/C.jpg";
import Cm from "../../assets/chords/Cm.jpg";
import D from "../../assets/chords/D.jpg";
import Dm from "../../assets/chords/Dm.jpg";
import E from "../../assets/chords/E.jpg";
import Em from "../../assets/chords/Em.jpg";
import A from "../../assets/chords/A.jpg";
import Am from "../../assets/chords/Am.jpg";
import B from "../../assets/chords/B.jpg";
import Bm from "../../assets/chords/Bm.jpg";
import F from "../../assets/chords/F.jpg";
import Fm from "../../assets/chords/Fm.jpg";
import G from "../../assets/chords/G.jpg";
import Gm from "../../assets/chords/Gm.jpg";

// Data structure
const chordsData = {
  C: [
    { type: "Major", image: C },
    { type: "Minor", image: Cm },
  ],
  A: [
    { type: "Major", image: A },
    { type: "Minor", image: Am },
  ],
  G: [
    { type: "Major", image: G },
    { type: "Minor", image: Gm },
  ],
  E: [
    { type: "Major", image: E },
    { type: "Minor", image: Em },
  ],
  D: [
    { type: "Major", image: D },
    { type: "Minor", image: Dm },
  ],
  F: [
    { type: "Major", image: F },
    { type: "Minor", image: Fm },
  ],
  B: [
    { type: "Major", image: B },
    { type: "Minor", image: Bm },
  ],
};

export default function Chords() {
  const [selectedChord, setSelectedChord] = useState(null);

  return (
    <div className="chords-page">
      <h1 className="chords-title">Guitar Chords</h1>

      {/* Main chords list */}
      <div className="main-chords">
        {Object.keys(chordsData).map((chord) => (
          <button
            key={chord}
            className={`main-chord-btn ${
              selectedChord === chord ? "active" : ""
            }`}
            onClick={() => setSelectedChord(chord)}
          >
            {chord}
          </button>
        ))}
      </div>

      {/* Selected chord variations */}
      {selectedChord && (
        <section className="chord-variations">
          <h2>{selectedChord} Chords</h2>
          <div className="chords-grid">
            {chordsData[selectedChord].map((variation, index) => (
              <div key={index} className="chord-card">
                <img src={variation.image} alt={`${selectedChord} ${variation.type}`} />
                <p>{variation.type}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
