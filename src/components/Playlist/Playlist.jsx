// src/components/Playlist.jsx
import React from 'react';
import './Playlist.css';

const Playlist = ({ playlists }) => {
  return (
    <div>
      <h1>Playlists</h1>
      <ul className="no-bullets-playlist">
        {playlists.map((playlist, index) => (
          <li key={index}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
