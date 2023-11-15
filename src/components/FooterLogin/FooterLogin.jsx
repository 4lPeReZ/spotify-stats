// FooterLogin.jsx
import React from "react";
import "./FooterLogin.css"; // Asegúrate de tener este archivo CSS para estilos

const FooterLogin = () => {
  return (
    <footer className="footer-login">
      <p className="footer-text">
        Project developed by
        <a
          href="https://github.com/4lPeReZ"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          4lPeReZ
        </a>
      </p>
      <a
        href="https://github.com/4lPeReZ"
        target="_blank"
        rel="noopener noreferrer"
        className="github-icon-link"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="GitHub"
          className="github-icon"
        />
      </a>
    </footer>
  );
};

export default FooterLogin;
