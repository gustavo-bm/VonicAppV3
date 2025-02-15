import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaChevronRight } from 'react-icons/fa';

const ProductDropdown = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const vonicProducts = [
    { path: '/produtos/vonic/novidades', label: t('new_releases') },
    { path: '/produtos/vonic/bicos', label: t('hot_nozzles') },
    { path: '/produtos/vonic/manifolds', label: t('manifolds') },
    { path: '/produtos/vonic/hot-half', label: t('hot_half') },
    { path: '/produtos/vonic/controladores', label: t('controllers') },
    { path: '/produtos/vonic/filtros', label: t('filters') }
  ];

  const mastipProducts = [
    { path: '/produtos/mastip/hot-halves', label: 'Hot Halves' },
    { path: '/produtos/mastip/manifolds', label: 'Manifold Systems' },
    { path: '/produtos/mastip/valve-gates', label: 'Valve Gate Technology' },
    { path: '/produtos/mastip/nozzles', label: 'Nozzles' },
    { path: '/produtos/mastip/controllers', label: 'Temperature Controllers' },
    { path: '/produtos/mastip/sequential', label: 'Sequential Controllers' },
    { path: '/produtos/mastip/cae', label: 'CAE Services' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 w-[280px] bg-white rounded-lg shadow-xl py-2 z-50"
          onMouseLeave={() => setActiveSubmenu(null)}
        >
          <div
            className="relative px-4 py-2 hover:bg-gray-50 flex items-center justify-between cursor-pointer group"
            onMouseEnter={() => setActiveSubmenu('vonic')}
          >
            <Link
              to="/produtos/vonic"
              onClick={onClose}
              className="text-gray-800 group-hover:text-[#CE171F] transition-colors flex-grow"
            >
              {t('vonic_products')}
            </Link>
            <FaChevronRight className="text-gray-400 group-hover:text-[#CE171F] transition-colors" />
            
            {activeSubmenu === 'vonic' && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute left-full top-0 w-[240px] bg-white rounded-lg shadow-xl py-2 ml-2"
              >
                {vonicProducts.map((product, index) => (
                  <Link
                    key={index}
                    to={product.path}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-[#CE171F] transition-colors"
                    onClick={onClose}
                  >
                    {product.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>

          <div
            className="relative px-4 py-2 hover:bg-gray-50 flex items-center justify-between cursor-pointer group"
            onMouseEnter={() => setActiveSubmenu('mastip')}
          >
            <Link
              to="/produtos/mastip"
              onClick={onClose}
              className="text-gray-800 group-hover:text-[#CE171F] transition-colors flex-grow"
            >
              Mastip
            </Link>
            <FaChevronRight className="text-gray-400 group-hover:text-[#CE171F] transition-colors" />
            
            {activeSubmenu === 'mastip' && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute left-full top-0 w-[240px] bg-white rounded-lg shadow-xl py-2 ml-2"
              >
                {mastipProducts.map((product, index) => (
                  <Link
                    key={index}
                    to={product.path}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-[#CE171F] transition-colors"
                    onClick={onClose}
                  >
                    {product.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductDropdown; 