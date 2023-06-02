import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
// import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education/>
      <Experience/>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      {/* <FixSocialIcon /> */}
    </>
  );
}

export default Home;
