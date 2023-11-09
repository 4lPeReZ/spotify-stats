import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    // Se agrega una función para actualizar el estado de autenticación.
    function handleStorageChange(event) {
      if (event.key === "spotify_access_token") {
        setAuthState({
          token: event.newValue,
          isAuthenticated: !!event.newValue,
        });

        console.log("Token actualizado:", event.newValue);
      }
    }

    // Se añade un event listener al window object para escuchar cambios en el localStorage
    window.addEventListener("storage", handleStorageChange);

    // Se realiza una verificación inicial del token en localStorage
    const token = localStorage.getItem("spotify_access_token");
    if (token) {
      setAuthState({ token, isAuthenticated: true });
      console.log("Token inicial:", token);
    }

    // Se limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};
