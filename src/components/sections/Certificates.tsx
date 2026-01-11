import React from 'react';
import { motion } from 'framer-motion';
import { AwardIcon, ExternalLinkIcon } from 'lucide-react';
const certificates = [{
  title: 'MikroTik Certified Network Associate',
  issuer: 'MikroTik',
  date: '2024',
  link: 'https://mikrotik.com/training/certificates/c465988c12f628ea01a4',
  color: 'from-red-500 to-orange-500'
}, {
  title: 'Belajar Dasar Pemrograman Web',
  issuer: 'Dicoding Indonesia',
  date: '2024',
  link: 'https://www.dicoding.com/certificates/QLZ96O887Z5D',
  color: 'from-blue-500 to-cyan-500'
}, {
  title: 'Belajar Membuat Front-End Web untuk Pemula',
  issuer: 'Dicoding Indonesia',
  date: '2024',
  link: 'https://www.dicoding.com/certificates/1RXYQ7NWKZVM',
  color: 'from-purple-500 to-pink-500'
}, {
  title: 'Belajar Dasar Pemrograman JavaScript',
  issuer: 'Dicoding Indonesia',
  date: '2024',
  link: 'https://www.dicoding.com/certificates/07Z6JDK7JXQR',
  color: 'from-green-500 to-emerald-500'
}];
const Certificates: React.FC = () => {
  return <section id="certificates" className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Binary Rain Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-900/20 to-gray-900">
        {/* Binary Numbers */}
        {[...Array(25)].map((_, i) => <motion.div key={i} className="absolute font-mono text-emerald-400/30 text-xs" style={{
        left: `${i * 4}%`,
        top: -20
      }} animate={{
        y: ['0vh', '110vh']
      }} transition={{
        duration: 4 + Math.random() * 4,
        repeat: Infinity,
        ease: 'linear',
        delay: Math.random() * 4
      }}>
            {Array.from({
          length: 40
        }, () => Math.random() > 0.5 ? '1' : '0').join('\n')}
          </motion.div>)}

        {/* Glowing Particles */}
        {[...Array(20)].map((_, i) => <motion.div key={`particle-${i}`} className="absolute w-1 h-1 bg-emerald-400 rounded-full" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={{
        scale: [0, 1.5, 0],
        opacity: [0, 1, 0]
      }} transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 3
      }} />)}
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: false,
        margin: '-100px'
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <motion.div initial={{
          scale: 0,
          rotate: -180
        }} whileInView={{
          scale: 1,
          rotate: 0
        }} viewport={{
          once: false
        }} transition={{
          type: 'spring',
          stiffness: 200,
          delay: 0.2
        }} className="inline-flex items-center justify-center w-20 h-20 bg-emerald-400/20 rounded-full mb-6">
            <AwardIcon className="w-10 h-10 text-emerald-400" />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Certifications &{' '}
            <span className="text-emerald-400">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => <motion.a key={cert.link} href={cert.link} target="_blank" rel="noopener noreferrer" initial={{
          opacity: 0,
          y: 30,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          y: 0,
          scale: 1
        }} viewport={{
          once: false,
          margin: '-100px'
        }} transition={{
          delay: index * 0.1,
          type: 'spring',
          stiffness: 200
        }} whileHover={{
          scale: 1.03,
          y: -5
        }} className="group relative block">
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />

              {/* Card Content */}
              <div className="relative bg-gray-900/90 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-8 h-full group-hover:border-emerald-400/50 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <motion.div whileHover={{
                rotate: 360
              }} transition={{
                duration: 0.6
              }} className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center`}>
                    <AwardIcon className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.div whileHover={{
                x: 5,
                scale: 1.2
              }} className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLinkIcon className="w-6 h-6" />
                  </motion.div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-400 mb-1">{cert.issuer}</p>
                <p className="text-emerald-400 text-sm font-medium">
                  {cert.date}
                </p>

                {/* Hover Effect Line */}
                <motion.div initial={{
              width: 0
            }} whileHover={{
              width: '100%'
            }} className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-b-2xl" />
              </div>
            </motion.a>)}
        </div>

        {/* Stats */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: false
      }} transition={{
        delay: 0.5
      }} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[{
          label: 'Certificates',
          value: '4+',
          icon: '🏆'
        }, {
          label: 'Skills',
          value: '40+',
          icon: '💡'
        }, {
          label: 'Projects',
          value: '5+',
          icon: '🚀'
        }, {
          label: 'Experience',
          value: '1 Year',
          icon: '⏱️'
        }].map((stat, index) => <motion.div key={stat.label} initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: false
        }} transition={{
          delay: 0.6 + index * 0.1,
          type: 'spring',
          stiffness: 200
        }} whileHover={{
          scale: 1.05,
          y: -5
        }} className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm border border-emerald-400/20 rounded-xl p-6 text-center hover:border-emerald-400/50 transition-colors cursor-default">
              <motion.div initial={{
            scale: 0
          }} whileInView={{
            scale: 1
          }} viewport={{
            once: false
          }} transition={{
            type: 'spring',
            stiffness: 200,
            delay: 0.7 + index * 0.1
          }} className="text-3xl mb-2">
                {stat.icon}
              </motion.div>
              <motion.p initial={{
            scale: 0
          }} whileInView={{
            scale: 1
          }} viewport={{
            once: false
          }} transition={{
            type: 'spring',
            stiffness: 200,
            delay: 0.7 + index * 0.1
          }} className="text-3xl font-bold text-emerald-400 mb-2">
                {stat.value}
              </motion.p>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};
export default Certificates;