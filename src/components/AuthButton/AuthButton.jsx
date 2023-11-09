// src/components/AuthButton/AuthButton.jsx
import React from 'react';
import config from '../../config/config';

const AuthButton = () => {
  const handleLogin = () => {
    const state = generateRandomString(16);
    localStorage.setItem("spotify_auth_state", state);

    const scope = config.SPOTIFY_SCOPES.join(' ');
    const url = `${config.SPOTIFY_AUTH_ENDPOINT}?client_id=${encodeURIComponent(config.SPOTIFY_CLIENT_ID)}&response_type=token&redirect_uri=${encodeURIComponent(config.SPOTIFY_REDIRECT_URI)}&scope=${encodeURIComponent(scope)}&state=${encodeURIComponent(state)}&show_dialog=true`;

    console.log(url); // Para depuración: imprime la URL completa en la consola
    window.location.href = url; // Redirige al usuario a la URL de autenticación de Spotify
  };

  return <button onClick={handleLogin}>Login with Spotify</button>;
};

function generateRandomString(length) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

export default AuthButton;
