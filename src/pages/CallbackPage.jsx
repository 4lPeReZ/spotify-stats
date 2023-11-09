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

    if (access_token) {
      localStorage.setItem("spotify_access_token", access_token);
      // Solicitar confirmación del usuario antes de redirigir
      if (window.confirm("Authentication successful! Do you want to proceed?")) {
        navigate("/"); // Redirige a la home page después de la confirmación
      }
    } else {
      // Manejar la ausencia de access_token o errores
      setError("Failed to authenticate with Spotify.");
      navigate("/"); // O redirige a una página de error o inicio de sesión
    }
  }, [location, navigate]);

  // Mostrar mensaje de carga o error
  return (
    <div>
      {error ? <p>{error}</p> : <p>Loading...</p>}
    </div>
  );
};

export default CallbackPage;
