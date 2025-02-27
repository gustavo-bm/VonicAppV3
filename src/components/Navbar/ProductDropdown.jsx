import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const ProductDropdown = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [activeSubmenu, setActiveSubmenu] = useState(null);

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
          className="absolute top-[calc(100%+1px)] left-0 min-w-[240px] bg-white shadow-lg rounded-lg py-2 z-50"
          onMouseEnter={() => setActiveSubmenu(null)}
        >
          <div className="space-y-1">
            {/* Vonic Products */}
            <div
              className="relative"
              onMouseEnter={() => setActiveSubmenu('vonic')}
            >
              <Link
                to="/produtos/vonic"
                onClick={onClose}
                className="block px-6 py-2 text-gray-800 hover:text-[#CE171F] hover:bg-gray-50 transition-colors"
              >
                {t('vonic.title')}
              </Link>
              <AnimatePresence>
                {activeSubmenu === 'vonic' && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="absolute left-full top-0 w-64 bg-white shadow-lg rounded-lg py-2"
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
                to="/produtos/mastip"
                onClick={onClose}
                className="block px-6 py-2 text-gray-800 hover:text-[#CE171F] hover:bg-gray-50 transition-colors"
              >
                {t('mastip.title')}
              </Link>
              <AnimatePresence>
                {activeSubmenu === 'mastip' && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="absolute left-full top-0 w-64 bg-white shadow-lg rounded-lg py-2"
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