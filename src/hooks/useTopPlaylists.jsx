// src/hooks/useTopPlaylists.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config/config';

const useTopPlaylists = () => {
  const accessToken = localStorage.getItem("spotify_access_token");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [topPlaylists, setTopPlaylists] = useState([]);

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
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchTopPlaylists();
  }, [accessToken]);

  return { topPlaylists, loading, error };
};

export default useTopPlaylists;
