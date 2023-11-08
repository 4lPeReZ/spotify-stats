import React from "react";

const CLIENT_ID = "d71a6b9f0ae64e69923a8b9f820518bb"; // Reemplazar con tu Client ID de Spotify
const REDIRECT_URI = "http://localhost:3000"; // Reemplazar con tu Redirect URI registrado en Spotify
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "code";
const SCOPES = [
  "user-top-read",
  "playlist-read-private",
  "user-read-recently-played",
  "user-library-read",
];
// Agrega los permisos necesarios aquí

const LoginWithSpotify = () => {
  const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join(
    " "
  )}&response_type=${RESPONSE_TYPE}&show_dialog=true`;

  return (
    <div>
      <a href={authUrl}>Iniciar sesión con Spotify</a>
    </div>
  );
};

export default LoginWithSpotify;
