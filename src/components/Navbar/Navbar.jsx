import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import ProductDropdown from './ProductDropdown';
import VonicLogo from '../../assets/VONIC.png';

const NavLink = ({ to, onClick, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-4 py-2 font-medium transition-colors relative ${
        isActive ? 'text-[#CE171F]' : 'text-gray-800 hover:text-[#CE171F]'
      }`}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="underline"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CE171F]"
        />
      )}
    </Link>
  );
};

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <img src={VonicLogo} alt="Vonic" className="h-12" />
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            <NavLink to="/">{t('navigation.home')}</NavLink>
            <NavLink to="/sobre">{t('navigation.about')}</NavLink>
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="px-4 py-2 font-medium text-gray-800 hover:text-[#CE171F] transition-colors flex items-center space-x-1">
                <span>{t('navigation.products')}</span>
                <FaChevronDown className="w-4 h-4" />
              </button>
              <ProductDropdown isOpen={isProductsOpen} onClose={() => setIsProductsOpen(false)} />
            </div>
            <NavLink to="/parceiros">{t('navigation.partners')}</NavLink>
            <NavLink to="/contato">{t('navigation.contact')}</NavLink>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSelector />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar; 