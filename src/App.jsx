// src/App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import './styles/App.css'; // Import global styles

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
