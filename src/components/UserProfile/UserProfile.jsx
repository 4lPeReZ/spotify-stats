import React from 'react';
import './UserProfile.css'; // Importa el archivo de estilos CSS

const UserProfile = ({ user }) => {
    if (!user) return null; // Si no hay datos de usuario, no renderizar el componente

    return (
        <div className="user-profile">
            <img src={user.image} alt={user.name} className="user-image" />
            <p className="user-name">{user.name}</p>
            {/* Aquí puedes añadir un botón o enlace para cerrar sesión */}
        </div>
    );
};

export default UserProfile;
