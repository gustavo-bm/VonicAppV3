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
      // Não precisamos mais forçar o reload da página
    });
  };

  return (
    <div className="flex items-center space-x-3">
      <motion.button
        onClick={() => changeLanguage('pt')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all ${
          i18n.language === 'pt' || i18n.language === 'pt-BR'
            ? 'border-[#CE171F] shadow-lg'
            : 'border-transparent opacity-70 hover:opacity-100'
        }`}
      >
        <img src={BrFlag} alt="Português" className="w-full h-full object-cover" />
      </motion.button>
      
      <motion.button
        onClick={() => changeLanguage('en')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all ${
          i18n.language === 'en' || i18n.language === 'en-US'
            ? 'border-[#CE171F] shadow-lg'
            : 'border-transparent opacity-70 hover:opacity-100'
        }`}
      >
        <img src={UsFlag} alt="English" className="w-full h-full object-cover" />
      </motion.button>
    </div>
  );
};

export default LanguageSelector; 