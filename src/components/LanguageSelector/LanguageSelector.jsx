import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import BrFlag from '/br-flag.svg';
import UsFlag from '/us-flag.svg';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng).then(() => {
      localStorage.setItem('i18nextLng', lng);
    });
  };

  const isPortuguese = i18n.language === 'pt' || i18n.language === 'pt-BR';
  const isEnglish = i18n.language === 'en' || i18n.language === 'en-US';

  return (
    <div className="flex items-center space-x-3">
      <motion.button
        onClick={() => changeLanguage('pt')}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={`relative group flex flex-col items-center`}
      >
        <div className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all duration-300 shadow-sm ${
          isPortuguese ? 'border-[#CE171F] shadow-red-200' : 'border-transparent opacity-60 hover:opacity-90'
        }`}>
          <img src={BrFlag} alt="Português" className="w-full h-full object-cover" />
        </div>
        
        {isPortuguese && (
          <motion.div 
            layoutId="activeLanguage"
            className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-[#CE171F]"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        
        <span className={`absolute top-full mt-1 text-xs font-medium transition-opacity duration-300 ${
          isPortuguese ? 'opacity-100 text-gray-700' : 'opacity-0 group-hover:opacity-60 text-gray-500'
        }`}>PT</span>
      </motion.button>
      
      <motion.button
        onClick={() => changeLanguage('en')}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className={`relative group flex flex-col items-center`}
      >
        <div className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all duration-300 shadow-sm ${
          isEnglish ? 'border-[#CE171F] shadow-red-200' : 'border-transparent opacity-60 hover:opacity-90'
        }`}>
          <img src={UsFlag} alt="English" className="w-full h-full object-cover" />
        </div>
        
        {isEnglish && (
          <motion.div 
            layoutId="activeLanguage"
            className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-[#CE171F]"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        
        <span className={`absolute top-full mt-1 text-xs font-medium transition-opacity duration-300 ${
          isEnglish ? 'opacity-100 text-gray-700' : 'opacity-0 group-hover:opacity-60 text-gray-500'
        }`}>EN</span>
      </motion.button>
    </div>
  );
};

export default LanguageSelector; 