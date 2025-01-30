import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
    >
      <img
        src={i18n.language === 'pt' ? '/br-flag.svg' : '/us-flag.svg'}
        alt={i18n.language === 'pt' ? 'Português' : 'English'}
        className="w-6 h-6 rounded-full"
      />
      <span className="text-black font-medium">
        {i18n.language === 'pt' ? 'EN' : 'PT'}
      </span>
    </motion.button>
  );
};

export default LanguageSelector; 