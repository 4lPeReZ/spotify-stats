// src/pages/HomePage.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import AuthButton from '../components/AuthButton/AuthButton';
import useTopTracks from '../hooks/useTopTracks';
import useTopArtists from '../hooks/useTopArtists';
import useTopPlaylists from '../hooks/useTopPlaylists';

const HomePage = () => {
  const { accessToken } = useContext(AuthContext);
  const {
    data: tracks,
    loading: loadingTracks,
    error: tracksError
  } = useTopTracks();
  const {
    data: artists,
    loading: loadingArtists,
    error: artistsError
  } = useTopArtists();
  const {
    data: playlists,
    loading: loadingPlaylists,
    error: playlistsError
  } = useTopPlaylists();

  // Contenido cuando el usuario no está autenticado
  if (!accessToken) {
    return <AuthButton />;
  }

  // Contenido durante la carga de datos
  if (loadingTracks || loadingArtists || loadingPlaylists) {
    return <div>Loading...</div>;
  }

  // Contenido en caso de error en alguna de las peticiones
  if (tracksError || artistsError || playlistsError) {
    return (
      <div>
        {tracksError && <p>Error loading top tracks: {tracksError.message}</p>}
        {artistsError && <p>Error loading top artists: {artistsError.message}</p>}
        {playlistsError && <p>Error loading playlists: {playlistsError.message}</p>}
      </div>
    );
  }

  // Contenido principal cuando el usuario está autenticado y los datos están cargados
  return (
    <div>
      <h1>Top Tracks</h1>
      <ul>
        {tracks.items.map((track, index) => (
          <li key={index}>{track.name} by {track.artists.map(artist => artist.name).join(", ")}</li>
        ))}
      </ul>

      <h1>Top Artists</h1>
      <ul>
        {artists.items.map((artist, index) => (
          <li key={index}>{artist.name}</li>
        ))}
      </ul>

      <h1>Playlists</h1>
      <ul>
        {playlists.items.map((playlist, index) => (
          <li key={index}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
