import React from 'react';

export const Journey: React.FC = () => {
  const timelineItems = [
    {
      year: '2023',
      title: 'Bachelor of Engineering (Computer Engineering)',
      description: 'Graduated with a B.E. in Computer Engineering from RH Sapat College of Engineering, Nashik, establishing a strong foundation in computer science and software development.',
    },
    {
      year: '2024',
      title: 'PG Diploma in Advanced Computing (CDAC)',
      description: 'Completed post-graduate credentials at CDAC Know-IT, Pune, validating advanced systems architecture, object-oriented concepts, and enterprise software designs.',
    },
    {
      year: '2024–Present',
      title: 'Software Developer – Sanchi Solutions',
      description: 'Started professionally designing backend web applications, maintaining REST APIs, executing Hangfire background jobs, implementing RBAC authentication, and optimizing database procedures.',
    },
  ];

  return (
    <section id="journey" className="journey-section section-padding">
      <div className="container">
        <div className="section-header reveal-item">
          <h2 className="section-title">My Journey</h2>
          <div className="accent-line"></div>
        </div>

        <div className="journey-timeline">
          {timelineItems.map((item, index) => (
            <div key={index} className="journey-timeline-item reveal-item">
              <div className="jt-badge">{item.year}</div>
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
