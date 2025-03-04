import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center justify-center w-12 h-8 rounded-full bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 transition-all duration-150"
    >
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
        {i18n.language === 'en' ? 'EN' : 'FR'}
      </span>
    </motion.button>
  );
};

export default LanguageSwitcher; 