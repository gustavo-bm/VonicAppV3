import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import VonicLogo from '../../assets/VONIC.png';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const NavLink = ({ to, onClick, children }) => {
  const handleClick = (e) => {
    if (to.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(to.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        if (onClick) onClick();
      }
    }
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className="text-gray-800 hover:text-[#CE171F] transition-colors font-medium"
    >
      {children}
    </a>
  );
};

const ProductDropdown = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 z-50"
        >
          <Link
            to="/produtos/vonic"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={onClose}
          >
            {t('vonic_products')}
          </Link>
          <Link
            to="/produtos/mastip"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={onClose}
          >
            Mastip
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={VonicLogo} alt="Vonic Systems" className="h-8" style={{ width: 'auto', height: '7vh' }}/>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">{t('home')}</NavLink>
            <div 
              className="relative" 
              onMouseEnter={() => setIsProductsOpen(true)} 
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="text-gray-800 hover:text-[#CE171F] transition-colors font-medium flex items-center space-x-1">
                <span>{t('products')}</span>
                <FaChevronDown className={`transform transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              <ProductDropdown 
                isOpen={isProductsOpen} 
                onClose={() => {
                  setIsProductsOpen(false);
                  closeMenu();
                }} 
              />
            </div>
            <NavLink to="#sobre">{t('about')}</NavLink>
            <NavLink to="#contato">{t('contact')}</NavLink>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-[#CE171F] transition-colors"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <NavLink to="/" onClick={closeMenu}>{t('home')}</NavLink>
              <div className="space-y-2">
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex items-center justify-between w-full text-gray-800 hover:text-[#CE171F] transition-colors font-medium"
                >
                  <span>{t('products')}</span>
                  <FaChevronDown className={`transform transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="pl-4 space-y-2"
                    >
                      <div className="space-y-2">
                        <p className="font-medium text-gray-900">{t('vonic_products')}</p>
                        <div className="pl-4 space-y-2">
                          <Link
                            to="/produtos/vonic/novidades"
                            onClick={closeMenu}
                            className="block text-gray-600 hover:text-[#CE171F] transition-colors"
                          >
                            {t('new_releases')}
                          </Link>
                          <Link
                            to="/produtos/vonic/bicos"
                            onClick={closeMenu}
                            className="block text-gray-600 hover:text-[#CE171F] transition-colors"
                          >
                            {t('hot_nozzles')}
                          </Link>
                          <Link
                            to="/produtos/vonic/manifolds"
                            onClick={closeMenu}
                            className="block text-gray-600 hover:text-[#CE171F] transition-colors"
                          >
                            {t('manifolds')}
                          </Link>
                          <Link
                            to="/produtos/vonic/hot-half"
                            onClick={closeMenu}
                            className="block text-gray-600 hover:text-[#CE171F] transition-colors"
                          >
                            {t('hot_half')}
                          </Link>
                          <Link
                            to="/produtos/vonic/controladores"
                            onClick={closeMenu}
                            className="block text-gray-600 hover:text-[#CE171F] transition-colors"
                          >
                            {t('controllers')}
                          </Link>
                          <Link
                            to="/produtos/vonic/filtros"
                            onClick={closeMenu}
                            className="block text-gray-600 hover:text-[#CE171F] transition-colors"
                          >
                            {t('filters')}
                          </Link>
                        </div>
                      </div>
                      <div className="space-y-2 mt-4">
                        <p className="font-medium text-gray-900">Mastip</p>
                        <div className="pl-4 space-y-2">
                          <Link
                            to="/produtos/mastip/hot-halves"
                            onClick={closeMenu}
                            className="block text-gray-600 hover:text-[#CE171F] transition-colors"
                          >
                            Hot Halves
                          </Link>
                          <Link
                            to="/produtos/mastip/manifolds"
                            onClick={closeMenu}
                            className="block text-gray-600 hover:text-[#CE171F] transition-colors"
                          >
                            Manifold Systems
                          </Link>
                          <Link
                            to="/produtos/mastip/valve-gates"
                            onClick={closeMenu}
                            className="block text-gray-600 hover:text-[#CE171F] transition-colors"
                          >
                            Valve Gate Technology
                          </Link>
                          <Link
                            to="/produtos/mastip/nozzles"
                            onClick={closeMenu}
                            className="block text-gray-600 hover:text-[#CE171F] transition-colors"
                          >
                            Nozzles
                          </Link>
                          <Link
                            to="/produtos/mastip/controllers"
                            onClick={closeMenu}
                            className="block text-gray-600 hover:text-[#CE171F] transition-colors"
                          >
                            Temperature Controllers
                          </Link>
                          <Link
                            to="/produtos/mastip/sequential"
                            onClick={closeMenu}
                            className="block text-gray-600 hover:text-[#CE171F] transition-colors"
                          >
                            Sequential Controllers
                          </Link>
                          <Link
                            to="/produtos/mastip/cae"
                            onClick={closeMenu}
                            className="block text-gray-600 hover:text-[#CE171F] transition-colors"
                          >
                            CAE Services
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <NavLink to="#sobre" onClick={closeMenu}>{t('about')}</NavLink>
              <NavLink to="#contato" onClick={closeMenu}>{t('contact')}</NavLink>
              <div className="pt-2">
                <LanguageSelector />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 