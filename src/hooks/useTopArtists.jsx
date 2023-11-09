// src/hooks/useTopArtists.jsx
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import config from '../config/config'; // Asegúrate de que la ruta sea correcta

const useTopArtists = () => {
  const { accessToken } = useContext(AuthContext);
  const [topArtists, setTopArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!accessToken) {
      setError(new Error('Access token is required'));
      setLoading(false);
      return;
    }

    const fetchTopArtists = async () => {
      try {
        const response = await axios.get(`${config.SPOTIFY_API_BASE_URL}${config.SPOTIFY_TOP_ARTISTS_ENDPOINT}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setTopArtists(response.data.items);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopArtists();
  }, [accessToken]);

  return { topArtists, loading, error };
};

export default useTopArtists;
