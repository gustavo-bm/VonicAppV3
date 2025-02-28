import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const ProductDropdown = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  // Função para navegar e rolar para o topo
  const handleNavigation = (closeMenu) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (closeMenu) {
      onClose();
    }
  };

  const vonicProducts = [
    { path: '/produtos/vonic/novidades', label: t('vonic.new_releases') },
    { path: '/produtos/vonic/bicos', label: t('vonic.nozzles') },
    { path: '/produtos/vonic/manifolds', label: t('vonic.manifolds') },
    { path: '/produtos/vonic/hot-half', label: t('vonic.hot_half') },
    { path: '/produtos/vonic/controladores', label: t('vonic.controllers') },
    { path: '/produtos/vonic/filtros', label: t('vonic.filters') }
  ];

  const mastipProducts = [
    { path: '/produtos/mastip/hot-halves', label: t('mastip.hot_halves') },
    { path: '/produtos/mastip/manifolds', label: t('mastip.manifolds') },
    { path: '/produtos/mastip/valve-gates', label: t('mastip.valve_gates') },
    { path: '/produtos/mastip/nozzles', label: t('mastip.nozzles') },
    { path: '/produtos/mastip/controllers', label: t('mastip.controllers') },
    { path: '/produtos/mastip/sequential', label: t('mastip.sequential') },
    { path: '/produtos/mastip/cae', label: t('mastip.cae') }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-[calc(100%+1px)] left-0 min-w-[260px] bg-white/95 backdrop-blur-md shadow-lg rounded-lg p-3 z-50 border border-gray-100"
          onMouseEnter={() => setActiveSubmenu(null)}
        >
          <div className="space-y-2">
            {/* Vonic Products */}
            <div
              className="relative"
              onMouseEnter={() => setActiveSubmenu('vonic')}
            >
              <Link
                to="/produtos/vonic"
                onClick={() => handleNavigation(true)}
                className="block px-4 py-2.5 text-gray-800 hover:text-[#CE171F] rounded-md hover:bg-gray-50 transition-colors font-medium flex items-center justify-between group"
              >
                <span>{t('vonic.title')}</span>
                <motion.span 
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <FaArrowRight className="text-xs text-[#CE171F]" />
                </motion.span>
              </Link>
              <AnimatePresence>
                {activeSubmenu === 'vonic' && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="absolute left-full top-0 w-72 bg-white/95 backdrop-blur-md shadow-lg rounded-lg p-3 border border-gray-100"
                  >
                    <div className="border-b border-gray-100 pb-2 mb-2">
                      <span className="text-sm font-semibold text-gray-500 px-4">Produtos Vonic</span>
                    </div>
                    {vonicProducts.map((product) => (
                      <Link
                        key={product.path}
                        to={product.path}
                        onClick={() => handleNavigation(true)}
                        className="block px-4 py-2 text-gray-700 hover:text-[#CE171F] rounded-md hover:bg-gray-50 transition-colors flex items-center justify-between group"
                      >
                        <span>{product.label}</span>
                        <motion.span 
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <FaArrowRight className="text-xs text-[#CE171F]" />
                        </motion.span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mastip Products */}
            <div
              className="relative"
              onMouseEnter={() => setActiveSubmenu('mastip')}
            >
              <Link
                to="/produtos/mastip"
                onClick={() => handleNavigation(true)}
                className="block px-4 py-2.5 text-gray-800 hover:text-[#CE171F] rounded-md hover:bg-gray-50 transition-colors font-medium flex items-center justify-between group"
              >
                <span>{t('mastip.title')}</span>
                <motion.span 
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <FaArrowRight className="text-xs text-[#CE171F]" />
                </motion.span>
              </Link>
              <AnimatePresence>
                {activeSubmenu === 'mastip' && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="absolute left-full top-0 w-72 bg-white/95 backdrop-blur-md shadow-lg rounded-lg p-3 border border-gray-100"
                  >
                    <div className="border-b border-gray-100 pb-2 mb-2">
                      <span className="text-sm font-semibold text-gray-500 px-4">Produtos Mastip</span>
                    </div>
                    {mastipProducts.map((product) => (
                      <Link
                        key={product.path}
                        to={product.path}
                        onClick={() => handleNavigation(true)}
                        className="block px-4 py-2 text-gray-700 hover:text-[#CE171F] rounded-md hover:bg-gray-50 transition-colors flex items-center justify-between group"
                      >
                        <span>{product.label}</span>
                        <motion.span 
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <FaArrowRight className="text-xs text-[#CE171F]" />
                        </motion.span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductDropdown; 