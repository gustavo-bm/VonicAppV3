import React, { useState, useEffect, useCallback, memo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import ProductDropdown from './ProductDropdown';
import VonicLogo from '../../assets/VONIC.png';

const NavLink = memo(({ to, onClick, children, isActive, sectionId }) => (
  <motion.button
    onClick={onClick}
    className={`relative h-full px-4 text-base font-medium transition-colors flex items-center ${isActive ? 'text-[#CE171F]' : 'text-gray-700 hover:text-[#CE171F]'
      }`}
  >
    {children}
    <AnimatePresence>
      {isActive && (
        <motion.div
          layoutId={`navSection-${sectionId}`}
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
));

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const sections = ['home', 'sobre', 'servicos', 'projects', 'contato'];

  const determineActiveSection = useCallback((scrollPosition) => {
    let newSection = 'home';
    let minDistance = Infinity;
    const viewportHeight = window.innerHeight;
    const threshold = 100; // Ajuste de tolerância para melhor detecção

    // Verificar se a seção mastip está visível - se estiver, considerá-la como parte da Home
    const mastipElement = document.getElementById('mastip');
    if (mastipElement) {
      const { offsetTop, offsetHeight } = mastipElement;
      const isInMastipView = offsetTop - threshold <= scrollPosition &&
        scrollPosition <= (offsetTop + offsetHeight - threshold);

      if (isInMastipView) {
        return 'home';
      }
    }

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
    // Verifica se é apenas uma mudança de idioma, não uma navegação real
    const isLanguageChange = location.search.includes('lng=') ||
      (location.state && location.state.languageChange);

    if (location.pathname !== '/' && !isLanguageChange) {
      setActiveSection('');
    } else if (!isLanguageChange) {
      const scrollPosition = window.scrollY + 60;
      const newSection = determineActiveSection(scrollPosition);
      setActiveSection(newSection);
    }
    // Note que não alteramos o activeSection se for apenas uma mudança de idioma
  }, [location.pathname, location.search, determineActiveSection]);

  // Efeito para lidar com a navegação para seções específicas após redirecionamento
  useEffect(() => {
    // Verificar se temos uma seção alvo no state da location
    if (location.pathname === '/' && location.state && location.state.targetSection) {
      const targetSection = location.state.targetSection;

      // Aguardar um pouco para garantir que a página esteja carregada
      const timer = setTimeout(() => {
        const element = document.getElementById(targetSection);
        if (element) {
          // Usar a função utilitária para fazer scroll
          scrollToSection(targetSection);
          setActiveSection(targetSection);
        }

        // Limpar o state para não repetir o scroll em navegações futuras
        navigate('/', { state: {}, replace: true });
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.state, navigate]);

  // Fechar o menu mobile quando mudar de rota
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const handleNavClick = (sectionId) => {
    // Fechar o menu mobile e dropdown ao clicar em um link
    setIsMobileOpen(false);
    setIsProductsOpen(false);

    const currentPath = location.pathname;

    if (currentPath === '/') {
      // Se já estiver na página inicial, apenas rola para a seção
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        // Usando a função utilitária para fazer scroll
        scrollToSection(sectionId);
        setActiveSection(sectionId);
      }
    } else {
      // Se estiver em outra página, primeiro navega para a home e configura para rolar para a seção depois
      navigate('/', { state: { targetSection: sectionId } });
      // O restante da navegação será tratado no useEffect que escuta as mudanças de location
      setActiveSection(sectionId);
    }
  };

  // Para todos os itens de menu mobile que navegam para seções na página inicial
  const handleMobileNavClick = (sectionId) => {
    // Fechar o menu mobile antes de tentar fazer o scroll
    setIsMobileOpen(false);

    const currentPath = location.pathname;

    if (currentPath === '/') {
      // Usar um timeout maior para garantir que o menu já fechou completamente
      setTimeout(() => {
        scrollToSection(sectionId);
        setActiveSection(sectionId);
      }, 100);
    } else {
      // Se estiver em outra página, navega para a home com estado
      navigate('/', { state: { targetSection: sectionId } });
    }
  };

  // Função utilitária para fazer scroll para a seção com ajuste para mobile
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    // Calcular a posição com ajuste para o header
    const headerHeight = 80; // Altura aproximada do header
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight;

    // Usar um timeout maior para dispositivos móveis para garantir que a UI está estável
    const isMobile = window.innerWidth < 768;
    const scrollDelay = isMobile ? 300 : 100;

    setTimeout(() => {
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }, scrollDelay);
  };

  return (
    <motion.header
      animate={{
        height: isScrolled ? 80 : 95,
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
                height: isScrolled ? 45 : 50,
                filter: isScrolled ? 'drop-shadow(0 2px 2px rgba(0,0,0,0.1))' : 'drop-shadow(0 4px 4px rgba(0,0,0,0.15))',
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="object-contain"
              style={{ height: 50, width: 'auto' }} // Tamanho fixo para evitar redimensionamento abrupto
            />
          </Link>

          <div className="hidden lg:flex items-center h-full">
            <NavLink
              to="/"
              onClick={() => handleNavClick('home')}
              isActive={location.pathname === '/' && activeSection === 'home'}
              sectionId="home"
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
                  navigate('/produtos/vonic');
                  window.scrollTo(0, 0);
                }}
                isActive={location.pathname.includes('/produtos')}
                sectionId="products"
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
              sectionId="sobre"
            >
              {t('navigation.about')}
            </NavLink>

            <NavLink
              to="/"
              onClick={() => handleNavClick('servicos')}
              isActive={location.pathname === '/' && activeSection === 'servicos'}
              sectionId="servicos"
            >
              {t('navigation.services')}
            </NavLink>

            <NavLink
              to="/"
              onClick={() => handleNavClick('projects')}
              isActive={location.pathname === '/' && activeSection === 'projects'}
              sectionId="projects"
            >
              {t('navigation.projects')}
            </NavLink>

            <NavLink
              to="/"
              onClick={() => handleNavClick('contato')}
              isActive={location.pathname === '/' && activeSection === 'contato'}
              sectionId="contato"
            >
              {t('navigation.contact')}
            </NavLink>

            <div className="ml-4 h-full border-l border-gray-200 pl-4 flex items-center">
              <LanguageSelector isMobile={false} />
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
            className="lg:hidden bg-white shadow-lg overflow-hidden z-50 relative"
          >
            {/* Seletor de Idioma - Na parte superior sem padding ao redor */}
            <div className="flex items-center justify-center px-4 py-4 bg-gray-50 border-b border-gray-200">
              <LanguageSelector isMobile={true} />
            </div>

            <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
              {/* Item Home */}
              <motion.div
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="py-3 border-b border-gray-100"
              >
                <div
                  className={`flex items-center justify-between ${location.pathname === '/' && activeSection === 'home' ? 'text-[#CE171F] font-medium' : 'text-gray-700'}`}
                  onClick={() => handleMobileNavClick('home')}
                >
                  <span>{t('navigation.home')}</span>
                  <FaChevronRight className="text-xs opacity-50" />
                </div>
              </motion.div>

              {/* Item Produtos com submenu */}
              <motion.div className="py-3 border-b border-gray-100">
                <motion.div
                  className={`flex items-center justify-between ${location.pathname.includes('/produtos') ? 'text-[#CE171F] font-medium' : 'text-gray-700'}`}
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  <span>{t('navigation.products')}</span>
                  <motion.div
                    animate={{ rotate: isProductsOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-xs opacity-50" />
                  </motion.div>
                </motion.div>

                {/* Submenu de Produtos */}
                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 ml-4 flex flex-col space-y-3"
                    >
                      <motion.div
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center text-gray-600 hover:text-[#CE171F]"
                        onClick={() => {
                          navigate('/produtos/vonic');
                          window.scrollTo(0, 0);
                          setIsMobileOpen(false);
                        }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#CE171F] mr-2"></div>
                        <span>Vonic Systems</span>
                      </motion.div>

                      <motion.div
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center text-gray-600 hover:text-[#CE171F]"
                        onClick={() => {
                          navigate('/produtos/mastip');
                          window.scrollTo(0, 0);
                          setIsMobileOpen(false);
                        }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#CE171F] mr-2"></div>
                        <span>Mastip</span>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Item Sobre */}
              <motion.div
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="py-3 border-b border-gray-100"
              >
                <div
                  className={`flex items-center justify-between ${location.pathname === '/' && activeSection === 'sobre' ? 'text-[#CE171F] font-medium' : 'text-gray-700'}`}
                  onClick={() => handleMobileNavClick('sobre')}
                >
                  <span>{t('navigation.about')}</span>
                  <FaChevronRight className="text-xs opacity-50" />
                </div>
              </motion.div>

              {/* Item Serviços */}
              <motion.div
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="py-3 border-b border-gray-100"
              >
                <div
                  className={`flex items-center justify-between ${location.pathname === '/' && activeSection === 'servicos' ? 'text-[#CE171F] font-medium' : 'text-gray-700'}`}
                  onClick={() => handleMobileNavClick('servicos')}
                >
                  <span>{t('navigation.services')}</span>
                  <FaChevronRight className="text-xs opacity-50" />
                </div>
              </motion.div>

              {/* Item Projetos */}
              <motion.div
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="py-3 border-b border-gray-100"
              >
                <div
                  className={`flex items-center justify-between ${location.pathname === '/' && activeSection === 'projects' ? 'text-[#CE171F] font-medium' : 'text-gray-700'}`}
                  onClick={() => handleMobileNavClick('projects')}
                >
                  <span>{t('navigation.projects')}</span>
                  <FaChevronRight className="text-xs opacity-50" />
                </div>
              </motion.div>

              {/* Item Contato */}
              <motion.div
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="py-3 border-b border-gray-100"
              >
                <div
                  className={`flex items-center justify-between ${location.pathname === '/' && activeSection === 'contato' ? 'text-[#CE171F] font-medium' : 'text-gray-700'}`}
                  onClick={() => handleMobileNavClick('contato')}
                >
                  <span>{t('navigation.contact')}</span>
                  <FaChevronRight className="text-xs opacity-50" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;