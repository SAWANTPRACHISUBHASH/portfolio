import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          <p>&copy; 2026 Prachi Sawant. All rights reserved.</p>
        </div>
        <div className="footer-center">
          <p>Designed for prachisawant.com</p>
        </div>
        <div className="footer-right">
          <div className="footer-socials">
            <a href="https://github.com/prachisawant" target="_blank" rel="noopener noreferrer" title="GitHub">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/prachisawant" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:prachiiii235@gmail.com" title="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
