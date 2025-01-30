import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ProductDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="hover:text-[#CE171F] transition-colors font-medium">
        {t('products')}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50"
          >
            <Link
              to="/produtos/vonic"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#CE171F] transition-colors"
            >
              {t('vonic_products')}
            </Link>
            <Link
              to="/produtos/mastip"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#CE171F] transition-colors"
            >
              Mastip
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDropdown; 