import "../styles.css";
import myPhoto from "../assets/workingPerson.jpg";
import Projects from "./projects/Projects";

const ProjectsSection = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <section className="section-header">
          <h2 className="section-title">
             Projec<span>ts</span>
          </h2>
          <div className="section-divider"></div>
        </section>
        <section className="about-content">
          <Projects/>
        </section>
      </div>
    </section>
  );
};

export default ProjectsSection;