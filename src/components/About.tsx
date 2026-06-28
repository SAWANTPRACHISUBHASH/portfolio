import React from 'react';
import { Folders, Code2, GraduationCap, Puzzle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="section-header reveal-item">
          <h2 className="section-title">About Me</h2>
          <div className="accent-line"></div>
        </div>

        <div className="about-two-column">
          {/* Left: Professional Summary */}
          <div className="about-story-content reveal-item">
            <h3>Professional Summary</h3>
            <p>
              I am a results-driven <strong>.NET Software Developer</strong> with 1.5+ years of experience in designing, developing, and maintaining scalable web applications and REST APIs using ASP.NET Core, C#, and SQL Server.
            </p>
            <p>
              I am experienced in implementing complex business logic, Role-Based Access Control (RBAC), and background job processing using Hangfire. I have strong expertise in Entity Framework, LINQ, and database optimization.
            </p>
            <p>
              Skilled in working across the full Software Development Life Cycle (SDLC) including development, testing, deployment, and production support, I am passionate about building high-performance, reliable, and maintainable backend systems.
            </p>
          </div>

          {/* Right: Bento Stats Cards */}
          <div className="about-stats-grid reveal-item">
            <div className="stats-card">
              <Folders className="stats-icon" />
              <div className="stats-num">1.5+</div>
              <div className="stats-label">Years of Experience</div>
            </div>

            <div className="stats-card">
              <Code2 className="stats-icon" />
              <div className="stats-num">10+</div>
              <div className="stats-label">Technologies Mastered</div>
            </div>

            <div className="stats-card">
              <GraduationCap className="stats-icon" />
              <div className="stats-num">2023</div>
              <div className="stats-label">Dev Journey Begun</div>
            </div>

            <div className="stats-card">
              <Puzzle className="stats-icon" />
              <div className="stats-num">100%</div>
              <div className="stats-label">Problem Solving Mindset</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
