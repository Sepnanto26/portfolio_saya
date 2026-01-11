import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DownloadIcon, MapPinIcon, PhoneIcon } from 'lucide-react';

const Home: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Hi, I'm";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const roles = ['Freelancer', 'Web Developer', 'IT Support', 'MikroTik Specialist', 'Full Stack Developer', 'Database Administrator'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex(prev => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
      {/* Animated Particle Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900" />
        {[...Array(12)].map((_, i) => <motion.div key={i} className="absolute w-2 h-2 bg-green-400/30 rounded-full" style={{ willChange: 'transform, opacity' }} initial={{
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)
      }} animate={{
        x: [Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
        y: [Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000), Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000), Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
        scale: [1, 1.5, 1],
        opacity: [0.3, 0.6, 0.3]
      }} transition={{
        duration: 10 + Math.random() * 10,
        repeat: Infinity,
        ease: 'linear'
      }} />)}
        <motion.div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
              linear-gradient(to right, #10b981 1px, transparent 1px),
              linear-gradient(to bottom, #10b981 1px, transparent 1px)
            `,
        backgroundSize: '50px 50px'
      }} animate={{
        backgroundPosition: ['0px 0px', '50px 50px']
      }} transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear'
      }} />
        {[...Array(5)].map((_, i) => <motion.div key={`shape-${i}`} className="absolute border-2 border-green-400/20" style={{
        width: 100 + i * 50,
        height: 100 + i * 50,
        left: `${20 + i * 15}%`,
        top: `${10 + i * 15}%`
      }} animate={{
        rotate: [0, 360],
        scale: [1, 1.2, 1]
      }} transition={{
        duration: 15 + i * 5,
        repeat: Infinity,
        ease: 'linear'
      }} />)}
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} className="space-y-6 text-center lg:text-left">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="text-2xl sm:text-3xl text-gray-300 font-light flex items-center">
                {displayedText}
                {/* GARIS HIJAU BERKEDIP SUDAH DIHAPUS DI SINI */}
                <span className="ml-2">👋</span> {/* Sticker Tangan */}
              </span>
            </motion.div>

            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Sepnanto Muresta
            </motion.h1>

            <div className="h-16 flex items-center justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.div key={currentRoleIndex} initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -20
              }} transition={{
                duration: 0.5
              }} className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  {roles[currentRoleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.8
          }} className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Passionate IT professional specializing in full-stack development
              and IT infrastructure. I build modern web applications and provide
              comprehensive IT support solutions. Based in South Jakarta,
              available for freelance projects.
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 1
          }} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a href={`${import.meta.env.BASE_URL}Sepnanto_CV.pdf`} target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="inline-flex items-center gap-2 px-6 py-3 bg-green-400 text-gray-900 rounded-lg font-semibold hover:bg-green-300 transition-colors shadow-lg shadow-green-400/20">
                <div className="flex items-center gap-2">
                  <DownloadIcon className="w-5 h-5" />
                  View CV
                </div>
              </motion.a>

              <motion.a href="https://wa.me/6287755313262" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors border border-gray-700">
                <PhoneIcon className="w-5 h-5" />
                087755313262
              </motion.a>

              <motion.div whileHover={{
              scale: 1.05
            }} className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 text-gray-300 rounded-lg font-semibold border border-gray-700">
                <MapPinIcon className="w-5 h-5 text-green-400" />
                South Jakarta
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="relative">
            <div className="relative max-w-md mx-auto">
              <motion.div initial={{
              scale: 0.8,
              opacity: 0
            }} animate={{
              scale: 1,
              opacity: 1
            }} transition={{
              delay: 0.5
            }} whileHover={{
              scale: 1.05
            }} className="relative z-10 w-48 h-48 mx-auto rounded-2xl overflow-hidden border-4 border-green-400 shadow-2xl shadow-green-400/20">
                <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Sepnanto Muresta" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 0.8
            }} className="absolute -right-4 top-8 bg-gray-950 border border-green-400/30 rounded-lg p-4 shadow-xl hidden lg:block">
                <pre className="text-green-400 text-xs font-mono">
                  {`const skills = [\n  "React",\n  "Node.js",\n  "MySQL"\n];`}
                </pre>
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 1
            }} className="absolute -left-4 bottom-8 bg-gray-950 border border-green-400/30 rounded-lg p-4 shadow-xl hidden lg:block">
                <pre className="text-green-400 text-xs font-mono">
                  {`function solve() {\n  return "code";\n}`}
                </pre>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button onClick={scrollToAbout} initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5
    }} whileHover={{
      scale: 1.1
    }} whileTap={{
      scale: 0.9
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group" aria-label="Scroll to about section">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 1.5,
        repeat: Infinity
      }} className="w-6 h-10 border-2 border-green-400 rounded-full flex items-start justify-center p-2 group-hover:border-green-300 transition-colors">
          <motion.div animate={{
          y: [0, 12, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity
        }} className="w-1.5 h-1.5 bg-green-400 rounded-full group-hover:bg-green-300" />
        </motion.div>
        <p className="text-green-400 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          Scroll Down
        </p>
      </motion.button>
    </section>;
};

export default Home;