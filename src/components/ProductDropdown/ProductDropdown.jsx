import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

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
          className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-4 z-50"
          onMouseLeave={() => setActiveSubmenu(null)}
        >
          <div className="space-y-4">
            {/* Vonic Products */}
            <div
              className="relative"
              onMouseEnter={() => setActiveSubmenu('vonic')}
            >
              <Link
                to="/produtos/vonic/novidades"
                onClick={onClose}
                className="block px-6 py-2 text-gray-800 hover:text-[#CE171F] hover:bg-gray-50 transition-colors"
              >
                {t('vonic_products')}
              </Link>
              <AnimatePresence>
                {activeSubmenu === 'vonic' && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="absolute left-full top-0 w-64 bg-white shadow-lg rounded-lg py-4"
                  >
                    {vonicProducts.map((product) => (
                      <Link
                        key={product.path}
                        to={product.path}
                        onClick={onClose}
                        className="block px-6 py-2 text-gray-800 hover:text-[#CE171F] hover:bg-gray-50 transition-colors"
                      >
                        {product.label}
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
                to="/produtos/mastip/hot-halves"
                onClick={onClose}
                className="block px-6 py-2 text-gray-800 hover:text-[#CE171F] hover:bg-gray-50 transition-colors"
              >
                Mastip
              </Link>
              <AnimatePresence>
                {activeSubmenu === 'mastip' && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="absolute left-full top-0 w-64 bg-white shadow-lg rounded-lg py-4"
                  >
                    {mastipProducts.map((product) => (
                      <Link
                        key={product.path}
                        to={product.path}
                        onClick={onClose}
                        className="block px-6 py-2 text-gray-800 hover:text-[#CE171F] hover:bg-gray-50 transition-colors"
                      >
                        {product.label}
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