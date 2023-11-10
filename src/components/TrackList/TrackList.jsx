// src/components/TrackList.jsx
import React from 'react';
import './TrackList.css'; // Asegúrate de tener tus estilos CSS

const TrackList = ({ tracks, onAudioPlay }) => {
  return (
    <div className="track-list">
      <h1>Top Tracks</h1>
      <ul className="no-bullets-tracks">
        {tracks.map((track, index) => (
          <li key={index} className="track-item">
            <span className="track-position">{index + 1}</span>
            <span className="track-info">
              {track.name} by {track.artists.map((artist) => artist.name).join(", ")}
            </span>
            {track.preview_url && (
              <audio controls src={track.preview_url} onPlay={(e) => onAudioPlay(e.target)} className="track-audio">
                Your browser does not support the audio element.
              </audio>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
