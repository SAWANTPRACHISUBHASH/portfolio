import React from 'react';
import { Users, GraduationCap, ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  const projectsList = [
    {
      title: 'Attendance Management System',
      description: 'A multi-tenant system implementing Role-Based Access Control (RBAC), background job processing via Hangfire, REST APIs, and complex business logic for attendance tracking, leave management, and employee data.',
      icon: <Users className="visual-placeholder-icon" />,
      tech: ['ASP.NET Core', 'SQL Server', 'Hangfire'],
      demoLink: '#contact',
      githubLink: 'https://github.com/prachisawant',
    },
    {
      title: 'Academic & Training Projects',
      description: 'Built REST APIs and authentication mechanisms with role-based auth, student/staff/admin dashboards, admission modules, and webinar systems utilizing server-side validation and database procedures.',
      icon: <GraduationCap className="visual-placeholder-icon" />,
      tech: ['ASP.NET Core', 'SQL Server', 'Web API'],
      demoLink: '#contact',
      githubLink: 'https://github.com/prachisawant',
    },
  ];

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        <div className="section-header reveal-item">
          <h2 className="section-title">Projects</h2>
          <div className="accent-line"></div>
        </div>

        <div className="projects-card-grid">
          {projectsList.map((project, index) => (
            <div key={index} className="project-item-card reveal-item">
              <div className="project-visual-box">
                {project.icon}
              </div>
              <div className="project-details-box">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div>
                  <div className="project-tech-badges" style={{ marginBottom: '1.25rem' }}>
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="badge-tech">{t}</span>
                    ))}
                  </div>
                  <div className="project-action-links">
                    <a href={project.demoLink} className="btn-project-link">
                      View Project <ExternalLink size={16} style={{ marginLeft: '4px' }} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project-github"
                      title="View Source"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
