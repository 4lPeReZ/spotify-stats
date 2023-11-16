import React, { useState, useEffect } from "react";
import TrackList from "../../components/TrackList/TrackList";
import ArtistList from "../../components/ArtistList/ArtistList";
import Playlist from "../../components/Playlist/Playlist";
import UserProfile from "../../components/UserProfile/UserProfile";
import useTopTracks from "../../hooks/useTopTracks";
import useTopArtists from "../../hooks/useTopArtists";
import useTopPlaylists from "../../hooks/useTopPlaylists";
import useUserLogin from "../../hooks/useUserLogin";
import "./HomePage.css";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("tracks");
  const [prevTab, setPrevTab] = useState(null);
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

  const { userInfo, loading: loadingUser, error: userError } = useUserLogin();

  const handleAudioPlay = (audio) => {
    if (playingAudio && playingAudio !== audio) {
      playingAudio.pause();
      playingAudio.currentTime = 0;
    }
    setPlayingAudio(audio);
  };

  useEffect(() => {
    setPrevTab(activeTab);
  }, [activeTab]);

  // Gestión de carga y errores
  if (loadingTracks || loadingArtists || loadingPlaylists || loadingUser) {
    return <div>Loading...</div>;
  }
  if (tracksError || artistsError || playlistsError || userError) {
    return (
      <div>
        {tracksError && <p>Error loading top tracks: {tracksError.message}</p>}
        {artistsError && (
          <p>Error loading top artists: {artistsError.message}</p>
        )}
        {playlistsError && (
          <p>Error loading playlists: {playlistsError.message}</p>
        )}
        {userError && <p>Error loading user info: {userError.message}</p>}
      </div>
    );
  }

  return (
    <div>
      <div className="header-container">
        <div className="tabs-container">
          <button
            onClick={() => setActiveTab("tracks")}
            className={activeTab === "tracks" ? "active" : ""}
          >
            Top Tracks
          </button>
          <button
            onClick={() => setActiveTab("artists")}
            className={activeTab === "artists" ? "active" : ""}
          >
            Top Artists
          </button>
          <button
            onClick={() => setActiveTab("playlists")}
            className={activeTab === "playlists" ? "active" : ""}
          >
            Playlists
          </button>
        </div>
        <UserProfile user={userInfo} />
      </div>
      <div className="main-content">
      <div className={`tab-content ${activeTab === "tracks" ? "slide-in" : ""}`}>
        {activeTab === "tracks" && (
          <TrackList tracks={topTracks} onAudioPlay={handleAudioPlay} />
        )}
      </div>
      <div className={`tab-content ${activeTab === "artists" ? "slide-in" : ""}`}>
        {activeTab === "artists" && <ArtistList artists={topArtists} />}
      </div>
      <div className={`tab-content ${activeTab === "playlists" ? "slide-in" : ""}`}>
        {activeTab === "playlists" && <Playlist playlists={topPlaylists} />}
      </div>
    </div>
    </div>
  );
};

export default HomePage;
