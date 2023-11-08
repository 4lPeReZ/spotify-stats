// src/routes/index.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PlaylistPage from "../pages/PlaylistPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/playlist/:id" element={<PlaylistPage />} />
      {/* Agregar más rutas según sea necesario */}
    </Routes>
  );
};

export default AppRoutes;
