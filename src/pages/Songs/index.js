import React, { useState } from "react";
import { songsData } from "../../data/songsData";
import "./index.css";

export default function Songs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSong, setSelectedSong] = useState(null);
  const [lyrics, setLyrics] = useState("");

  const filteredSongs = songsData.filter(
    (song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectSong = async (song) => {
    setSelectedSong(song);
    try {
      const response = await fetch(`/songs/lyrics/${song.file}`);
      const text = await response.text();
      setLyrics(text);
    } catch (err) {
      setLyrics("Lyrics not found.");
      console.error(err);
    }
  };

  return (
    <div className="songs-page">
      {!selectedSong ? (
        <>
          <h1 className="songs-title">Songs</h1>

          <input
            type="text"
            placeholder="Search songs..."
            className="songs-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <ul className="songs-list">
            {filteredSongs.map((song, index) => (
              <li key={index} className="song-item" onClick={() => handleSelectSong(song)}>
                <div className="song-card">
                  <img src={song.image} alt={song.title} className="song-image" />
                  <div className="song-info">
                    <h3>{song.title}</h3>
                    <p>{song.artist}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        // Full-screen lyrics view
        <div className="lyrics-screen">
            <button className="close-btn" onClick={() => setSelectedSong(null)}>
              ✕
            </button>
          <div className="lyrics-header">
            <div>
              <h1>{selectedSong.title}</h1>
              <h3>{selectedSong.artist}</h3>
            </div>

          </div>
          <pre className="lyrics">{lyrics}</pre>
        </div>
      )}
    </div>
  );
}
