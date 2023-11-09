// src/hooks/useTopTracks.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config/config";

const useTopTracks = () => {
  const accessToken = localStorage.getItem("spotify_access_token");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    if (!accessToken) {
      setError(new Error("Access token is required"));
      setLoading(false);
      return;
    }

    const fetchTopTracks = async () => {
      try {
        const response = await axios.get(
          `${config.SPOTIFY_API_BASE_URL}${config.SPOTIFY_TOP_TRACKS_ENDPOINT}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        setTopTracks(response.data.items);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchTopTracks();
  }, [accessToken]);

  return { topTracks, loading, error };
};

export default useTopTracks;
