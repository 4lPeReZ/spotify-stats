// src/components/ArtistListTopTracks/ArtistListTopTracks.jsx
import React, { useState } from 'react';
import useArtistTopTracks from '../../hooks/useArtistTopTracks';
import './ArtistListTopTracks.css';

const ArtistListTopTracks = ({ artist }) => {
  const [showTopTracks, setShowTopTracks] = useState(false);
  const { topTracks, loading, error } = useArtistTopTracks(showTopTracks ? artist.id : null);

  return (
    <div className="artist-item">
      {artist.images && artist.images[0] && (
        <img src={artist.images[0].url} alt={artist.name} className="artist-image" />
      )}
      <span className="artist-name">{artist.name}</span>
      <button onClick={() => setShowTopTracks(!showTopTracks)}>Show Top Tracks</button>
      {showTopTracks && (
        <div>
          {loading && <span>Loading...</span>}
          {error && <span>Error loading tracks</span>}
          {topTracks && topTracks.map((track, index) => (
            <div key={index}>{track.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArtistListTopTracks;
