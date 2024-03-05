import React, { useState } from 'react';
import axios from 'axios';
import { FaUser, FaKey } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password,
      });

      if (response.status === 200) {
        console.log("Login successful"); 
        // Navigate to Home component
        navigate('/home');
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Admin</h1>
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <FaKey className="icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
