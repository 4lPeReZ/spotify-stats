// src/pages/HomePage.jsx
import React from "react";
import AuthButton from "../components/AuthButton/AuthButton";
import useTopTracks from "../hooks/useTopTracks";
import useTopArtists from "../hooks/useTopArtists";
import useTopPlaylists from "../hooks/useTopPlaylists";

const HomePage = () => {
  const accessToken = localStorage.getItem("spotify_access_token");
  console.log("Access Token:", accessToken);

  const {
    topTracks,
    loading: loadingTracks,
    error: tracksError,
  } = useTopTracks();
  console.log("Contents of topTracks:", topTracks);

  const {
    topArtists,
    loading: loadingArtists,
    error: artistsError,
  } = useTopArtists();
  console.log("Contents of topArtists:", topArtists);

  const {
    topPlaylists,
    loading: loadingPlaylists,
    error: playlistsError,
  } = useTopPlaylists();
  console.log("Contents of topPlaylists:", topPlaylists);

  if (!accessToken) {
    return <AuthButton />;
  }

  if (loadingTracks || loadingArtists || loadingPlaylists) {
    return <div>Loading...</div>;
  }

  if (tracksError || artistsError || playlistsError) {
    return (
      <div>
        {tracksError && <p>Error loading top tracks: {tracksError.message}</p>}
        {artistsError && (
          <p>Error loading top artists: {artistsError.message}</p>
        )}
        {playlistsError && (
          <p>Error loading playlists: {playlistsError.message}</p>
        )}
      </div>
    );
  }

  return (
    <div>
      <h1>Top Tracks</h1>
      <ul>
        {topTracks.map((track, index) => (
          <li key={index}>
            {track.name} by{" "}
            {track.artists.map((artist) => artist.name).join(", ")}
          </li>
        ))}
      </ul>

      <h1>Top Artists</h1>
      <ul>
        {topArtists.map((artist, index) => (
          <li key={index}>{artist.name}</li>
        ))}
      </ul>

      <h1>Playlists</h1>
      <ul>
        {topPlaylists.map((playlist, index) => (
          <li key={index}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
