import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const seoData = {
  '/': {
    title: 'Nhancio - Premium Digital & AI Services',
    description: 'Transform your business with AI workflows, custom development, and digital solutions. Premium SaaS development, ecommerce, and mobile apps.',
    keywords: 'AI services, SaaS development, digital solutions, business automation, ecommerce, mobile apps'
  },
  '/services': {
    title: 'Our Services - AI & Digital Solutions | Nhancio',
    description: 'Comprehensive AI workflows, SaaS development, mobile apps, ecommerce solutions, and custom software services.',
    keywords: 'AI automation, SaaS development, mobile app development, ecommerce setup, custom software'
  },
  '/pricing': {
    title: 'Pricing - Affordable Digital Solutions | Nhancio',
    description: 'Transparent pricing for premium digital services. From basic templates to fully customized solutions.',
    keywords: 'pricing, digital services cost, SaaS development pricing, AI automation cost'
  },
  '/contact': {
    title: 'Contact Us - Get Started Today | Nhancio',
    description: 'Ready to transform your business? Contact Nhancio for premium AI and digital solutions.',
    keywords: 'contact, consultation, digital transformation, AI solutions'
  }
};

export default function SEOHead() {
  const location = useLocation();

  useEffect(() => {
    const currentSEO = seoData[location.pathname as keyof typeof seoData] || seoData['/'];
    
    document.title = currentSEO.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentSEO.description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', currentSEO.keywords);
    }

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Nhancio",
      "url": "https://nhancio.com",
      "logo": "https://nhancio.com/logo.png",
      "description": "Premium AI workflows, custom development, and digital solutions",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-234-567-890",
        "contactType": "customer service",
        "email": "contact@nhancio.com"
      },
      "sameAs": [
        "https://twitter.com/nhancio",
        "https://linkedin.com/company/nhancio"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [location.pathname]);

  return null;
}