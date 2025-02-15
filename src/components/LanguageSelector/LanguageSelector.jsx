import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('pt')}
        className={`px-2 py-1 rounded-md text-sm font-medium transition-colors ${
          i18n.language === 'pt'
            ? 'bg-[#CE171F] text-white'
            : 'text-gray-800 hover:text-[#CE171F]'
        }`}
      >
        PT
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded-md text-sm font-medium transition-colors ${
          i18n.language === 'en'
            ? 'bg-[#CE171F] text-white'
            : 'text-gray-800 hover:text-[#CE171F]'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSelector; 