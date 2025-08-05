import React from 'react';
import ProjectHolder from './ProjectHolder';
import chatImage from '../../assets/ChatApp.png'; // Adjust the path as necessary
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb} from 'react-icons/si';

//import './Projects.css';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubLink1?: string;
    githubLink2?: string;
    Technologies?: React.ReactNode[]; // Optional property for additional components
}

const Projects: React.FC = () => {
    const projects: Project[] = [
        // Add your projects here
        {
            id: 1,
            title: "Convo (Chat App)",
            description: "Convo is a real-time chat application that allows users to communicate seamlessly. It features user authentication, message history, and a responsive design.",
            image: chatImage,
            technologies: ["React", "TypeScript", "CSS"],
            githubLink1: "https://github.com/selope997/wil-frontend.git",
            githubLink2: "https://github.com/Ljabin/wil-backend.git",

            Technologies: [
                <FaReact size="2em" color="#ffffffff" />,
                <FaNodeJs size="2em" color="#ffffffff" />,
                <SiMongodb size="2em" color="#ffffffff" />,
                <SiExpress size="2em" color="#ffffffff" />,
                
                
            ],
        },
        {
            id: 1,
            title: "Convo (Chat App)",
            description: "Convo is a real-time chat application that allows users to communicate seamlessly. It features user authentication, message history, and a responsive design.",
            image: chatImage,
            technologies: ["React", "TypeScript", "CSS"],
            githubLink1: "https://github.com/selope997/wil-frontend.git",
            githubLink2: "https://github.com/Ljabin/wil-backend.git",

            Technologies: [
                <FaReact size="2em" color="#ffffffff" />,
                <FaNodeJs size="2em" color="#ffffffff" />,
                <SiMongodb size="2em" color="#ffffffff" />,
                <SiExpress size="2em" color="#ffffffff" />,
                
                
            ],
        },
    ];

    return (
        <section className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    
                            <ProjectHolder
                                title={project.title}
                                description={project.description}
                                imageUrl={project.image}
                                projectLink1={project.githubLink1 || '#'}
                                projectLink2={project.githubLink2 || '#'}
                                technologies={project.Technologies}
                            />
                    

                ))}
            </div>
        </section>
    );
};

export default Projects;