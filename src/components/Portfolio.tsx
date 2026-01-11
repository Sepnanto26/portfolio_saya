import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Karena Portfolio.tsx ada di folder 'components', 
// maka memanggil file di folder yang sama cukup pakai './'
import LoadingScreen from './LoadingScreen';
import Navbar from './Navbar';

// Masuk ke sub-folder 'sections' yang ada di dalam 'components'
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Certificates from './sections/Certificates';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

interface PortfolioProps {
  'data-id'?: string;
}

export const Portfolio = ({
  'data-id': dataId
}: PortfolioProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div data-id={dataId} className="relative w-full min-h-screen bg-gray-900">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div 
            key="content" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }} 
            className="w-full"
          >
            <Navbar />
            <main className="w-full">
              <Home />
              <About />
              <Skills />
              <Certificates />
              <Projects />
              <Contact />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};