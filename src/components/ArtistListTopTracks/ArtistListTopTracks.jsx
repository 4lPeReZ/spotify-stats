// src/components/ArtistListTopTracks/ArtistListTopTracks.jsx
import React, { useState } from 'react';
import useArtistTopTracks from '../../hooks/useArtistTopTracks';

const ArtistListTopTracks = ({ artist, index }) => {
  const [showTopTracks, setShowTopTracks] = useState(false);
  const { topTracks, loading, error } = useArtistTopTracks(showTopTracks ? artist.id : null);

  return (
    <li className="artist-item">
      <span className="artist-position">{index + 1}.</span>
      {artist.images && artist.images[0] && (
        <img src={artist.images[0].url} alt={artist.name} className="artist-image" />
      )}
      <span className="artist-name">{artist.name}</span>
      <button onClick={() => setShowTopTracks(!showTopTracks)}>Show Top Tracks</button>
      {showTopTracks && (
        <ul>
          {loading && <li>Loading...</li>}
          {error && <li>Error loading tracks</li>}
          {topTracks.map((track, index) => (
            <li key={index}>{track.name}</li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default ArtistListTopTracks;
