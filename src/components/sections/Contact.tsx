import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, GithubIcon, LinkedinIcon, SendIcon } from 'lucide-react';

const socialLinks = [{
  icon: GithubIcon,
  label: 'GitHub',
  value: 'Sepnanto26',
  link: 'https://github.com/Sepnanto26',
  color: 'from-gray-600 to-gray-800'
}, {
  icon: LinkedinIcon,
  label: 'LinkedIn',
  value: 'Sepnanto Muresta',
  link: 'https://www.linkedin.com/in/sepnanto-muresta-saputra-307759277/',
  color: 'from-blue-600 to-blue-800'
}, {
  icon: MailIcon,
  label: 'Email',
  value: 'murestasepnanto@gmail.com',
  link: 'mailto:murestasepnanto@gmail.com',
  color: 'from-red-500 to-pink-600'
}, {
  icon: PhoneIcon,
  label: 'Phone',
  value: '087755313262',
  link: 'https://wa.me/6287755313262',
  color: 'from-green-500 to-emerald-600'
}];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Logika pengiriman ke Formspree
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mengirim data ke Formspree menggunakan fetch
    const response = await fetch("https://formspree.io/f/xovgzevn", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      alert("Pesan berhasil dikirim ke Gmail Sepnanto!");
      // Reset form setelah berhasil kirim
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert("Gagal mengirim pesan, silakan coba lagi nanti.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return <section id="contact" className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Terminal/Console Background */}
      <div className="absolute inset-0 bg-black">
        {/* Terminal Lines */}
        {[...Array(50)].map((_, i) => <motion.div key={i} className="absolute left-0 right-0 h-px bg-green-400/5" style={{
        top: `${i * 2}%`
      }} initial={{
        scaleX: 0
      }} animate={{
        scaleX: 1
      }} transition={{
        duration: 2,
        delay: i * 0.02,
        repeat: Infinity,
        repeatDelay: 5
      }} />)}

        {/* Typing Effect Lines */}
        {[...Array(10)].map((_, i) => <motion.div key={`typing-${i}`} className="absolute font-mono text-green-400/20 text-xs" style={{
        left: '5%',
        top: `${10 + i * 8}%`
      }} initial={{
        width: 0,
        opacity: 0
      }} animate={{
        width: '90%',
        opacity: 0.3
      }} transition={{
        duration: 2,
        delay: i * 0.3,
        repeat: Infinity,
        repeatDelay: 8
      }}>
            {'> '.repeat(50)}
          </motion.div>)}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20" />
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
            <span className="text-6xl">📬</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In <span className="text-pink-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to
            life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Social Links */}
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
        }} className="space-y-6">
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => <motion.a key={social.label} href={social.link} target={social.link.startsWith('http') ? '_blank' : undefined} rel={social.link.startsWith('http') ? 'noopener noreferrer' : undefined} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: false
              }} transition={{
                delay: index * 0.1
              }} whileHover={{
                scale: 1.03,
                x: 10
              }} className="group flex items-center gap-4 p-4 bg-gray-900/50 backdrop-blur-sm border border-purple-400/20 rounded-xl hover:border-purple-400/50 transition-all">
                    <motion.div whileHover={{
                  rotate: 360
                }} transition={{
                  duration: 0.6
                }} className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center`}>
                      <social.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-400 text-sm">{social.label}</p>
                      <p className="text-white font-medium truncate group-hover:text-pink-400 transition-colors">
                        {social.value}
                      </p>
                    </div>
                  </motion.a>)}
              </div>
            </div>

            {/* Additional Info */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: false
          }} transition={{
            delay: 0.5
          }} className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-400/30 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-white mb-4">Location</h4>
              <p className="text-gray-300 text-lg">
                📍 South Jakarta, Indonesia
              </p>
              <p className="text-gray-400 mt-2">
                Available for freelance projects
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
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
          duration: 0.6
        }}>
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Full Name
                </label>
                <motion.input whileFocus={{
                scale: 1.02
              }} type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-900/50 border border-purple-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors" placeholder="Your name" />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address
                </label>
                <motion.input whileFocus={{
                scale: 1.02
              }} type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-900/50 border border-purple-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors" placeholder="your.email@example.com" />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Your Message
                </label>
                <motion.textarea whileFocus={{
                scale: 1.02
              }} id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 bg-gray-900/50 border border-purple-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors resize-none" placeholder="Tell me about your project..." />
              </div>

              <motion.button type="submit" whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-shadow">
                <SendIcon className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: false
      }} transition={{
        delay: 0.8
      }} className="mt-16 text-center">
          <p className="text-gray-400">
            © 2024 Sepnanto Muresta Saputra. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>;
};

export default Contact;