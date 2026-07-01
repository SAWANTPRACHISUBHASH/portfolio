import React from 'react';

export const Journey: React.FC = () => {
  const timelineItems = [
    {
      year: '2024 – Present',
      title: 'Software Developer – Sanchi Solutions Pvt. Ltd., Pune',
      description: 'Design and maintain scalable backend web applications and REST APIs using ASP.NET Core, C#, and SQL Server. Implemented a multi-tenant Attendance Management System with Role-Based Access Control (RBAC) and optimized performance using Hangfire background jobs and index tuning.',
    },
    {
      year: '2024',
      title: 'Academic & Training Developer – CDAC ACTS',
      description: 'Developed advanced enterprise-level software projects: "Virtual Art Gallery" (a hybrid Spring Boot REST API & .NET Core Web API with React JS front-end) and "Curable" (an AI-powered disease prediction platform using Python, ML, and CNN models).',
    },
    {
      year: '2022 (Feb – Mar)',
      title: 'Web Developer Intern – SachiTech, Nashik',
      description: 'Worked as an intern assigned to a web project called "SachiTech Marketing Services portfolio". Implemented responsive layouts and helped build web portal pages using clean, maintainable HTML/CSS and JavaScript.',
    },
  ];

  return (
    <section id="journey" className="journey-section section-padding">
      <div className="container">
        <div className="section-header reveal-item">
          <h2 className="section-title">Professional Experience</h2>
          <div className="accent-line"></div>
        </div>

        <div className="journey-timeline">
          {timelineItems.map((item, index) => (
            <div key={index} className="journey-timeline-item reveal-item">
              <div className="jt-badge" style={{ fontSize: '0.8rem', whiteSpace: 'nowrap', padding: '0.5rem' }}>{item.year}</div>
              <div className="jt-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
