import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './i18n/config';
import { motion, AnimatePresence } from 'framer-motion';

// Componentes de Layout
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Páginas Principais
import Home from './pages/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import MastipSection from './components/Sections/MastipSection';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';

// Páginas de Produtos
import VonicProducts from './pages/VonicProducts';
import MastipProducts from './pages/MastipProducts';

// Produtos Vonic
import NewProducts from './pages/products/NewProducts';
import HotNozzles from './pages/products/HotNozzles';
import Manifolds from './pages/products/Manifolds';
import HotHalf from './pages/products/HotHalf';
import Controllers from './pages/products/Controllers';
import Filters from './pages/products/Filters';

// Séries de Produtos Vonic
import VHSeries from './pages/products/series/VHSeries';
import VPSeries from './pages/products/series/VPSeries';
import VTSeries from './pages/products/series/VTSeries';

// Séries de Produtos Mastip
// import MXSeries from './pages/products/series/mastip/MXSeries';
// import BXSeries from './pages/products/series/mastip/BXSeries';
// import SXSeries from './pages/products/series/mastip/SXSeries';
// import FlowLocSeries from './pages/products/series/mastip/FlowLocSeries';

// Produtos Mastip
import MastipNewReleases from './pages/products/mastip/NewReleases';
import HotHalfSystems from './pages/products/mastip/HotHalfSystems';
import ManifoldSystems from './pages/products/mastip/ManifoldSystems';
import NozzleSystems from './pages/products/mastip/NozzleSystems';
import ValveGateSystems from './pages/products/mastip/ValveGateSystems';
import SequentialControllers from './pages/products/mastip/SequentialControllers';
import MastipControllers from './pages/products/mastip/MastipControllers';
import CAE from './pages/products/mastip/CAE';
import HomeWrapper from './components/Services/HomeWrapper';


// Layout Wrapper com transição
const PageTransition = ({ children }) => {
  const variants = {
    hidden: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.4,
        when: "beforeChildren",
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const location = useLocation();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        className="flex-grow"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// Componente de preloader
const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-white dark:bg-black flex items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className="w-16 h-16 mb-4 border-4 border-primary dark:border-neon-primary dark:border-opacity-80 border-t-transparent rounded-full dark:neon-border"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="text-lg font-medium bg-gradient-to-r from-primary to-secondary dark:from-neon-primary dark:to-neon-secondary text-transparent bg-clip-text dark:neon-text"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          G3 Core
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  // Efeito para simular carregamento e ativar as animações de scroll reveal
  useEffect(() => {
    // Simular tempo de carregamento
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.reveal-on-scroll');

      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        } else {
          element.classList.remove('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Ativar para elementos já visíveis no carregamento inicial
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <Router>
        <ScrollToHash />
        <div className="flex flex-col min-h-screen">
          <AnimatePresence>
            {loading && <Preloader />}
          </AnimatePresence>
          <Navbar />
          <PageTransition>
            <Routes>
              <Route path="/" element={<HomeWrapper />} />
              <Route path="/:section" element={<HomeWrapper />} />

              {/* Rotas Base de Produtos */}
              <Route path="/produtos/vonic" element={<VonicProducts />} />
              <Route path="/produtos/mastip" element={<MastipProducts />} />

              {/* Vonic Products Routes */}
              <Route path="/produtos/vonic/novidades" element={<NewProducts />} />
              <Route path="/produtos/vonic/bicos" element={<HotNozzles />} />
              <Route path="/produtos/vonic/manifolds" element={<Manifolds />} />
              <Route path="/produtos/vonic/hot-half" element={<HotHalf />} />
              <Route path="/produtos/vonic/controladores" element={<Controllers />} />
              <Route path="/produtos/vonic/filtros" element={<Filters />} />

              {/* Vonic Series Routes */}
              <Route path="/produtos/vonic/bicos/vh" element={<VHSeries />} />
              <Route path="/produtos/vonic/bicos/vp" element={<VPSeries />} />
              <Route path="/produtos/vonic/bicos/vt" element={<VTSeries />} />

              {/* Mastip Products Routes */}
              <Route path="/produtos/mastip/novidades" element={<MastipNewReleases />} />
              <Route path="/produtos/mastip/hot-halves" element={<HotHalfSystems />} />
              <Route path="/produtos/mastip/manifolds" element={<ManifoldSystems />} />
              <Route path="/produtos/mastip/nozzles" element={<NozzleSystems />} />
              <Route path="/produtos/mastip/valve-gates" element={<ValveGateSystems />} />
              <Route path="/produtos/mastip/sequential" element={<SequentialControllers />} />
              <Route path="/produtos/mastip/controllers" element={<MastipControllers />} />
              <Route path="/produtos/mastip/cae" element={<CAE />} />

              {/* Mastip Series Routes */}
              {/* <Route path="/produtos/mastip/nozzles/mx" element={<MXSeries />} />
            <Route path="/produtos/mastip/nozzles/bx" element={<BXSeries />} />
            <Route path="/produtos/mastip/nozzles/sx" element={<SXSeries />} />
            <Route path="/produtos/mastip/nozzles/flowloc" element={<FlowLocSeries />} /> */}
            </Routes>
          </PageTransition>
          <Footer />
        </div>
      </Router>
    </div>

  );
}

export default App;