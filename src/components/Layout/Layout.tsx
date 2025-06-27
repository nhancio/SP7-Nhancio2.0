import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ChatWidget from '../Widgets/ChatWidget';
import { useTheme } from '../../contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'dark bg-gray-900' : 'bg-white'
    }`}>
      <Header />
      <main className="relative">
        {children}
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}