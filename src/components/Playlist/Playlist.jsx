// src/components/Playlist/Playlist.jsx
import React from 'react';

const Playlist = ({ playlist }) => {
  return (
    <div>
      <h3>{playlist.name}</h3>
      {/* Más detalles de la playlist si es necesario */}
    </div>
  );
};

export default Playlist;
