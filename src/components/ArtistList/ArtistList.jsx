// src/components/ArtistList.jsx
import React, { useState, useEffect } from "react";
import "./ArtistList.css";

const ArtistCard = ({ artist, index }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, (index * 0.15 + 0.5) * 1500); // El tiempo total de la animación

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`artist-card ${isAnimating ? "fade-in" : ""}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="artist-image">
        <img
          src={artist.images?.[0]?.url || "default-placeholder-image.jpg"}
          alt={artist.name}
        />
      </div>
      <div className="artist-details">
        <span className="artist-position">{index + 1}</span>
        <span className="artist-name">{artist.name}</span>
      </div>
    </div>
  );
};

const ArtistList = ({ artists }) => {
  return (
    <div className="artist-list-container">
      <h1>Top Artists</h1>
      <div className="artist-card-container">
        {artists.map((artist, index) => (
          <ArtistCard key={artist.id} artist={artist} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ArtistList;
