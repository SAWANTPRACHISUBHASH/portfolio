import React from 'react';
import { GraduationCap, Award, BookOpen, Book } from 'lucide-react';

export const Education: React.FC = () => {
  const educationList = [
    {
      degree: 'PG Diploma in Advanced Computing (PG-DAC)',
      institution: 'C-DAC Know-IT, Pune',
      university: 'C-DAC ACTS',
      year: '2024',
      grade: '57%',
      icon: <Award className="panel-icon" />,
    },
    {
      degree: 'Bachelor of Engineering (Computer Engineering)',
      institution: 'R.H. Sapat College of Engineering, Nashik',
      university: 'Savitribai Phule Pune University',
      year: '2019 - 2023',
      grade: '65.58% (First Class)',
      icon: <GraduationCap className="panel-icon" />,
    },
    {
      degree: 'Higher Secondary Certificate (12th Science)',
      institution: 'Smt. D R High School & Junior College, Nandurbar',
      university: 'Maharashtra State Board',
      year: '2019',
      grade: '69.23% (First Class)',
      icon: <BookOpen className="panel-icon" />,
    },
    {
      degree: 'Secondary School Certificate (10th)',
      institution: 'Smt. Hiriben Govinddas Shroff High School, Nandurbar',
      university: 'Maharashtra State Board',
      year: '2017',
      grade: '82.40% (First Class)',
      icon: <Book className="panel-icon" />,
    },
  ];

  return (
    <section id="education" className="education-section section-padding">
      <div className="container">
        <div className="section-header reveal-item">
          <h2 className="section-title">Education</h2>
          <div className="accent-line"></div>
        </div>

        <div className="education-grid">
          {educationList.map((edu, index) => (
            <div key={index} className="edu-card reveal-item">
              <div className="edu-header">
                <div className="edu-icon-wrap">
                  {edu.icon}
                </div>
                <div className="edu-title-block">
                  <h3>{edu.degree}</h3>
                  <p className="institution">{edu.institution}</p>
                </div>
              </div>
              <div className="edu-details">
                <div className="edu-detail-row">
                  <span className="label">Board/University:</span>
                  <span className="value">{edu.university}</span>
                </div>
                <div className="edu-detail-row">
                  <span className="label">Passing Year:</span>
                  <span className="value">{edu.year}</span>
                </div>
                <div className="edu-detail-row">
                  <span className="label">Grade/Percentage:</span>
                  <span className="value grade-highlight">{edu.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
