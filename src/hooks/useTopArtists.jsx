// src/hooks/useTopArtists.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config/config';

const useTopArtists = () => {
  const accessToken = localStorage.getItem("spotify_access_token");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [topArtists, setTopArtists] = useState([]);

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
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchTopArtists();
  }, [accessToken]);

  return { topArtists, loading, error };
};

export default useTopArtists;
