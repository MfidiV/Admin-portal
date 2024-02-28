import React, { useState } from 'react';
import '../App.css'
import { FaUser, FaKey } from 'react-icons/fa'; // Import user and key icons

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);


  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Admin</h1>
        <form>
          <div className="input-container">
            <FaUser className="icon" />
            <input
                type="text"
                placeholder={usernameFocused ? '' : 'Username'}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setUsernameFocused(true)}
                onBlur={() => setUsernameFocused(false)}
                required
              />
          </div>
          <div className="input-container">
            <FaKey className="icon" />
            <input
                type="password"
                placeholder={passwordFocused ? '' : 'Password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                required
              />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;