
import React from 'react';
import SkillBar from './SkillBar';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  delay: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills, delay }) => {
  return (
    <div 
      className="skill-category"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="skill-category-header">
        <div className="skill-category-icon">
          {icon}
        </div>
        <h3 className="skill-category-title">{title}</h3>
      </div>
      
      <div className="skill-category-content">
        {skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={skill.color}
            delay={delay + (index * 0.1)}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;