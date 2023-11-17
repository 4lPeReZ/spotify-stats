// src/config/config.jsx

const SPOTIFY_API_BASE_URL = import.meta.env.VITE_SPOTIFY_API_BASE_URL;

// Endpoints específicos para la API de Spotify
const SPOTIFY_TOP_TRACKS_ENDPOINT = '/me/top/tracks'; // Acceso a las pistas más escuchadas por el usuario.
const SPOTIFY_TOP_ARTISTS_ENDPOINT = '/me/top/artists'; // Acceso a los artistas más escuchados por el usuario.
const SPOTIFY_TOP_PLAYLISTS_ENDPOINT = '/me/playlists'; // Acceso a las listas de reproducción del usuario.

// Endpoints adicionales
const SPOTIFY_RECENTLY_PLAYED_ENDPOINT = '/me/player/recently-played'; // Acceso al historial de reproducción reciente del usuario.
const SPOTIFY_CURRENTLY_PLAYING_ENDPOINT = '/me/player/currently-playing'; // Información sobre la canción que el usuario está escuchando actualmente.
const SPOTIFY_PLAYBACK_STATE_ENDPOINT = '/me/player'; // Detalles sobre el estado actual de reproducción del usuario.
const SPOTIFY_PLAY_ENDPOINT = '/me/player/play'; // Controla la reproducción para empezar a reproducir música.
const SPOTIFY_PAUSE_ENDPOINT = '/me/player/pause'; // Controla la reproducción para pausar la música.
const SPOTIFY_USER_FOLLOWING_ENDPOINT = '/me/following'; // Lista de artistas y usuarios seguidos por el usuario.
const SPOTIFY_SAVE_TRACK_ENDPOINT = '/me/tracks'; // Guardar canciones en la biblioteca del usuario.
const SPOTIFY_CHECK_TRACK_ENDPOINT = '/me/tracks/contains'; // Verificar si una canción está en la biblioteca del usuario.


// Configuración del cliente y autorización de Spotify
const SPOTIFY_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const SPOTIFY_REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
const SPOTIFY_AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const SPOTIFY_SCOPES = [
  'user-read-private', // Acceso a la información del perfil privado del usuario.
  'user-read-email', // Acceso al correo electrónico del usuario.
  'user-top-read', // Acceso a los artistas y pistas más escuchados por el usuario.
  'user-library-read', // Acceso a la biblioteca de canciones guardadas por el usuario.
  'playlist-read-private', // Acceso a las listas de reproducción privadas del usuario.
  'playlist-read-collaborative', // Acceso a las listas de reproducción colaborativas del usuario.
  'user-read-recently-played', // Acceso al historial de reproducción reciente del usuario.
  'user-read-playback-position', // Acceso a las posiciones de reproducción dentro de las pistas escuchadas recientemente.
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
