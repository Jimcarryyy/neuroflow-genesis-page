
import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Screenshots from '@/components/Screenshots';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <ParticleBackground />
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero />
      <HowItWorks />
      <Features />
      <Screenshots />
      <Testimonials />
      <Pricing />
      <Newsletter />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
