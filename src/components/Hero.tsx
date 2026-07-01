import React from 'react';
import { Mail, Github, Linkedin, Phone, ArrowRight, Download } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-badge reveal-item">
          <span className="pulse-dot"></span>
          Open to Relocation & Remote Roles
        </div>
        <h1 className="hero-title reveal-item">
          Bridging Logic <br />
          with <span className="gradient-text">Software Craft</span>
        </h1>
        <p className="hero-subtitle reveal-item" style={{ maxWidth: '750px' }}>
          Hi, I'm <strong className="name-highlight">Prachi Sawant</strong>. I am a <strong>.NET Software Developer</strong> with 2+ years of experience in designing, developing, and maintaining scalable web applications and REST APIs using ASP.NET Core, C#, and SQL Server.
        </p>
        <div className="hero-actions reveal-item">
          <a href="#projects" className="btn btn-primary">
            View Projects <ArrowRight className="btn-icon" />
          </a>
          <a href="/Prachi Sawant Resume (1).pdf" download className="btn btn-secondary">
            Download Resume <Download className="btn-icon" />
          </a>
        </div>
        <div className="hero-socials reveal-item">
          <a href="mailto:prachiiii235@gmail.com" className="social-link" title="Email Prachi">
            <Mail size={20} />
          </a>
          <a href="https://github.com/prachisawant" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub Profile">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/prachisawant" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn Profile">
            <Linkedin size={20} />
          </a>
          <a href="tel:+918788697861" className="social-link" title="Call Prachi">
            <Phone size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
