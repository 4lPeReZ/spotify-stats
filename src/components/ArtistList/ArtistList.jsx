// src/components/ArtistList.jsx
import React from 'react';
import './ArtistList.css'; // Asegúrate de tener tus estilos CSS

const ArtistList = ({ artists }) => {
  return (
    <div className="artist-list">
      <h1>Top Artists</h1>
      <ul className="no-bullets-artist">
        {artists.map((artist, index) => (
          <li key={index} className="artist-item">
            <span className="artist-position">{index + 1}.</span>
            {artist.images && artist.images[0] && (
              <img
                src={artist.images[0].url}
                alt={artist.name}
                className="artist-image"
              />
            )}
            <span className="artist-name">{artist.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
