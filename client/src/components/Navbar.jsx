import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          MCQ Hub
        </div>
        <ul className="navbar-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#questions">Questions</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
