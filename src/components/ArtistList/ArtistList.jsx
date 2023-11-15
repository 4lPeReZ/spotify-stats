// src/components/ArtistList.jsx
import React from "react";
import "./ArtistList.css";

const ArtistCard = ({ artist, index }) => (
  <div className="artist-card">
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

const ArtistList = ({ artists }) => {

  return (
    <div className="artist-list-container">
      <h1>Top 10 Artists</h1>
      <div className="artist-card-container">
        {artists.map((artist, index) => (
          <ArtistCard key={artist.id} artist={artist} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ArtistList;
