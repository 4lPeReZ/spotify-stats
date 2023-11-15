import React from "react";
import AuthButton from "../../components/AuthButton/AuthButton";
import FooterLogin from '../../components/FooterLogin/FooterLogin'; // Asegúrate de que la ruta sea correcta
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      <h1>Welcome to Spotify-Stats</h1>
      <p>Login to access your personalized music experience.</p>
      <AuthButton />
      {/* Considera agregar aquí algún elemento visual relacionado con la música */}
      <p className="privacy-info">
        Your data will be used to provide a personalized music experience.
      </p>
      <FooterLogin />
    </div>
  );
};

export default LoginPage;
