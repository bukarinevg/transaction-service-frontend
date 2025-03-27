import React from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axious';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await API.post('/logout'); 
    } catch (error) {
      console.error('Logout failed:', error);
    }

    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
