import "../styles.css";
import myPhoto from "../assets/workingPerson.jpg";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <section className="section-header">
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
          <div className="section-divider"></div>
        </section>

        <section className="about-content">
          <div className="about-text">
            <h3>Crafting Digital Experiences</h3>
            <p>
              My name is sebastian Lopez I graduated from ECU with adegree in Computer Science. during my time at ECU I was able to work on many projects that helped me grow as a developer.
              before studing at ECU I went to TAFE to study a bachelor of video games design, this is where I found my passion for coding and software development.
              In my free time I enjoy playing the guitar, playin football or squash, I also enjoy playing video games and watching movies especilly scincefiction and horror.
            </p>
            <p>
              I'm passionate about technology and always eager to learn new skills. I have been part of multiple projects that have helped me grow as a developer,
              apart from the skills that I have gained in frontend and backend I allso enjoy exploring new field shuch as data science and machine learning.
            </p>
            <div className="about-skills">
              {[
                "Problem Solving",
                "Team Collaboration", 
                "Continuous Learning",
              ].map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="about-image">
            <div className="about-placeholder">
              <img className="about-photo" src={myPhoto} alt="Description" />
              <p>Developer at Work</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;