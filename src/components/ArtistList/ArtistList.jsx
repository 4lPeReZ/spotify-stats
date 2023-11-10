// src/components/ArtistList.jsx
import React from 'react';
import ArtistListTopTracks from '../ArtistListTopTracks/ArtistListTopTracks';
import './ArtistList.css';

const ArtistList = ({ artists }) => {
  return (
    <div className="artist-list">
      <h1>Top Artists</h1>
      <ul className="no-bullets-artist">
        {artists.map((artist, index) => (
          <ArtistListTopTracks key={artist.id} artist={artist} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
