// src/pages/PlaylistPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const PlaylistPage = () => {
  let { id } = useParams(); // Obtener el ID de la playlist de la URL
  // Aquí iría la lógica para mostrar los detalles de la playlist

  return <div>Playlist Page for playlist ID: {id}</div>;
};

export default PlaylistPage;
