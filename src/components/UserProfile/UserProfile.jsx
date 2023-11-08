import React, { useState, useEffect } from 'react';

const UserProfile = ({ token }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setProfile(data);
    };

    if (token) {
      fetchProfile();
    }
  }, [token]);

  if (!profile) {
    return <div>Loading...</div>; // Podrías usar un componente de carga aquí
  }

  return (
    <div>
      <h1>{profile.display_name}</h1>
      <img src={profile.images[0].url} alt={profile.display_name} />
      <p>{profile.email}</p>
      {/* Otros detalles del perfil */}
    </div>
  );
};

export default UserProfile;
