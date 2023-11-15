import React from "react";
import "./TrackList.css";

const TrackList = ({ tracks, onAudioPlay }) => {
  return (
    <div className="track-list">
      <h1>Top Tracks</h1>
      <div className="track-card-container">
        {tracks.map((track, index) => (
          <div key={index} className="track-card">
            {track.album.images[0] && (
              <img
                src={track.album.images[0].url}
                alt={track.name}
                className="track-image"
              />
            )}
            <div className="track-details">
              <span className="track-position">
                {index + 1}. {track.name}
              </span>
              <span className="track-artist">
                {track.artists[0].name}
              </span>
              {track.preview_url && (
                <audio
                  controls
                  src={track.preview_url}
                  onPlay={(e) => onAudioPlay(e.target)}
                  className="track-audio"
                >
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackList;
