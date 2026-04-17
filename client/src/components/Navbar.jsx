import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          Darshan Harish
        </div>
        <ul className="navbar-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#questions">Questions</a></li>
          <li><a href="#contact">Contact</a></li>
          <li onClick={handleLogout} style={{cursor: 'pointer'}}>Logout</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
