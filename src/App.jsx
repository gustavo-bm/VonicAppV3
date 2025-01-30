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
import { FaBars, FaTimes, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';
import VonicLogo from './assets/VONIC.png';

const NavLink = ({ to, onClick, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className="relative font-medium text-gray-800 hover:text-[#CE171F] transition-colors group py-8"
  >
    {children}
    <span className="absolute bottom-6 left-0 w-0 h-0.5 bg-[#CE171F] transition-all duration-300 group-hover:w-full" />
  </Link>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <nav className="bg-white/95 backdrop-blur-md text-gray-800 fixed w-full z-50 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-24">
              <div className="flex items-center">
                <Link to="/" className="hover:opacity-80 transition-opacity">
                  <img src={VonicLogo} alt="Vonic" className="h-14" />
                </Link>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-12">
                <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
                  {t('home')}
                </NavLink>
                <NavLink 
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('sobre');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#sobre';
                    }
                  }}
                >
                  {t('about')}
                </NavLink>
                <ProductDropdown />
                <NavLink 
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('contato');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#contato';
                    }
                  }}
                >
                  {t('contact')}
                </NavLink>
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
            className={`lg:hidden bg-white/95 backdrop-blur-md ${isMenuOpen ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
          >
            <div className="container mx-auto px-4 py-6 space-y-6">
              <NavLink to="/" onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }}>
                {t('home')}
              </NavLink>
              <NavLink 
                to="/" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                {t('about')}
              </NavLink>
              <Link to="/produtos/vonic" className="block hover:text-[#CE171F] transition-colors font-medium">
                {t('products')}
              </Link>
              <NavLink 
                to="/" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                {t('contact')}
              </NavLink>
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
              
              <section id="mastip">
                <MastipSection />
              </section>

              <section id="sobre">
                <About />
              </section>
              
              <section id="servicos">
                <Services />
              </section>
              
              <section id="contato">
                <Contact />
              </section>
            </main>
          } />
          <Route path="/produtos/vonic" element={<VonicProducts />} />
          <Route path="/produtos/mastip" element={<MastipProducts />} />
        </Routes>

        <footer className="bg-gradient-vonic-dark text-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Mapa */}
              <div className="lg:col-span-2 h-[400px] rounded-tr-3xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0125431596584!2d-47.57424792374978!3d-23.49770845846391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58abf85e5ff59%3A0x7f1964c8b77e4f2e!2sVonic%20Systems!5e0!3m2!1spt-BR!2sbr!4v1709612345678!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Informações */}
              <div className="p-8 lg:p-12 bg-black/30 backdrop-blur-md rounded-bl-3xl">
                <img src={VonicLogo} alt="Vonic" className="h-12 mb-8" />
                
                <div className="space-y-8">
                  <div>
                    <h3 className="font-bold mb-4 text-lg">{t('contact')}</h3>
                    <ul className="space-y-3 text-white/80">
                      <li className="flex items-center space-x-2">
                        <FaEnvelope className="text-[#CE171F]" />
                        <span>marcos.moraes@vonicsystems.com.br</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <FaMapMarkerAlt className="text-[#CE171F]" />
                        <span>Salto de Pirapora - SP</span>
                      </li>
                      <li>
                        <a
                          href="https://wa.me/5515998024314"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#128C7E] px-4 py-2 rounded-full transition-colors mt-2"
                        >
                          <FaWhatsapp />
                          <span>WhatsApp Business</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold mb-4 text-lg">{t('social_media')}</h3>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="w-10 h-10 bg-white/10 hover:bg-[#CE171F] rounded-full flex items-center justify-center transition-colors"
                      >
                        <FaLinkedin className="text-white" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-white/10 hover:bg-[#CE171F] rounded-full flex items-center justify-center transition-colors"
                      >
                        <FaInstagram className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 mt-12 py-8 text-center text-white/60">
              <p>&copy; 2024 Vonic. {t('rights_reserved')}.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App; 