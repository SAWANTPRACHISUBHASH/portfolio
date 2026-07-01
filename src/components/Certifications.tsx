import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  const certificationsList = [
    {
      title: 'Pre-CAT Course Certification (Preparatory Entrance Exam)',
      issuer: 'SunBeam Infotech Pvt. Ltd., Pune – 2023',
      description: 'Validated training in Computer Fundamentals, OS Concepts, C Programming, Data Structures, OOP using C++, and Basics of Big Data & AI.',
      icon: <Award />,
    },
    {
      title: 'Web Design & Development Internship Certification',
      issuer: 'SachiTech Technology for Innovators, Nashik – 2022',
      description: 'Certified 6-week professional training and project contribution for the design and development of the SachiTech Web Portfolio.',
      icon: <ShieldCheck />,
    },
  ];

  return (
    <section id="certifications" className="certifications-section section-padding">
      <div className="container">
        <div className="section-header reveal-item">
          <h2 className="section-title">Certifications & Internships</h2>
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
