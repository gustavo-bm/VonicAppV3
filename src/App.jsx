import React, { useEffect } from 'react';
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

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <PageTransition>
          <Routes>
            {/* Rotas Principais */}
            <Route path="/" element={<Home />} />
            
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
            <Route path="/produtos/mastip/controllers" element={<MastipProducts category="controllers" />} />
            <Route path="/produtos/mastip/cae" element={<MastipProducts category="cae" />} />

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
  );
}

export default App;