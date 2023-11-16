import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";
import useUserLogin from "../../hooks/useUserLogin";

const loadingGifUrl =
  "https://media.tenor.com/FawYo00tBekAAAAC/loading-thinking.gif";

const UserProfile = ({ user }) => {
  const { logout } = useUserLogin();
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="user-profile">
      <img
        src={user.image}
        alt={user.name}
        className="user-image"
        onLoad={() => setImageLoaded(true)}
        style={{ display: imageLoaded ? "block" : "none" }}
      />
      {!imageLoaded && (
        <img src={loadingGifUrl} alt="Loading..." className="loading-gif" />
      )}
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
