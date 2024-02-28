import React, { useState } from 'react';
import { FaUser, FaKey } from 'react-icons/fa';
import adminData from '../admin.json'; // Import admin data from JSON file

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const foundAdmin = adminData.admins.find(
      (admin) => admin.username === username && admin.password === password
    );

    if (foundAdmin) {
      console.log("Login successful");
      // Add logic for successful login, such as redirecting to a dashboard
    } else {
      setError("Invalid username or password");
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
