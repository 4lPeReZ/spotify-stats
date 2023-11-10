// src/pages/CallbackPage.js
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CallbackPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    const hashParams = location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      }, {});

    const access_token = hashParams.access_token;
    const expires_in = hashParams.expires_in; // Duración del token en segundos

    if (access_token) {
      const currentTime = new Date().getTime();
      const expiresInMilliseconds = expires_in * 1000;
      localStorage.setItem("spotify_access_token", access_token);
      localStorage.setItem("spotify_token_timestamp", currentTime.toString());
      localStorage.setItem(
        "spotify_token_expires_in",
        expiresInMilliseconds.toString()
      );

      navigate("/"); // Redirige a la home page
    } else {
      setError("Failed to authenticate with Spotify.");
      navigate("/login"); // Redirige a la página de login si no hay token
    }
  }, [location, navigate]);

  // Mostrar mensaje de carga o error
  return <div>{error ? <p>{error}</p> : <p>Loading...</p>}</div>;
};

export default CallbackPage;
