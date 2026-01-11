import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
const projects = [{
  title: 'Warung LM',
  description: 'Platform e-commerce lengkap untuk manajemen warung lokal. Fitur mencakup katalog produk, keranjang belanja, manajemen pesanan, dan integrasi pembayaran. Dibangun dengan teknologi web modern untuk pengalaman pengguna yang mulus.',
  image: "/warung.png",
  demoLink: 'https://warung-lm.rf.gd/?i=1',
  tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
  gradient: 'from-orange-500 to-red-500'
}, {
  title: 'Kiko Editing',
  description: 'Jasa desain grafis profesional untuk bisnis Anda. Website modern dengan portfolio kreatif, sistem pemesanan online, dan showcase karya visual berkualitas tinggi. Desain responsif dengan animasi smooth dan user experience yang optimal.',
  image: "/kiko.png",
  demoLink: 'https://kiko-web.xo.je/user/index.php?i=1',
  tech: ['PHP', 'MySQL', 'jQuery', 'CSS3'],
  gradient: 'from-blue-500 to-purple-500'
}, {
  title: 'JetWash Express',
  description: 'Website layanan cuci mobil premium dengan sistem booking online. Menampilkan paket layanan, kalkulator harga, penjadwalan appointment, dan ulasan pelanggan. Interface bersih dan modern dengan animasi yang halus untuk pengalaman terbaik.',
  image: "/jetwas.png",
  demoLink: 'https://sepnanto26.github.io/JetWash/index.html',
  tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
  gradient: 'from-cyan-500 to-blue-500'
}, {
  title: 'Sesa Coffee',
  description: 'Website coffee shop elegan dengan menu interaktif dan pemesanan online. Fitur menu dengan filter, peta lokasi, dan form kontak. Desain yang menangkap suasana hangat dan mengundang dari kafe modern dengan visual yang memukau.',
  image: "/sesa.png",
  demoLink: 'https://sepnanto26.github.io/sesa-coffe/index.html',
  tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
  gradient: 'from-amber-500 to-orange-500'
}, {
  title: 'SMA Cakrawala Nusantara',
  description: 'Website sekolah komprehensif dengan informasi akademik, berita terkini, portal siswa, dan tools administratif. Termasuk kalender event, galeri foto, dan sistem pendaftaran online untuk calon siswa. Desain profesional yang mencerminkan nilai pendidikan berkualitas.',
  image: "/sma.png",
  demoLink: 'http://smacakrawala.page.gd/',
  tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
  gradient: 'from-green-500 to-emerald-500'
}];
const Projects: React.FC = () => {
  return <section id="projects" className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        {[...Array(3)].map((_, i) => <motion.div key={i} animate={{
        y: [0, -30, 0],
        opacity: [0.1, 0.2, 0.1]
      }} transition={{
        duration: 5 + i,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: i * 0.5
      }} className="absolute w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" style={{
        left: `${20 + i * 30}%`,
        top: `${10 + i * 20}%`
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
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Showcase project terbaru saya dalam web development dan solusi IT
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => <motion.div key={project.title} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: false,
          margin: '-100px'
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image Side */}
              <motion.div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`} whileHover={{
            scale: 1.02
          }} transition={{
            duration: 0.3
          }}>
                <div className="group relative rounded-2xl overflow-hidden shadow-2xl">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity z-10`} />

                  {/* Image */}
                  <img src={project.image} alt={project.title} className="w-full h-[400px] object-cover object-top transform group-hover:scale-110 transition-transform duration-500" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center">
                    <motion.a href={project.demoLink} target="_blank" rel="noopener noreferrer" whileHover={{
                  scale: 1.1
                }} whileTap={{
                  scale: 0.95
                }} className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold shadow-lg">
                      <ExternalLinkIcon className="w-5 h-5" />
                      View Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div className={`${index % 2 === 1 ? 'lg:order-1' : ''} space-y-6`} initial={{
            opacity: 0,
            x: index % 2 === 0 ? -30 : 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: false,
            margin: '-100px'
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
                <div>
                  <motion.div initial={{
                width: 0
              }} whileInView={{
                width: '60px'
              }} viewport={{
                once: false
              }} transition={{
                duration: 0.6,
                delay: 0.3
              }} className={`h-1 bg-gradient-to-r ${project.gradient} rounded-full mb-4`} />
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => <motion.span key={tech} initial={{
                opacity: 0,
                scale: 0.8
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: false
              }} transition={{
                delay: 0.4 + techIndex * 0.05
              }} className={`px-4 py-2 bg-gradient-to-r ${project.gradient} bg-opacity-10 text-white rounded-full text-sm font-medium border border-white/10`}>
                      {tech}
                    </motion.span>)}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <motion.a href={project.demoLink} target="_blank" rel="noopener noreferrer" whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-semibold shadow-lg`}>
                    <ExternalLinkIcon className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Projects;