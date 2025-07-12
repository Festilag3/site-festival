import React, { createContext, useContext, useState, useEffect } from 'react';
import { languages } from '../data/mock';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('ar'); // Default to Arabic

  useEffect(() => {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('festival-language');
    if (savedLanguage && languages[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (langCode) => {
    if (languages[langCode]) {
      setCurrentLanguage(langCode);
      localStorage.setItem('festival-language', langCode);
      
      // Update document direction
      document.documentElement.dir = languages[langCode].dir;
      document.documentElement.lang = langCode;
    }
  };

  const t = (textObj) => {
    if (typeof textObj === 'string') return textObj;
    return textObj[currentLanguage] || textObj['fr'] || textObj['en'] || '';
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    languages,
    isRTL: languages[currentLanguage].dir === 'rtl'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};