import React from 'react';
import { motion } from 'framer-motion';
const skills = {
  frontend: [{
    name: 'React',
    icon: '⚛️',
    color: 'from-cyan-400 to-blue-500'
  }, {
    name: 'Vue.js',
    icon: '💚',
    color: 'from-green-400 to-emerald-600'
  }, {
    name: 'Angular',
    icon: '🅰️',
    color: 'from-red-500 to-pink-600'
  }, {
    name: 'Svelte',
    icon: '🔥',
    color: 'from-orange-500 to-red-600'
  }, {
    name: 'Next.js',
    icon: '▲',
    color: 'from-gray-700 to-gray-900'
  }, {
    name: 'Nuxt.js',
    icon: '💚',
    color: 'from-green-500 to-teal-600'
  }, {
    name: 'TypeScript',
    icon: '📘',
    color: 'from-blue-400 to-blue-600'
  }, {
    name: 'JavaScript',
    icon: '🟨',
    color: 'from-yellow-400 to-yellow-600'
  }, {
    name: 'HTML5',
    icon: '🌐',
    color: 'from-orange-400 to-red-500'
  }, {
    name: 'CSS3',
    icon: '🎨',
    color: 'from-blue-400 to-purple-500'
  }, {
    name: 'Tailwind',
    icon: '💨',
    color: 'from-cyan-400 to-teal-500'
  }, {
    name: 'Bootstrap',
    icon: '🅱️',
    color: 'from-purple-500 to-indigo-600'
  }, {
    name: 'Sass',
    icon: '💅',
    color: 'from-pink-400 to-rose-600'
  }, {
    name: 'Material-UI',
    icon: '🎯',
    color: 'from-blue-500 to-indigo-600'
  }, {
    name: 'Redux',
    icon: '🔄',
    color: 'from-purple-600 to-violet-700'
  }, {
    name: 'Zustand',
    icon: '🐻',
    color: 'from-amber-500 to-orange-600'
  }],
  backend: [{
    name: 'Node.js',
    icon: '🟢',
    color: 'from-green-400 to-green-600'
  }, {
    name: 'Express',
    icon: '🚂',
    color: 'from-gray-600 to-gray-800'
  }, {
    name: 'NestJS',
    icon: '🐱',
    color: 'from-red-500 to-pink-600'
  }, {
    name: 'PHP',
    icon: '🐘',
    color: 'from-purple-400 to-indigo-600'
  }, {
    name: 'Laravel',
    icon: '🔺',
    color: 'from-red-500 to-orange-600'
  }, {
    name: 'Python',
    icon: '🐍',
    color: 'from-blue-400 to-yellow-500'
  }, {
    name: 'Django',
    icon: '🎸',
    color: 'from-green-600 to-teal-700'
  }, {
    name: 'Flask',
    icon: '🧪',
    color: 'from-gray-600 to-slate-700'
  }, {
    name: 'Java',
    icon: '☕',
    color: 'from-orange-500 to-red-600'
  }, {
    name: 'Spring Boot',
    icon: '🍃',
    color: 'from-green-500 to-emerald-600'
  }, {
    name: 'Go',
    icon: '🔵',
    color: 'from-cyan-400 to-blue-600'
  }, {
    name: 'REST API',
    icon: '🔌',
    color: 'from-orange-400 to-red-500'
  }, {
    name: 'GraphQL',
    icon: '◈',
    color: 'from-pink-400 to-purple-600'
  }],
  database: [{
    name: 'MySQL',
    icon: '🐬',
    color: 'from-blue-400 to-cyan-600'
  }, {
    name: 'PostgreSQL',
    icon: '🐘',
    color: 'from-blue-500 to-indigo-600'
  }, {
    name: 'MongoDB',
    icon: '🍃',
    color: 'from-green-400 to-green-700'
  }, {
    name: 'Redis',
    icon: '🔴',
    color: 'from-red-400 to-red-600'
  }, {
    name: 'Firebase',
    icon: '🔥',
    color: 'from-yellow-400 to-orange-500'
  }, {
    name: 'SQLite',
    icon: '💾',
    color: 'from-blue-300 to-blue-500'
  }, {
    name: 'MariaDB',
    icon: '🦭',
    color: 'from-blue-600 to-indigo-700'
  }, {
    name: 'Supabase',
    icon: '⚡',
    color: 'from-green-500 to-teal-600'
  }, {
    name: 'DynamoDB',
    icon: '⚙️',
    color: 'from-blue-700 to-indigo-800'
  }],
  devops: [{
    name: 'Git',
    icon: '📚',
    color: 'from-orange-500 to-red-600'
  }, {
    name: 'GitHub',
    icon: '🐙',
    color: 'from-gray-700 to-gray-900'
  }, {
    name: 'Docker',
    icon: '🐳',
    color: 'from-blue-400 to-cyan-600'
  }, {
    name: 'Kubernetes',
    icon: '☸️',
    color: 'from-blue-500 to-indigo-600'
  }, {
    name: 'AWS',
    icon: '☁️',
    color: 'from-orange-400 to-yellow-500'
  }, {
    name: 'Azure',
    icon: '☁️',
    color: 'from-blue-500 to-cyan-600'
  }, {
    name: 'Linux',
    icon: '🐧',
    color: 'from-yellow-400 to-orange-500'
  }, {
    name: 'Nginx',
    icon: '🟢',
    color: 'from-green-500 to-emerald-600'
  }]
};
const Skills: React.FC = () => {
  return <section id="skills" className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Circuit Board Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        {/* Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10 L90 10 L90 90" stroke="#10b981" strokeWidth="1" fill="none" />
              <circle cx="10" cy="10" r="3" fill="#10b981" />
              <circle cx="90" cy="10" r="3" fill="#10b981" />
              <circle cx="90" cy="90" r="3" fill="#10b981" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>

        {/* Glowing Nodes */}
        {[...Array(15)].map((_, i) => <motion.div key={i} className="absolute w-2 h-2 bg-green-400 rounded-full" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={{
        scale: [1, 1.5, 1],
        opacity: [0.3, 0.8, 0.3]
      }} transition={{
        duration: 2 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2
      }} />)}

        {/* Data Flow Lines */}
        {[...Array(5)].map((_, i) => <motion.div key={`line-${i}`} className="absolute h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent" style={{
        width: '200px',
        top: `${20 + i * 20}%`,
        left: '-200px'
      }} animate={{
        x: ['0vw', '120vw']
      }} transition={{
        duration: 5 + i,
        repeat: Infinity,
        ease: 'linear',
        delay: i * 0.5
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
          scale: 0
        }} whileInView={{
          scale: 1
        }} viewport={{
          once: false
        }} transition={{
          type: 'spring',
          stiffness: 200
        }} className="inline-block mb-4">
            <span className="text-6xl">💻</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical <span className="text-green-400">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-16">
          {/* Frontend */}
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
        }}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <span className="text-3xl">🎨</span>
              <span className="text-cyan-400">Frontend</span> Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.frontend.map((skill, index) => <motion.div key={skill.name} initial={{
              opacity: 0,
              scale: 0.8,
              y: 20
            }} whileInView={{
              opacity: 1,
              scale: 1,
              y: 0
            }} viewport={{
              once: false,
              margin: '-50px'
            }} transition={{
              delay: index * 0.03,
              type: 'spring',
              stiffness: 200
            }} whileHover={{
              scale: 1.1,
              rotate: 5,
              y: -5
            }} whileTap={{
              scale: 0.95,
              rotate: -5
            }} className="group relative cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative bg-gray-900/90 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-colors">
                    <motion.div whileHover={{
                  scale: 1.2,
                  rotate: 360
                }} whileTap={{
                  scale: 1.3,
                  rotate: 720
                }} transition={{
                  duration: 0.5
                }} className="text-4xl mb-3">
                      {skill.icon}
                    </motion.div>
                    <p className="text-white font-semibold text-sm">
                      {skill.name}
                    </p>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>

          {/* Backend */}
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
        }}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <span className="text-3xl">⚙️</span>
              <span className="text-green-400">Backend</span> Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.backend.map((skill, index) => <motion.div key={skill.name} initial={{
              opacity: 0,
              scale: 0.8,
              y: 20
            }} whileInView={{
              opacity: 1,
              scale: 1,
              y: 0
            }} viewport={{
              once: false,
              margin: '-50px'
            }} transition={{
              delay: index * 0.03,
              type: 'spring',
              stiffness: 200
            }} whileHover={{
              scale: 1.1,
              rotate: -5,
              y: -5
            }} whileTap={{
              scale: 0.95,
              rotate: 5
            }} className="group relative cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative bg-gray-900/90 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 text-center hover:border-green-400/50 transition-colors">
                    <motion.div whileHover={{
                  scale: 1.2,
                  rotate: -360
                }} whileTap={{
                  scale: 1.3,
                  rotate: -720
                }} transition={{
                  duration: 0.5
                }} className="text-4xl mb-3">
                      {skill.icon}
                    </motion.div>
                    <p className="text-white font-semibold text-sm">
                      {skill.name}
                    </p>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>

          {/* Database */}
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
        }}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <span className="text-3xl">🗄️</span>
              <span className="text-blue-400">Database</span> Management
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.database.map((skill, index) => <motion.div key={skill.name} initial={{
              opacity: 0,
              scale: 0.8,
              y: 20
            }} whileInView={{
              opacity: 1,
              scale: 1,
              y: 0
            }} viewport={{
              once: false,
              margin: '-50px'
            }} transition={{
              delay: index * 0.03,
              type: 'spring',
              stiffness: 200
            }} whileHover={{
              scale: 1.1,
              y: -10
            }} whileTap={{
              scale: 0.95,
              y: -5
            }} className="group relative cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative bg-gray-900/90 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 text-center hover:border-blue-400/50 transition-colors">
                    <motion.div whileHover={{
                  scale: 1.2,
                  rotate: 360
                }} whileTap={{
                  scale: 1.3,
                  rotate: 720
                }} transition={{
                  duration: 0.5
                }} className="text-4xl mb-3">
                      {skill.icon}
                    </motion.div>
                    <p className="text-white font-semibold text-sm">
                      {skill.name}
                    </p>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>

          {/* DevOps & Tools */}
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
        }}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <span className="text-3xl">🛠️</span>
              <span className="text-orange-400">DevOps</span> & Tools
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.devops.map((skill, index) => <motion.div key={skill.name} initial={{
              opacity: 0,
              scale: 0.8,
              y: 20
            }} whileInView={{
              opacity: 1,
              scale: 1,
              y: 0
            }} viewport={{
              once: false,
              margin: '-50px'
            }} transition={{
              delay: index * 0.03,
              type: 'spring',
              stiffness: 200
            }} whileHover={{
              scale: 1.1,
              rotate: 5,
              y: -5
            }} whileTap={{
              scale: 0.95,
              rotate: -5
            }} className="group relative cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative bg-gray-900/90 backdrop-blur-sm border border-orange-400/20 rounded-xl p-6 text-center hover:border-orange-400/50 transition-colors">
                    <motion.div whileHover={{
                  scale: 1.2,
                  rotate: 360
                }} whileTap={{
                  scale: 1.3,
                  rotate: 720
                }} transition={{
                  duration: 0.5
                }} className="text-4xl mb-3">
                      {skill.icon}
                    </motion.div>
                    <p className="text-white font-semibold text-sm">
                      {skill.name}
                    </p>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Skills;