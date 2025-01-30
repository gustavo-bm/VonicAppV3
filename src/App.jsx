import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import VonicProducts from './pages/VonicProducts';
import MastipProducts from './pages/MastipProducts';
import MastipSection from './components/Sections/MastipSection';
import ProductDropdown from './components/Navbar/ProductDropdown';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import VonicLogo from './assets/VONIC.png';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <nav className="bg-white/80 backdrop-blur-md text-gray-800 fixed w-full z-50 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <a href="/" className="hover:opacity-80 transition-opacity">
                  <img src={VonicLogo} alt="Vonic" className="h-12" />
                </a>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-8">
                <Link to="/" className="hover:text-[#CE171F] transition-colors font-medium">{t('home')}</Link>
                <Link 
                  to="/" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#CE171F] transition-colors font-medium"
                >
                  {t('about')}
                </Link>
                <ProductDropdown />
                <Link 
                  to="/" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-[#CE171F] transition-colors font-medium"
                >
                  {t('contact')}
                </Link>
                <LanguageSelector />
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden text-2xl hover:text-[#CE171F] transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div 
            className={`lg:hidden bg-white/80 backdrop-blur-md ${isMenuOpen ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link to="/" className="block hover:text-[#CE171F] transition-colors font-medium">{t('home')}</Link>
              <Link 
                to="/" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="block hover:text-[#CE171F] transition-colors font-medium"
              >
                {t('about')}
              </Link>
              <Link to="/produtos/vonic" className="block hover:text-[#CE171F] transition-colors font-medium">{t('products')}</Link>
              <Link 
                to="/" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="block hover:text-[#CE171F] transition-colors font-medium"
              >
                {t('contact')}
              </Link>
              <div className="pt-2">
                <LanguageSelector />
              </div>
            </div>
          </motion.div>
        </nav>

        <Routes>
          <Route path="/" element={
            <main>
              <section id="home">
                <Hero />
              </section>
              
              <section id="sobre">
                <About />
              </section>
              
              <section id="servicos">
                <Services />
              </section>

              <section id="mastip">
                <MastipSection />
              </section>
              
              <section id="contato">
                <Contact />
              </section>
            </main>
          } />
          <Route path="/produtos/vonic" element={<VonicProducts />} />
          <Route path="/produtos/mastip" element={<MastipProducts />} />
        </Routes>

        <footer className="bg-gradient-vonic-dark text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <img src={VonicLogo} alt="Vonic" className="h-12 mb-4" />
              </div>
              <div>
                <h3 className="font-bold mb-4">{t('contact')}</h3>
                <ul className="space-y-2 text-white/80">
                  <li>comercial@vonicsystems.com.br</li>
                  <li>Salto de Pirapora - SP</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">{t('social_media')}</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-white/80 hover:text-white transition-colors">LinkedIn</a>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">Instagram</a>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
              <p>&copy; 2025 Vonic. {t('rights_reserved')}.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App; 