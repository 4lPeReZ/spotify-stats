// src/hooks/useSpotifyApi.jsx
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import config from '../config/config'; // Asegúrate de que la ruta sea correcta

const useSpotifyApi = (endpoint) => {
  const accessToken = localStorage.getItem("spotify_access_token");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!accessToken) {
      setError(new Error('Access token is required'));
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.SPOTIFY_API_BASE_URL}${endpoint}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup function
    };

  }, [endpoint, accessToken]);

  return { data, loading, error };
};

export default useSpotifyApi;
