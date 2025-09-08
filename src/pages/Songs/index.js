import React, { useState } from "react";
import "./index.css";

// Example song data
const songsData = [
  { title: "Shape of You", artist: "Ed Sheeran", lyrics: "Lyrics for Shape of You..." },
  { title: "Someone Like You", artist: "Adele", lyrics: "Lyrics for Someone Like You..." },
  { title: "Perfect", artist: "Ed Sheeran", lyrics: "Lyrics for Perfect..." },
  { title: "Hello", artist: "Adele", lyrics: "Lyrics for Hello..." },
  // Add more songs here
];

export default function Songs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSong, setSelectedSong] = useState(null);

  // Filter songs based on search
  const filteredSongs = songsData.filter(
    (song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="songs-page">
      <h1 className="songs-title">Songs</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search songs..."
        className="songs-search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Song list */}
      {!selectedSong && (
        <ul className="songs-list">
          {filteredSongs.map((song, index) => (
            <li key={index} onClick={() => setSelectedSong(song)}>
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Selected song details */}
      {selectedSong && (
        <div className="song-details">
          <button className="back-btn" onClick={() => setSelectedSong(null)}>
            ← Back
          </button>
          <h2>{selectedSong.title}</h2>
          <h3>{selectedSong.artist}</h3>
          <pre className="lyrics">{selectedSong.lyrics}</pre>
        </div>
      )}
    </div>
  );
}
