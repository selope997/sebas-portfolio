import Hero from "../components/Hero";
import About from "../components/About";
import SkillsSection from "../components/SkillsSection";
// import Projects from "../components/Projects";
// import Contact from "../components/Contact";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <SkillsSection />
      {/*<Projects />
      <Contact /> */}
    </div>
  );
};

export default Index;

