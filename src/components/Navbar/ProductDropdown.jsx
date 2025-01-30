import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const ProductDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button 
        className="flex items-center space-x-1 hover:text-red-600 transition-colors font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>PRODUTOS</span>
        <FaChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-sm z-50"
          >
            <a 
              href="/produtos/vonic" 
              className="block px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-red-600 transition-colors border-b border-gray-100"
            >
              Vonic
            </a>
            <a 
              href="/produtos/mastip" 
              className="block px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              Mastip
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDropdown; 