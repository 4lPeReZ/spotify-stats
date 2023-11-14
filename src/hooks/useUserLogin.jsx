// src/hooks/useUserLogin.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config/config";

const useUserLogin = () => {
  const accessToken = localStorage.getItem("spotify_access_token");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!accessToken) {
      setError(new Error("Access token is required"));
      setLoading(false);
      return;
    }

    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`${config.SPOTIFY_API_BASE_URL}/me`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setUserInfo({
          name: response.data.display_name,
          image: response.data.images[0].url,
        });
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [accessToken]);

  return { userInfo, loading, error };
};

export default useUserLogin;
