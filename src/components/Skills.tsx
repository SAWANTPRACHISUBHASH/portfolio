import React from 'react';
import { Server, Database, Layout, Wrench, Check } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Backend & APIs',
      icon: <Server className="panel-icon" />,
      skills: ['C# & .NET Core', 'ASP.NET Core & MVC', 'REST APIs & Swagger'],
    },
    {
      title: 'Database & ORM',
      icon: <Database className="panel-icon" />,
      skills: ['Microsoft SQL Server', 'Entity Framework & LINQ', 'Stored Procedures & Indexing'],
    },
    {
      title: 'Frontend',
      icon: <Layout className="panel-icon" />,
      skills: ['HTML, CSS & Bootstrap', 'JavaScript & jQuery', 'Responsive Design'],
    },
    {
      title: 'Tools & Concepts',
      icon: <Wrench className="panel-icon" />,
      skills: ['Hangfire & IIS', 'Dependency Injection', 'Git, Jira & SDLC'],
    },
  ];

  return (
    <section id="skills" className="skills-section section-padding">
      <div className="container">
        <div className="section-header reveal-item">
          <h2 className="section-title">Technical Skills</h2>
          <div className="accent-line"></div>
        </div>

        <div className="skills-grid-bento">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills-card-panel reveal-item">
              <div className="panel-header">
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              <ul className="panel-skills-list">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx}>
                    <Check className="bullet-icon" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
