import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";
import useUserLogin from "../../hooks/useUserLogin";

const UserProfile = ({ user }) => {
  const { logout } = useUserLogin();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="user-profile">
      <img src={user.image} alt={user.name} className="user-image" />
      <p className="user-name">{user.name}</p>
      <div className="user-dropdown-menu">
        <div className="dropdown-item" onClick={handleLogout}>
          Logout
        </div>
        {/* Agrega aquí más opciones si necesitas */}
      </div>
    </div>
  );
};

export default UserProfile;
