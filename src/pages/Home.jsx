import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Contact from '../components/Contact/Contact';
import MastipSection from '../components/Sections/MastipSection';
import Partners from '../components/Partners/Partners';
import Projects from '../components/Projects/Projects';

const Home = () => {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      
      <section id="mastip">
        <MastipSection />
      </section>

      <section id="sobre">
        <About />
      </section>
      
      <section id="servicos">
        <Services />
      </section>

      <section id="projects">
        <Projects />
      </section>

      {/* <section id="partners">
        <Partners />
      </section> */}
      
      <section id="contato">
        <Contact />
      </section>
    </main>
  );
};

export default Home; 