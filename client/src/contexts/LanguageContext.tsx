import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es' | 'hi' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.achievements': 'Achievements',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'hero.title': 'Transform Your Business with AI & Digital Excellence',
    'hero.subtitle': 'Premium AI workflows, custom development, and digital solutions that drive results.',
    'hero.cta': 'Get Started Today',
    'services.title': 'Our Services',
    'contact.email': 'contact@nhancio.com'
  },
  es: {
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.pricing': 'Precios',
    'nav.achievements': 'Logros',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'hero.title': 'Transforma Tu Negocio con IA y Excelencia Digital',
    'hero.subtitle': 'Flujos de trabajo de IA premium, desarrollo personalizado y soluciones digitales que generan resultados.',
    'hero.cta': 'Comienza Hoy',
    'services.title': 'Nuestros Servicios',
    'contact.email': 'contact@nhancio.com'
  },
  hi: {
    'nav.home': 'होम',
    'nav.services': 'सेवाएं',
    'nav.pricing': 'मूल्य निर्धारण',
    'nav.achievements': 'उपलब्धियां',
    'nav.blog': 'ब्लॉग',
    'nav.contact': 'संपर्क',
    'hero.title': 'AI और डिजिटल उत्कृष्टता के साथ अपने व्यवसाय को बदलें',
    'hero.subtitle': 'प्रीमियम AI वर्कफ़्लो, कस्टम डेवलपमेंट, और डिजिटल समाधान जो परिणाम देते हैं।',
    'hero.cta': 'आज ही शुरू करें',
    'services.title': 'हमारी सेवाएं',
    'contact.email': 'contact@nhancio.com'
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.pricing': 'التسعير',
    'nav.achievements': 'الإنجازات',
    'nav.blog': 'المدونة',
    'nav.contact': 'اتصل بنا',
    'hero.title': 'حول عملك بالذكاء الاصطناعي والتميز الرقمي',
    'hero.subtitle': 'سير عمل الذكاء الاصطناعي المتميز والتطوير المخصص والحلول الرقمية التي تحقق النتائج.',
    'hero.cta': 'ابدأ اليوم',
    'services.title': 'خدماتنا',
    'contact.email': 'contact@nhancio.com'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}