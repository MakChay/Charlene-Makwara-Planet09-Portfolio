import React, { useState, useEffect } from 'react';
import ScrollToTop from './components/ScrollToTop';
import GeminiChat from './components/GeminiChat';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import UniqueValue from './components/UniqueValue';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Blog from './components/Blog';
import Services from './components/Services';
import BeyondCode from './components/BeyondCode';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/next";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const toggleDarkMode = (): void => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {/* Navbar */}
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <UniqueValue />
        <Projects />
        <Achievements />
        <Blog />
        <Services />
        <BeyondCode />
        <Testimonials />
        <Contact />
        <ScrollToTop />
        <Analytics />
      </main>
      <Footer />
      <GeminiChat />
    </div>
  );
};

export default App;