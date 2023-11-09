// src/routes/index.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CallbackPage from '../pages/CallbackPage';

// ...otros imports

const AppRoutes = () => {
  return (

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/callback" element={<CallbackPage />} />
        {/* ...otras rutas */}
      </Routes>

  );
};

export default AppRoutes;
