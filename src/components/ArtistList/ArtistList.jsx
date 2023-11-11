// src/components/ArtistList.jsx
import React from "react";
import "./ArtistList.css";

const ArtistList = ({ artists }) => {
  // No hay cambios en la lógica de división del array de artistas
  const podiumArtists = artists.slice(0, 3);
  const otherArtists = artists.slice(3);

  return (
    <div className="artist-list-container">
      <h1>Top Artists</h1>

      {/* Podio para los tres primeros artistas */}
      <div className="podium">
        {podiumArtists.map((artist, index) => (
          <div key={artist.id} className={`podium-place place-${index}`}>
            {artist.images && artist.images[0] && (
              <img
                src={artist.images[0].url}
                alt={artist.name}
                className="artist-image"
              />
            )}
            <span className="artist-name">{artist.name}</span>
            <span className="podium-number">{index + 1}</span>
          </div>
        ))}
      </div>

      {/* Lista para el resto de artistas */}
      <ol className="other-artists">
        {otherArtists.map((artist, index) => (
          <li key={artist.id} className="artist-item">
            <span className="artist-position">{index + 4}.</span>
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
      </ol>
    </div>
  );
};

export default ArtistList;
