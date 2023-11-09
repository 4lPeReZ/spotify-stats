// src/config/config.jsx

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';

// Endpoints específicos para la API de Spotify
const SPOTIFY_TOP_TRACKS_ENDPOINT = '/me/top/tracks';
const SPOTIFY_TOP_ARTISTS_ENDPOINT = '/me/top/artists';
const SPOTIFY_TOP_PLAYLISTS_ENDPOINT = '/me/playlists';

// Configuración del cliente y autorización de Spotify
const SPOTIFY_CLIENT_ID = 'd71a6b9f0ae64e69923a8b9f820518bb';
const SPOTIFY_REDIRECT_URI = 'http://127.0.0.1:5173/callback'; // Asegúrate de que coincida con la configurada en el dashboard de Spotify
const SPOTIFY_AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const SPOTIFY_SCOPES = [
  'user-read-private',
  'user-read-email',
  'user-top-read',
  'user-library-read',
  'playlist-read-private',
  // Agrega otros alcances según sea necesario
];

// Exportar las configuraciones combinadas
const config = {
  SPOTIFY_API_BASE_URL,
  SPOTIFY_TOP_TRACKS_ENDPOINT,
  SPOTIFY_TOP_ARTISTS_ENDPOINT,
  SPOTIFY_TOP_PLAYLISTS_ENDPOINT,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_REDIRECT_URI,
  SPOTIFY_AUTH_ENDPOINT,
  SPOTIFY_SCOPES,
  // ... otras configuraciones
};

export default config;
