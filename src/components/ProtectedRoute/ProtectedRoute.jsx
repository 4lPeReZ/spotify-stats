import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    // Redireccionar al usuario al login si no está autenticado
    return <Navigate to="/login" />;
  }

  return <Outlet />; // Renderiza los componentes hijos si el usuario está autenticado
};

export default ProtectedRoute;
