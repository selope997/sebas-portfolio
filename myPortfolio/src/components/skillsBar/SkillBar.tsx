import React, { useState, useEffect } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  delay: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, color, delay }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(level);
    }, delay * 1000 + 500);

    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div className="skill-bar-group">
      <div className="skill-bar-header">
        <span className="skill-bar-name">
          {name}
        </span>
        <span className="skill-bar-percentage">
          {level}%
        </span>
      </div>
      
      <div className="skill-bar-container">
        <div
          className={`skill-bar-fill skill-bar-${color}`}
          style={{ width: `${animatedLevel}%` }}
        >
          <div className="skill-bar-shine"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;