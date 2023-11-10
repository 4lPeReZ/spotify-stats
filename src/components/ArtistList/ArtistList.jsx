// src/components/ArtistList.jsx
import React from 'react';
import './ArtistList.css';

const ArtistList = ({ artists }) => {
  return (
    <div>
      <h1>Top Artists</h1>
      <ul className="no-bullets-artist">
        {artists.map((artist, index) => (
          <li key={index}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
