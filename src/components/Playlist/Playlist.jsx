// src/components/Playlist.jsx
import React, { useState, useEffect } from 'react';
import './Playlist.css';

const PlaylistCard = ({ playlist, index }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, (index * 0.15 + 0.5) * 1500); // El tiempo total de la animación

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`playlist-card ${isAnimating ? "fade-in" : ""}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="playlist-image">
        <img
          src={playlist.images?.[0]?.url || "default-placeholder-image.jpg"}
          alt={playlist.name}
        />
      </div>
      <div className="playlist-details">
        <span className="playlist-position">{index + 1}</span>
        {/* Agregar un enlace al nombre de la playlist */}
        <a href={playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="playlist-name">
          {playlist.name}
        </a>
      </div>
    </div>
  );
};

const Playlist = ({ playlists }) => {
  return (
    <div className="playlist-list-container">
      <h1>Playlists</h1>
      <div className="playlist-card-container">
        {playlists.map((playlist, index) => (
          <PlaylistCard key={index} playlist={playlist} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
