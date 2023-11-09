// src/hooks/useTopTracks.jsx
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import config from '../config/config'; // Asegúrate de que la ruta sea correcta

const useTopTracks = () => {
  const { accessToken } = useContext(AuthContext);
  const [topTracks, setTopTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!accessToken) {
      setError(new Error('Access token is required'));
      setLoading(false);
      return;
    }

    const fetchTopTracks = async () => {
      try {
        const response = await axios.get(`${config.SPOTIFY_API_BASE_URL}${config.SPOTIFY_TOP_TRACKS_ENDPOINT}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setTopTracks(response.data.items);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopTracks();
  }, [accessToken]);

  return { topTracks, loading, error };
};

export default useTopTracks;
