import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n/config';

// Componentes de Layout
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Páginas
import Home from './pages/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import VonicProducts from './pages/VonicProducts';
import MastipProducts from './pages/MastipProducts';
import Filters from './pages/products/Filters';
import VHSeries from './pages/products/series/VHSeries';
import VTSeries from './pages/products/series/VTSeries';
import VPSeries from './pages/products/series/VPSeries';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/produtos/vonic" element={<VonicProducts />} />
            <Route path="/produtos/mastip" element={<MastipProducts />} />
            <Route path="/produtos/vonic/filtros" element={<Filters />} />
            <Route path="/produtos/vonic/series/vh" element={<VHSeries />} />
            <Route path="/produtos/vonic/series/vt" element={<VTSeries />} />
            <Route path="/produtos/vonic/series/vp" element={<VPSeries />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;