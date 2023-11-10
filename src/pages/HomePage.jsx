import React, { useState, useEffect } from "react";
import TrackList from "../components/TrackList/TrackList";
import ArtistList from "../components/ArtistList/ArtistList";
import Playlist from "../components/Playlist/Playlist";
import useTopTracks from "../hooks/useTopTracks";
import useTopArtists from "../hooks/useTopArtists";
import useTopPlaylists from "../hooks/useTopPlaylists";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("tracks");
  const [playingAudio, setPlayingAudio] = useState(null);

  const {
    topTracks,
    loading: loadingTracks,
    error: tracksError,
  } = useTopTracks();
  const {
    topArtists,
    loading: loadingArtists,
    error: artistsError,
  } = useTopArtists();
  const {
    topPlaylists,
    loading: loadingPlaylists,
    error: playlistsError,
  } = useTopPlaylists();

  const handleAudioPlay = (audio) => {
    if (playingAudio && playingAudio !== audio) {
      playingAudio.pause();
      playingAudio.currentTime = 0;
    }
    setPlayingAudio(audio);
  };

  // Gestión de carga y errores
  if (loadingTracks || loadingArtists || loadingPlaylists)
    return <div>Loading...</div>;
  if (tracksError || artistsError || playlistsError) {
    // Mostrar errores si los hay
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
      <div className="tabs">
        <button onClick={() => setActiveTab("tracks")}>Top Tracks</button>
        <button onClick={() => setActiveTab("artists")}>Top Artists</button>
        <button onClick={() => setActiveTab("playlists")}>Playlists</button>
      </div>

      {activeTab === "tracks" && (
        <TrackList tracks={topTracks} onAudioPlay={handleAudioPlay} />
      )}
      {activeTab === "artists" && <ArtistList artists={topArtists} />}
      {activeTab === "playlists" && <Playlist playlists={topPlaylists} />}
    </div>
  );
};

export default HomePage;
