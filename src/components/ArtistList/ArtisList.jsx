// src/components/ArtistList/ArtistList.jsx
import React from 'react';

const ArtistList = ({ artists }) => {
  return (
    <ul>
      {artists.map((artist, index) => (
        <li key={index}>{artist.name}</li>
      ))}
    </ul>
  );
};

export default ArtistList;
