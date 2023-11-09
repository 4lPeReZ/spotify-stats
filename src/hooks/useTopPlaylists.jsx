// src/hooks/useTopPlaylists.jsx
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import config from '../config/config'; // Asegúrate de que la ruta sea correcta

const useTopPlaylists = () => {
  const { accessToken } = useContext(AuthContext);
  const [topPlaylists, setTopPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!accessToken) {
      setError(new Error('Access token is required'));
      setLoading(false);
      return;
    }

    const fetchTopPlaylists = async () => {
      try {
        const response = await axios.get(`${config.SPOTIFY_API_BASE_URL}${config.SPOTIFY_TOP_PLAYLISTS_ENDPOINT}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setTopPlaylists(response.data.items);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopPlaylists();
  }, [accessToken]);

  return { topPlaylists, loading, error };
};

export default useTopPlaylists;
