import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    projectLink1: string;
    projectLink2: string;
    technologies?: React.ReactNode[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectLink1, projectLink2, technologies }) => (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, maxWidth: 350, backgroundColor: '#5e2475', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <img src={imageUrl} alt={title} style={{ width: '100%', borderRadius: 4 }} />
        <h2 style={{marginTop: '10px', color: '#ebd424'}}>{title}</h2>
        <p>{description}</p>
        <a href={projectLink1} target="_blank" rel="noopener noreferrer">
            Frontend Code
        </a>
        <a href={projectLink2} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 10 }}>
            Backend Code
        </a>
        <div className="technologies">
            {technologies && technologies.map((tech) => (
                tech
            ))}
        </div>
            
            
    </div>
);

export default ProjectCard;  
