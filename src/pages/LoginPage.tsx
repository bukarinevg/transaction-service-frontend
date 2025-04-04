import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axious';
import '../index.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        navigate('/dashboard');
      }
    }, [navigate]);
    
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await API.post('/login', {
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem('token', token);
      
      navigate('/dashboard');
    } catch (err: any) {
      setError('Неверный логин или пароль');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 gap-4">
      <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md w-full max-w-sm "
      >
        <div className="div flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Login</h2>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setLogin(e.target.value)}
            className="w-full border p-2 mb-3 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 mb-3 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Войти
          </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <div className="flex flex-col text-gray-500 text-sm mt-2">
            <p> Use user: test@test.com </p>
            <p> Password:  password </p>
          </div>
        </div>
      </form>

    </div>
  );
};

export default LoginPage;
