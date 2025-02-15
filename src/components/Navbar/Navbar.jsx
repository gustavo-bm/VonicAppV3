import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import VonicLogo from '../../assets/VONIC.png';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

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

const ProductsDropdown = ({ isOpen, onClose }) => {
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
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-12 w-auto"
                src={VonicLogo}
                alt="Vonic Systems"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink to="/">{t('home')}</NavLink>
            <NavLink to="/about">{t('about')}</NavLink>
            <div className="relative">
              <button
                className="relative font-medium text-gray-800 hover:text-[#CE171F] transition-colors group py-8"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                {t('products')}
                <span className="absolute bottom-6 left-0 w-0 h-0.5 bg-[#CE171F] transition-all duration-300 group-hover:w-full" />
              </button>
              <div
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <ProductsDropdown
                  isOpen={isProductsOpen}
                  onClose={() => setIsProductsOpen(false)}
                />
              </div>
            </div>
            <NavLink to="/contact">{t('contact')}</NavLink>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-[#CE171F] focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-[#CE171F]"
                onClick={closeMenu}
              >
                {t('home')}
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-[#CE171F]"
                onClick={closeMenu}
              >
                {t('about')}
              </Link>
              <div>
                <button
                  className="w-full text-left px-3 py-2 text-base font-medium text-gray-800 hover:text-[#CE171F]"
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  {t('products')}
                </button>
                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-6"
                    >
                      <Link
                        to="/produtos/vonic"
                        className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-[#CE171F]"
                        onClick={closeMenu}
                      >
                        {t('vonic_products')}
                      </Link>
                      <Link
                        to="/produtos/mastip"
                        className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-[#CE171F]"
                        onClick={closeMenu}
                      >
                        Mastip
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-[#CE171F]"
                onClick={closeMenu}
              >
                {t('contact')}
              </Link>
              <div className="px-3 py-2">
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