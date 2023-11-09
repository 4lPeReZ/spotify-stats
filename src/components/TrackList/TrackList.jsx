// src/components/TrackList/TrackList.jsx
import React from 'react';

const TrackList = ({ tracks }) => {
  return (
    <ul>
      {tracks.map((track, index) => (
        <li key={index}>{track.name}</li>
      ))}
    </ul>
  );
};

export default TrackList;
