import { Github, Linkedin, Mail, Code } from "lucide-react";
import "../styles.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <Code size={64} className="text-white" />
        </div>
        
        <h1 className="hero-title">
          Hi, I'm <span className="hero-name">Sebastian</span>
        </h1>
        
        <h2 className="hero-subtitle">
          Full-Stack Software Developer
        </h2>
        
        <p className="hero-description">
          I'm passionate about building clean, scalable, and user-friendly digital solutions. 
          I specialize in both frontend and backend development, 
          and I’m always exploring new technologies—from web frameworks to machine learning—to stay at the edge of innovation.
        </p>
        
        <div className="hero-buttons">
          <button className="btn btn-primary btn-lg">
            View My Work
          </button>
          <button className="btn btn-outline btn-lg">
            Download CV
          </button>
        </div>
        
        <div className="hero-socials">
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "#contact", label: "Email" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="social-link"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;