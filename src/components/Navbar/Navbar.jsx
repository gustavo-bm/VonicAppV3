import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import ProductDropdown from './ProductDropdown';
import VonicLogo from '../../assets/VONIC.png';

const NavLink = ({ to, onClick, children, isActive }) => (
  <button
    onClick={onClick}
    className={`px-4 py-3 text-lg font-medium transition-colors relative ${
      isActive ? 'text-[#CE171F]' : 'text-gray-800 hover:text-[#CE171F]'
    }`}
  >
    {children}
    {isActive && (
      <motion.div
        layoutId="underline"
        className="absolute top-0 left-0 right-0 h-0.5 bg-[#CE171F]"
      />
    )}
  </button>
);

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'sobre', 'servicos', 'parceiros', 'contato'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavigation = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <motion.header
      initial={false}
      animate={{
        height: isScrolled ? 80 : 100,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 1)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 shadow-lg"
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center">
            <motion.img
              src={VonicLogo}
              alt="Vonic Systems"
              animate={{ height: isScrolled ? 48 : 64 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            <NavLink
              to="/"
              onClick={() => handleNavigation('home')}
              isActive={activeSection === 'home'}
            >
              {t('navigation.home')}
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <NavLink
                to="/produtos"
                onClick={() => {}}
                isActive={activeSection === 'produtos'}
              >
                <span className="flex items-center">
                  {t('navigation.products')}
                  <FaChevronDown className="ml-1 text-sm" />
                </span>
              </NavLink>
              <ProductDropdown isOpen={isProductsOpen} onClose={() => setIsProductsOpen(false)} />
            </div>

            <NavLink
              to="/"
              onClick={() => handleNavigation('sobre')}
              isActive={activeSection === 'sobre'}
            >
              {t('navigation.about')}
            </NavLink>

            <NavLink
              to="/"
              onClick={() => handleNavigation('servicos')}
              isActive={activeSection === 'servicos'}
            >
              {t('navigation.services')}
            </NavLink>

            <NavLink
              to="/"
              onClick={() => handleNavigation('parceiros')}
              isActive={activeSection === 'parceiros'}
            >
              {t('navigation.partners')}
            </NavLink>

            <NavLink
              to="/"
              onClick={() => handleNavigation('contato')}
              isActive={activeSection === 'contato'}
            >
              {t('navigation.contact')}
            </NavLink>

            <div className="ml-4">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar; 