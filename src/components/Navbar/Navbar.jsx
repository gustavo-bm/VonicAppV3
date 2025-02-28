import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#CE171F] to-[#CE171F]/60 rounded-full"
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
  const navigate = useNavigate();

  const sections = ['home', 'sobre', 'servicos', 'parceiros', 'contato'];

  const determineActiveSection = useCallback((scrollPosition) => {
    let newSection = 'home';
    let minDistance = Infinity;
    const viewportHeight = window.innerHeight;
    const threshold = 100; // Ajuste de tolerância para melhor detecção
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        const elementCenter = offsetTop + (offsetHeight / 2);
        const distance = Math.abs(scrollPosition - (offsetTop - 60));
        const isInView = offsetTop - threshold <= scrollPosition && 
                        scrollPosition <= (offsetTop + offsetHeight - threshold);
        
        // Prioriza elementos que estão atualmente visíveis na viewport
        if (isInView && distance < minDistance) {
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
          if (newSection !== activeSection) {
            setActiveSection(newSection);
          }
        }, 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [location.pathname, determineActiveSection, isScrolling, activeSection]);

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
    } else {
      const scrollPosition = window.scrollY + 60;
      const newSection = determineActiveSection(scrollPosition);
      setActiveSection(newSection);
    }
  }, [location.pathname, determineActiveSection]);

  const handleNavClick = (sectionId) => {
    const currentPath = location.pathname;
    
    if (currentPath === '/') {
      // Se já estiver na página inicial, apenas rola para a seção
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    } else {
      // Se estiver em outra página, primeiro navega para a home e configura para rolar para a seção depois
      navigate('/');
      // Aguarda o carregamento da página e depois rola para a seção
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (sectionId !== 'home') {
          setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
        setActiveSection(sectionId);
      }, 50);
    }
  };

  return (
    <motion.header
      animate={{
        height: isScrolled ? 70 : 85,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.98)',
        backdropFilter: isScrolled ? 'blur(8px)' : 'blur(4px)',
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 shadow-md"
    >
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-70"></div>
      
      <nav className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          <Link 
            to="/" 
            className="inline-flex items-center h-full"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection('home');
            }}
          >
            <motion.img
              src={VonicLogo}
              alt="Vonic Systems"
              animate={{ 
                height: isScrolled ? 35 : 40,
                filter: isScrolled ? 'drop-shadow(0 2px 2px rgba(0,0,0,0.1))' : 'drop-shadow(0 4px 4px rgba(0,0,0,0.15))'
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center h-full">
            <NavLink
              to="/"
              onClick={() => handleNavClick('home')}
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
                onClick={() => {
                  window.location.href = '/produtos/vonic';
                  window.scrollTo(0, 0);
                }}
                isActive={location.pathname.includes('/produtos')}
              >
                <span className="flex items-center">
                  {t('navigation.products')}
                  <FaChevronDown className="ml-1 text-sm transition-transform duration-300 transform group-hover:rotate-180" />
                </span>
              </NavLink>
              <ProductDropdown isOpen={isProductsOpen} onClose={() => setIsProductsOpen(false)} />
            </div>

            <NavLink
              to="/"
              onClick={() => handleNavClick('sobre')}
              isActive={location.pathname === '/' && activeSection === 'sobre'}
            >
              {t('navigation.about')}
            </NavLink>

            <NavLink
              to="/"
              onClick={() => handleNavClick('servicos')}
              isActive={location.pathname === '/' && activeSection === 'servicos'}
            >
              {t('navigation.services')}
            </NavLink>

            <NavLink
              to="/"
              onClick={() => handleNavClick('parceiros')}
              isActive={location.pathname === '/' && activeSection === 'parceiros'}
            >
              {t('navigation.partners')}
            </NavLink>

            <NavLink
              to="/"
              onClick={() => handleNavClick('contato')}
              isActive={location.pathname === '/' && activeSection === 'contato'}
            >
              {t('navigation.contact')}
            </NavLink>

            <div className="ml-4 h-full border-l border-gray-200 pl-4 flex items-center">
              <LanguageSelector />
            </div>
          </div>
          
          <motion.button
            className="lg:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileOpen ? (
              <FaTimes className="text-lg text-gray-700" />
            ) : (
              <FaBars className="text-lg text-gray-700" />
            )}
          </motion.button>
        </div>
      </nav>
      
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="container mx-auto py-4 px-6">
              {/* Mobile menu items will go here */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
