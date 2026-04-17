import React from 'react';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <p>&copy; 2026 MCQ Hub. All rights reserved.</p>
        <div className="social-links">
          <a 
            href="https://www.linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a 
            href="https://www.facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
