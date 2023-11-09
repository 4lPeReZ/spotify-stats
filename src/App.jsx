// src/App.js

import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import AppRoutes from './routes/Routes';
import './styles/App.css'; // Import global styles

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;