"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Fixed: Removed unused 'CheckCircle' and 'ArrowRight'
import { Phone, Mail, MapPin, Star, Layers, Droplet, Sun } from 'lucide-react';

// --- COMPONENTS ---

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 py-4 backdrop-blur-md border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          ST ENTERPRISES
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-white/80">
          {['About', 'Services', 'Process', 'Clients', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-pink-400 transition-colors uppercase tracking-widest text-xs">
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Wavy Thread Animation
const WavyThreads = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
      <svg className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Generate multiple wavy threads */}
        {[...Array(5)].map((_, i) => (
          <motion.path
            key={i}
            d={`M -100 ${100 + i * 150} Q 400 ${50 + i * 100} 800 ${300 + i * 50} T 2000 ${200 + i * 100}`}
            fill="none"
            stroke="url(#grad1)"
            strokeWidth={2 + i}
            strokeLinecap="round"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: [0.4, 0.8, 0.4],
              d: [
                `M -100 ${100 + i * 150} Q 400 ${50 + i * 100} 800 ${300 + i * 50} T 2000 ${200 + i * 100}`,
                `M -100 ${150 + i * 150} Q 400 ${150 + i * 100} 800 ${200 + i * 50} T 2000 ${300 + i * 100}`,
                `M -100 ${100 + i * 150} Q 400 ${50 + i * 100} 800 ${300 + i * 50} T 2000 ${200 + i * 100}`
              ]
            }}
            transition={{ 
              duration: 10 + i * 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              pathLength: { duration: 2, ease: "easeOut" }
            }}
          />
        ))}
      </svg>
    </div>
  );
};

// --- MAIN PAGE ---

export default function Home() {
  // Fixed: Removed unused useScroll and useTransform variables (y) that were causing lint errors

  return (
    <main className="bg-[#050505] min-h-screen text-white overflow-x-hidden selection:bg-pink-500 selection:text-white font-sans">
      <Navigation />
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-[#050505] z-10" />
           {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.vexels.com/media/users/3/212381/isolated/preview/34bdef5b79859f2e4c5dea6c4a62a5c9-color-thread-spools-flat-icon.png?w=360" 
            alt="Thread Texture" 
            className="w-full h-full object-cover opacity-30 animate-pulse-slow"
          />
        </div>
        
        {/* Wavy Animated Threads */}
        <WavyThreads />

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1 }}
          >
            {/* New Headline */}
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
              Threads of <br/>
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Vibrant Color
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
          >
            Premium job work and industrial dyeing solutions. <br/>
            We transform raw thread into the exact shade you envision.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row justify-center gap-6"
          >
            <a href="#contact" className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105">
              <span className="relative z-10 group-hover:text-white transition-colors">Get a Free Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a href="#services" className="px-8 py-4 border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Explore Services
            </a>
          </motion.div>
        </div>
      </section>

      {/* STATS BANNER */}
      <div className="border-y border-white/5 bg-white/5 backdrop-blur-sm relative z-20">
        <div className="container mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "10+", label: "Years Experience" },
            { num: "100%", label: "Shade Match" },
            { num: "24h", label: "Lab Support" },
            { num: "500+", label: "Happy Clients" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-black text-white mb-2">{stat.num}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PROCESS SECTION (New "More Info") */}
      <section id="process" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Work</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500/20 to-purple-500/20 -z-10" />

            {[
              { icon: <Droplet className="text-pink-500" size={32} />, title: "01. Lab Dip", desc: "We create a small sample to match your provided shade exactly." },
              { icon: <Layers className="text-purple-500" size={32} />, title: "02. Bulk Dyeing", desc: "Once approved, we process your raw thread in our high-capacity machines." },
              { icon: <Sun className="text-indigo-500" size={32} />, title: "03. Finishing", desc: "Washing, drying, and silicon finishing for that perfect silky texture." },
            ].map((step, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm"
              >
                <div className="bg-zinc-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(236,72,153,0.2)]">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION (Company Focused) */}
      <section id="clients" className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted Partners</h2>
            <p className="text-xl text-gray-400">Powering the biggest names in the thread industry.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { company: "SHIVAM THREAD", color: "from-orange-400 to-red-500", text: "Unmatched consistency in bulk orders." },
              { company: "PARAMOUNT", color: "from-blue-400 to-indigo-500", text: "The only dyers we trust with our premium export quality." },
              { company: "VENUS INDUSTRIES", color: "from-green-400 to-emerald-500", text: "Zero complaints in 10 years of partnership." }
            ].map((client, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-zinc-900 p-10 rounded-3xl overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${client.color}`} />
                <div className="flex text-yellow-500 mb-6 gap-1">
                  {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                </div>
                <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                  {client.company}
                </h3>
                <p className="text-gray-500 font-medium mb-6">Job Work Partner</p>
                {/* Fixed: Used &quot; html entity */}
                <p className="text-lg text-gray-300 italic">&quot;{client.text}&quot;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-[3rem] p-1 border border-white/10">
            <div className="bg-[#050505] rounded-[2.9rem] overflow-hidden flex flex-col md:flex-row">
              <div className="p-12 md:p-20 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-8">Visit Our Factory</h2>
                <div className="space-y-10">
                  <div className="flex items-start space-x-6 group">
                    <div className="bg-zinc-800 p-4 rounded-2xl group-hover:bg-pink-500 transition-colors">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-white mb-1">Location</h4>
                      <p className="text-gray-400 text-lg">DPK Compound, Sakinaka<br/>Mumbai, Maharashtra 400072</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="bg-zinc-800 p-4 rounded-2xl group-hover:bg-purple-500 transition-colors">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-white mb-1">Call Us</h4>
                      <a href="tel:+917977705026" className="text-gray-400 text-lg hover:text-white transition-colors">
                        +91 7977705026
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="bg-zinc-800 p-4 rounded-2xl group-hover:bg-indigo-500 transition-colors">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-white mb-1">Email</h4>
                      <a href="mailto:stenterprises97@gmail.com" className="text-gray-400 text-lg hover:text-white transition-colors">
                        stenterprises97@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 min-h-[400px] relative">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://images.unsplash.com/photo-1542461927-948f32269a6c?q=80&w=2128&auto=format&fit=crop" 
                  alt="Industrial Thread Dyeing Machine" 
                  className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#050505]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-black text-center border-t border-white/5">
        <div className="text-2xl font-black tracking-tighter text-white mb-4 opacity-50">ST</div>
        <p className="text-gray-600">&copy; {new Date().getFullYear()} ST Enterprises. All Rights Reserved.</p>
      </footer>
    </main>
  );
}