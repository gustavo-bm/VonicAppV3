import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Contact from '../components/Contact/Contact';
import MastipSection from '../components/Sections/MastipSection';
import Projects from '../components/Projects/Projects';

const Home = () => {
  const location = useLocation();

  // Efeito para rolar até a seção quando a página carregar
  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); // Pequeno delay para garantir que o DOM esteja pronto
      }
    }
  }, [location]);

  return (
    <main>
      <section id="hero">
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
      <section id="contato">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
