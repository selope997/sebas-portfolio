
//import React from 'react';
import SkillCategory from './SkillCategory';
import { Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="skill-icon" />,
      skills: [
        { name: "React", level: 95, color: "react" },
        { name: "TypeScript", level: 90, color: "typescript" },
        { name: "JavaScript", level: 93, color: "javascript" },
        { name: "HTML/CSS", level: 96, color: "html" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="skill-icon" />,
      skills: [
        { name: "Node.js", level: 88, color: "nodejs" },
        { name: "Python", level: 85, color: "python" },
        { name: "PostgreSQL", level: 82, color: "postgresql" },
        { name: "Django", level: 80, color: "mongodb" },
        { name: "Express.js", level: 87, color: "express" },
        { name: "REST APIs", level: 90, color: "rest" }
      ]
    },
    {
      title: "DevOps",
      icon: <Wrench className="skill-icon" />,
      skills: [
        { name: "Node.js", level: 88, color: "nodejs" },
        { name: "Python", level: 85, color: "python" },
        { name: "PostgreSQL", level: 82, color: "postgresql" },
        { name: "MongoDB", level: 80, color: "mongodb" },
        { name: "Express.js", level: 87, color: "express" },
        { name: "REST APIs", level: 90, color: "rest" }
      ]
    }
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">
            Technical Skills
          </h2>
          <p className="skills-description">
            A comprehensive overview of my technical expertise across the full development stack
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>

  );
};

export default Skills;
