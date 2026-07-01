import React from 'react';
import { Download } from 'lucide-react';

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="resume-section section-padding">
      <div className="container">
        <div className="section-header reveal-item">
          <h2 className="section-title">Resume</h2>
          <div className="accent-line"></div>
        </div>

        <div className="resume-card-glow reveal-item">
          <div className="resume-left-info">
            <h3>Prachi Sawant</h3>
            <p className="role-desc">Software Developer</p>
            <p className="resume-pitch">
              Results-driven .NET Software Developer with 2+ years of experience in designing, developing, and maintaining scalable web applications and REST APIs using ASP.NET Core, C#, and SQL Server.
            </p>
            <a href="/Prachi_Sawant_Resume.pdf" download className="btn btn-primary">
              Download Resume <Download className="btn-icon" />
            </a>
          </div>

          <div className="resume-right-preview">
            <div className="resume-mini-preview">
              <div className="line title">Prachi Sawant</div>
              <div className="line subtitle">Software Developer</div>
              <div className="divider"></div>
              <div className="line header">Experience Summary</div>
              <div className="line text">Nov 2024 - Present: Software Developer (Sanchi Solutions)</div>
              <div className="line text">Developed multi-tenant attendance management system...</div>
              <div className="line header">Education</div>
              <div className="line text">PG Diploma in Advanced Computing (CDAC Know-IT, 2024)</div>
              <div className="line text">B.E. Computer Engineering (Nashik, 2023)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
