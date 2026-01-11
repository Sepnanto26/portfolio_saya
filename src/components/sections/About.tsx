import React from 'react';
import { motion } from 'framer-motion';
import { ServerIcon, WrenchIcon, NetworkIcon, DatabaseIcon } from 'lucide-react';
const specializations = [{
  icon: ServerIcon,
  title: 'IT Support',
  description: 'Hardware & software troubleshooting'
}, {
  icon: WrenchIcon,
  title: 'System Admin',
  description: 'Windows Server & remote desktop'
}, {
  icon: NetworkIcon,
  title: 'Network',
  description: 'Network maintenance & optimization'
}, {
  icon: DatabaseIcon,
  title: 'Infrastructure',
  description: 'IT infrastructure management'
}];
const About: React.FC = () => {
  return <section id="about" className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 bg-black">
        {/* Matrix Characters */}
        {[...Array(30)].map((_, i) => <motion.div key={i} className="absolute font-mono text-green-400 text-sm opacity-30" style={{
        left: `${i * 3.33}%`,
        top: -50
      }} animate={{
        y: ['0vh', '110vh']
      }} transition={{
        duration: 5 + Math.random() * 5,
        repeat: Infinity,
        ease: 'linear',
        delay: Math.random() * 5
      }}>
            {Array.from({
          length: 30
        }, () => String.fromCharCode(0x30a0 + Math.random() * 96)).join('\n')}
          </motion.div>)}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-cyan-900/30" />
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
          stiffness: 200
        }} className="inline-block mb-4">
            <span className="text-6xl">👨‍💻</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Specializations Grid */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: false,
          margin: '-100px'
        }} transition={{
          duration: 0.6
        }} className="grid grid-cols-2 gap-4">
            {specializations.map((spec, index) => <motion.div key={spec.title} initial={{
            opacity: 0,
            scale: 0.8,
            rotate: -10
          }} whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0
          }} viewport={{
            once: false,
            margin: '-100px'
          }} transition={{
            delay: index * 0.1,
            type: 'spring',
            stiffness: 200
          }} whileHover={{
            scale: 1.05,
            y: -5,
            rotate: 2
          }} className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6 text-center hover:border-blue-400/60 transition-all">
                <motion.div whileHover={{
              rotate: 360,
              scale: 1.2
            }} transition={{
              duration: 0.6
            }} className="inline-flex items-center justify-center w-16 h-16 bg-blue-400/20 rounded-full mb-4">
                  <spec.icon className="w-8 h-8 text-blue-400" />
                </motion.div>
                <h3 className="text-white font-semibold mb-2">{spec.title}</h3>
                <p className="text-gray-400 text-sm">{spec.description}</p>
              </motion.div>)}
          </motion.div>

          {/* Right - Description */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: false,
          margin: '-100px'
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="space-y-6">
            <div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: false
            }} transition={{
              delay: 0.4
            }}>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-400">{'<'}</span>
                  My Journey
                  <span className="text-blue-400">{'/>'}</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I have extensive experience in{' '}
                  <span className="text-blue-400 font-semibold">
                    IT Support
                  </span>
                  , specializing in troubleshooting hardware and software issues
                  and network maintenance. I am proficient in using tools like{' '}
                  <span className="text-blue-400 font-semibold">
                    Windows Server
                  </span>
                  ,
                  <span className="text-blue-400 font-semibold">
                    {' '}
                    Microsoft Office
                  </span>
                  , and
                  <span className="text-blue-400 font-semibold">
                    {' '}
                    remote desktop applications
                  </span>
                  .
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mt-4">
                  I enjoy collaborating with teams and continuously improving my
                  skills to optimize IT infrastructure and support operations.
                  My goal is to deliver reliable, efficient solutions that
                  empower businesses to thrive in the digital landscape.
                </p>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: false
            }} transition={{
              delay: 0.6
            }} className="mt-8 flex flex-wrap gap-3">
                {['Team Collaboration', 'Problem Solving', 'Continuous Learning'].map((trait, index) => <motion.span key={trait} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: false
              }} transition={{
                delay: 0.7 + index * 0.1
              }} whileHover={{
                scale: 1.1,
                y: -2
              }} className="px-4 py-2 bg-blue-400/10 text-blue-400 rounded-full text-sm font-medium border border-blue-400/30 cursor-default">
                    {trait}
                  </motion.span>)}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;