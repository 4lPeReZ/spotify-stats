import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Dashboard from './components/Dashboard/Dashboard';
import LoginWithSpotify from './components/LoginWithSpotify/LoginWithSpotify';


function App() {
  const [token, setToken] = useState(null);

  // Aquí podrías verificar si existe un token en el localStorage como ejemplo
  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const isAuthenticated = token != null;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginWithSpotify setToken={setToken} />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<Dashboard token={token} />} />
          {/* Otras rutas protegidas */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
