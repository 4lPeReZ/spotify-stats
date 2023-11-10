// src/hooks/useTopArtists.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config/config";
import { useNavigate } from "react-router-dom";

const useTopArtists = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("spotify_access_token");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [topArtists, setTopArtists] = useState([]);

  useEffect(() => {
    if (!accessToken) {
      // Redirige al usuario para autenticación
      navigate("/login"); // Asegúrate de tener una ruta "/login" que muestre AuthButton
      return;
    }

    const fetchTopArtists = async () => {
      try {
        const response = await axios.get(
          `${config.SPOTIFY_API_BASE_URL}${config.SPOTIFY_TOP_ARTISTS_ENDPOINT}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        setTopArtists(response.data.items);
        setLoading(false);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          // Si el token ha caducado, redirige para autenticación
          navigate("/login");
        } else {
          setError(err);
        }
        setLoading(false);
      }
    };

    fetchTopArtists();
  }, [accessToken, navigate]);

  return { topArtists, loading, error };
};

export default useTopArtists;
