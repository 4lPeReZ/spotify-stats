import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config/config';

const useArtistTopTracks = (artistId) => {
  const accessToken = localStorage.getItem('spotify_access_token');
  const [topTracks, setTopTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtistTopTracks = async () => {
      if (!accessToken || !artistId) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `${config.SPOTIFY_API_BASE_URL}/artists/${artistId}/top-tracks?country=US`, // Asegúrate de usar la URL correcta
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        setTopTracks(response.data.tracks);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArtistTopTracks();
  }, [accessToken, artistId]);

  return { topTracks, loading, error };
};

export default useArtistTopTracks;
