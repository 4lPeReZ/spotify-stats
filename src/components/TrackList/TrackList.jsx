import React, {useState, useEffect} from "react";
import "./TrackList.css";

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
}

const TrackCard = ({ track, index, onAudioPlay }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, (index * 0.15 + 0.5) * 1500); // El tiempo total de la animación

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`track-card ${isAnimating ? "fade-in" : ""}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {track.album.images[0] && (
        <img
          src={track.album.images[0].url}
          alt={track.name}
          className="track-image"
        />
      )}
      <div className="track-details">
        <span className="track-position">
          <a href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="track-name">
          {truncateText(`${index + 1}. ${track.name}`, 35)}
        </a>
        </span>
        <span className="track-artist">{track.artists[0].name}</span>
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
  );
};

const TrackList = ({ tracks, onAudioPlay }) => {
  return (
    <div className="track-list">
      <h1>Top Tracks</h1>
      <div className="track-card-container">
        {tracks.map((track, index) => (
          <TrackCard
            key={index}
            track={track}
            index={index}
            onAudioPlay={onAudioPlay}
          />
        ))}
      </div>
    </div>
  );
};

export default TrackList;
