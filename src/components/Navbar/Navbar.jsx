import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import ProductDropdown from './ProductDropdown';
import VonicLogo from '../../assets/VONIC.png';

const NavLink = ({ to, onClick, children, isActive }) => (
  <motion.button
    onClick={onClick}
    className={`relative h-full px-4 text-base font-medium transition-colors flex items-center ${
      isActive ? 'text-[#CE171F]' : 'text-gray-700 hover:text-[#CE171F]'
    }`}
  >
    {children}
    <AnimatePresence>
      {isActive && (
        <motion.div
          layoutId="activeSection"
          initial={{ opacity: 0, width: '0%' }}
          animate={{ opacity: 1, width: '100%' }}
          exit={{ opacity: 0, width: '0%' }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CE171F]"
          transition={{ 
            type: "spring",
            stiffness: 500,
            damping: 35,
            mass: 1
          }}
        />
      )}
    </AnimatePresence>
  </motion.button>
);

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const location = useLocation();

  const sections = ['home', 'sobre', 'servicos', 'parceiros', 'contato'];

  const determineActiveSection = useCallback((scrollPosition) => {
    let newSection = 'home';
    let minDistance = Infinity;
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        const distance = Math.abs(scrollPosition - (offsetTop - 60));
        
        if (distance < minDistance) {
          minDistance = distance;
          newSection = section;
        }
      }
    }
    
    return newSection;
  }, [sections]);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      if (location.pathname === '/') {
        const scrollPosition = window.scrollY + 60;
        setIsScrolled(window.scrollY > 30);
        
        if (!isScrolling) {
          setIsScrolling(true);
        }

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
          const newSection = determineActiveSection(scrollPosition);
          setActiveSection(newSection);
        }, 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [location.pathname, determineActiveSection, isScrolling]);

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
    } else {
      const scrollPosition = window.scrollY + 60;
      const newSection = determineActiveSection(scrollPosition);
      setActiveSection(newSection);
    }
  }, [location.pathname, determineActiveSection]);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      setActiveSection(sectionId);
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleNavigation = useCallback((sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      scrollToSection(sectionId);
      setIsMobileOpen(false);
    }
  }, [location.pathname, scrollToSection]);

  return (
    <motion.header
      animate={{
        height: isScrolled ? 60 : 70,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 1)',
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 shadow-lg backdrop-blur-sm"
    >
      <nav className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center h-full py-2">
            <motion.img
              src={VonicLogo}
              alt="Vonic Systems"
              animate={{ height: isScrolled ? 35 : 40 }}
              transition={{ duration: 0.3 }}
              className="object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center h-full">
            <NavLink
              to="/"
              onClick={() => handleNavigation('home')}
              isActive={location.pathname === '/' && activeSection === 'home'}
            >
              {t('navigation.home')}
            </NavLink>

            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <NavLink
                to="/produtos/vonic"
                onClick={() => window.location.href = '/produtos/vonic'}
                isActive={location.pathname.includes('/produtos')}
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
              isActive={location.pathname === '/' && activeSection === 'sobre'}
            >
              {t('navigation.about')}
            </NavLink>

            <NavLink
              to="/"
              onClick={() => handleNavigation('servicos')}
              isActive={location.pathname === '/' && activeSection === 'servicos'}
            >
              {t('navigation.services')}
            </NavLink>

            <NavLink
              to="/"
              onClick={() => handleNavigation('parceiros')}
              isActive={location.pathname === '/' && activeSection === 'parceiros'}
            >
              {t('navigation.partners')}
            </NavLink>

            <NavLink
              to="/"
              onClick={() => handleNavigation('contato')}
              isActive={location.pathname === '/' && activeSection === 'contato'}
            >
              {t('navigation.contact')}
            </NavLink>

            <div className="ml-4 h-full border-l border-gray-200 pl-4">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
