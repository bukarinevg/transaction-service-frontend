import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setIsAuthenticated(false);
      return;
    }

    axios.get('/api/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => setIsAuthenticated(true))
    .catch(() => {
      alert('Session expired. Please log in again.');
      localStorage.removeItem('token');
      setIsAuthenticated(false);
    });
    
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
