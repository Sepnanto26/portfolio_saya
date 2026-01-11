import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
const navItems = [{
  label: 'Home',
  href: '#home'
}, {
  label: 'About',
  href: '#about'
}, {
  label: 'Skills',
  href: '#skills'
}, {
  label: 'Certificates',
  href: '#certificates'
}, {
  label: 'Projects',
  href: '#projects'
}, {
  label: 'Contact',
  href: '#contact'
}];
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="text-xl font-bold text-white cursor-pointer" onClick={() => scrollToSection('#home')}>
            <span className="text-green-400">&lt;</span>
            Sepnanto
            <span className="text-green-400">/&gt;</span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => <motion.button key={item.href} initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} onClick={() => scrollToSection(item.href)} className={`relative text-sm font-medium transition-colors ${activeSection === item.href.substring(1) ? 'text-green-400' : 'text-gray-300 hover:text-white'}`}>
                {item.label}
                {activeSection === item.href.substring(1) && <motion.div layoutId="activeSection" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400" transition={{
              type: 'spring',
              stiffness: 380,
              damping: 30
            }} />}
              </motion.button>)}
          </div>

          {/* Mobile Menu Button */}
          <motion.button whileTap={{
          scale: 0.95
        }} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white p-2" aria-label="Toggle menu">
            {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-gray-900/98 backdrop-blur-md border-t border-gray-800">
            <div className="px-4 py-4 space-y-3">
              {navItems.map(item => <motion.button key={item.href} whileTap={{
            scale: 0.98
          }} onClick={() => scrollToSection(item.href)} className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${activeSection === item.href.substring(1) ? 'bg-green-400/10 text-green-400' : 'text-gray-300 hover:bg-gray-800'}`}>
                  {item.label}
                </motion.button>)}
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.nav>;
};
export default Navbar;