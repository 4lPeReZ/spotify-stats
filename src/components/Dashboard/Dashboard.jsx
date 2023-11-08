import React, { useState, useEffect } from 'react';
import UserProfile from '../UserProfile/UserProfile';
// Importar otros componentes como TopTracks, TopArtists, etc.

const Dashboard = ({ token }) => {
  // Aquí puedes manejar el estado para los datos del usuario, top tracks, etc.

  return (
    <div>
      <UserProfile token={token} />
      {/* Renderizar otros componentes pasando el token como prop */}
    </div>
  );
};

export default Dashboard;
