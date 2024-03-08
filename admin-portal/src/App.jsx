import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Assuming App.css is located in the same directory
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';


function App() {
  return (
    <div className="App"> {/* Assuming you have a div with class App for styling */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Assuming the Login component is rendered at the root path */}
          <Route path="/dashboard" element={ <Dashboard /> } /> {/* Render the Home component when navigating to /home */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
