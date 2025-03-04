import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import BrFlag from '/br-flag.svg';
import UsFlag from '/us-flag.svg';

const LanguageSelector = ({ isMobile = false }) => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng).then(() => {
      localStorage.setItem('i18nextLng', lng);
    });
  };

  const isPortuguese = i18n.language === 'pt' || i18n.language === 'pt-BR';
  const isEnglish = i18n.language === 'en' || i18n.language === 'en-US';

  // Estilos ajustados para mobile
  const flagSize = isMobile ? 'w-12 h-12' : 'w-8 h-8';
  const containerClass = isMobile ? 'flex items-center justify-center w-full space-x-8' : 'flex items-center space-x-3';
  const textClass = isMobile ? 'text-sm font-bold' : 'text-xs';
  
  // Melhoria de contraste para versão mobile
  const inactiveOpacity = isMobile ? 'opacity-75 hover:opacity-100' : 'opacity-60 hover:opacity-90';
  const activeBorder = isMobile ? 'border-[#CE171F] shadow-lg shadow-red-200/30 border-2' : 'border-[#CE171F] shadow-red-200';
  
  return (
    <div className={containerClass}>
      {isMobile && (
        <div className="flex flex-col items-center">
          <motion.button
            onClick={() => changeLanguage('pt')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`flex flex-col items-center ${isPortuguese ? 'border-b-2 border-[#CE171F] pb-1' : ''}`}
          >
            <div className={`${flagSize} rounded-full overflow-hidden transition-all duration-300 ${
              isPortuguese ? activeBorder : `border ${inactiveOpacity}`
            }`}>
              <img src={BrFlag} alt="Português" className="w-full h-full object-cover" />
            </div>
            <span className={`mt-2 ${textClass} transition-colors duration-300 ${
              isPortuguese ? 'text-[#CE171F] font-bold' : 'text-gray-600'
            }`}>Português</span>
          </motion.button>
        </div>
      )}
      
      {!isMobile && (
        <motion.button
          onClick={() => changeLanguage('pt')}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`relative group flex flex-col items-center`}
        >
          <div className={`${flagSize} rounded-full overflow-hidden border-2 transition-all duration-300 ${
            isPortuguese ? activeBorder : `border-transparent ${inactiveOpacity}`
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
          
          <span className={`absolute top-full mt-1 ${textClass} transition-opacity duration-300 ${
            isPortuguese ? 'opacity-100 text-gray-700' : `opacity-0 group-hover:${inactiveOpacity} text-gray-500`
          }`}>PT</span>
        </motion.button>
      )}
      
      {isMobile && (
        <div className="flex flex-col items-center">
          <motion.button
            onClick={() => changeLanguage('en')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`flex flex-col items-center ${isEnglish ? 'border-b-2 border-[#CE171F] pb-1' : ''}`}
          >
            <div className={`${flagSize} rounded-full overflow-hidden transition-all duration-300 ${
              isEnglish ? activeBorder : `border ${inactiveOpacity}`
            }`}>
              <img src={UsFlag} alt="English" className="w-full h-full object-cover" />
            </div>
            <span className={`mt-2 ${textClass} transition-colors duration-300 ${
              isEnglish ? 'text-[#CE171F] font-bold' : 'text-gray-600'
            }`}>English</span>
          </motion.button>
        </div>
      )}
      
      {!isMobile && (
        <motion.button
          onClick={() => changeLanguage('en')}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`relative group flex flex-col items-center`}
        >
          <div className={`${flagSize} rounded-full overflow-hidden border-2 transition-all duration-300 ${
            isEnglish ? activeBorder : `border-transparent ${inactiveOpacity}`
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
          
          <span className={`absolute top-full mt-1 ${textClass} transition-opacity duration-300 ${
            isEnglish ? 'opacity-100 text-gray-700' : `opacity-0 group-hover:${inactiveOpacity} text-gray-500`
          }`}>EN</span>
        </motion.button>
      )}
    </div>
  );
};

export default LanguageSelector; 