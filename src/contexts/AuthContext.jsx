import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext({
  authState: null,
  setAuthState: () => {}, // Para actualizar el estado desde los componentes
  logout: () => {} // Para manejar el cierre de sesión
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    const token = localStorage.getItem('spotify_access_token');
    if (token) {
      setAuthState((prevState) => ({
        ...prevState,
        token: token,
        isAuthenticated: true,
      }));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('spotify_access_token');
    setAuthState({
      token: null,
      isAuthenticated: false,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, setAuthState, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
