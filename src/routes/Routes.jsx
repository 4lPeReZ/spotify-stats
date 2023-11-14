// src/routes/index.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CallbackPage from "../pages/CallbackPage";
import LoginPage from "../pages/LoginPage";

// ...otros imports

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/callback" element={<CallbackPage />} />
      {/* ...otras rutas */}
    </Routes>
  );
};

export default AppRoutes;
