//import { useState } from "react";
import "../styles.css";
import Skills from "./skillsBar/Skills"; // Assuming you have a skills.json file with your skills data+

const SkillsSection = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2 className="section-title">My <span className="hero-name">Skills</span></h2>
        <p className="section-description">
          I have experience with a variety of programming languages and frameworks.
        </p>

      <Skills />
      </div>
    </section>
  );
}

export default SkillsSection;
