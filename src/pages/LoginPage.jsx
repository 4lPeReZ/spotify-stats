import React from 'react';
import AuthButton from '../components/AuthButton/AuthButton';


const LoginPage = () => {
  return (
    <div className="login-container">
      <h1>Welcome to Spotify-Stats</h1>
      <p>Login to access your personalized music experience.</p>
      <AuthButton />
    </div>
  );
};

export default LoginPage;
