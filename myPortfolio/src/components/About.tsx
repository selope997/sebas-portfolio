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
              Hi, my name is Sebastian Lopez. I graduated from ECU with a degree in Computer Science. During my time there, I worked on a variety of projects that helped me grow as a developer and deepen my technical skills.

              Before studying at ECU, I pursued a Advance Diploma of Video Game Design at TAFE. It was during this time that I discovered my passion for coding and software development.

              In my free time, I enjoy playing guitar, football, and squash. I’m also a big fan of video games and movies—especially science fiction and horror
            </p>
            <p>
              I’m passionate about technology and always eager to learn new things. I’ve been involved in several projects that helped me grow both as a frontend and backend developer. Beyond that, I also enjoy exploring emerging areas like data science and machine learning.
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