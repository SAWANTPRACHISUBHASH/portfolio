import React from 'react';
import { Award, GraduationCap } from 'lucide-react';

export const Certifications: React.FC = () => {
  const certificationsList = [
    {
      title: 'PG Diploma in Advanced Computing',
      issuer: 'CDAC Know-IT, Pune – 2024',
      description: 'Rigorous post-graduate validation program covering C#, ASP.NET Core, database design, and systems architecture.',
      icon: <Award />,
    },
    {
      title: 'Bachelor of Engineering (Computer Engineering)',
      issuer: 'RH Sapat College of Engineering, Nashik – 2023',
      description: 'Acquired core academic foundations in programming methodologies, algorithm analysis, structures, and systems engineering.',
      icon: <GraduationCap />,
    },
  ];

  return (
    <section id="certifications" className="certifications-section section-padding">
      <div className="container">
        <div className="section-header reveal-item">
          <h2 className="section-title">Certifications</h2>
          <div className="accent-line"></div>
        </div>

        <div className="certifications-grid">
          {certificationsList.map((cert, index) => (
            <div key={index} className="cert-card reveal-item">
              <div className="cert-icon-wrap">
                {cert.icon}
              </div>
              <div className="cert-content">
                <h4>{cert.title}</h4>
                <p className="issuer">{cert.issuer}</p>
                <p className="desc">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
