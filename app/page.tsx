"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Fixed: Removed unused 'Menu' import
import { Phone, Mail, MapPin, Star, CheckCircle } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 py-4 shadow-lg backdrop-blur-md' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">ST ENTERPRISES</div>
        <div className="hidden md:flex space-x-8 text-white/90">
          {['About', 'Services', 'Reviews', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-pink-500 transition-colors font-medium">{item}</a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-pink-500 selection:text-white">
      <Navigation />
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black z-10" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1613535449480-926df3a52512?q=80&w=2070&auto=format&fit=crop" 
            alt="Thread Background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        {/* Thread Animation */}
        <div className="absolute inset-0 flex justify-center items-start pointer-events-none">
           <div className="relative h-full w-[2px] bg-white/10">
            <motion.div initial={{ height: "0%" }} animate={{ height: "100%" }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }} className="absolute top-0 w-full bg-gradient-to-b from-pink-500 via-purple-600 to-indigo-600 shadow-[0_0_15px_rgba(236,72,153,0.8)]" />
            <motion.div initial={{ top: "-5%", opacity: 0 }} animate={{ top: "110%", opacity: [0, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeIn", repeatDelay: 1 }} className="absolute left-1/2 -translate-x-1/2 w-3 h-8 rounded-full bg-pink-500 blur-[1px]" style={{ boxShadow: "0 0 15px #ec4899" }} />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6">Bringing <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Color</span> to Life</h1>
          </motion.div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10">Premium Job Work & Thread Dyeing Solutions. <br/>Trusted partner of <span className="text-white font-semibold">Shivam, Paramount, & Venus</span>.</p>
          <a href="#contact" className="inline-block px-10 py-4 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-bold text-lg shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all">Get a Quote</a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Precise Shade Matching", desc: "100% accuracy to your sample using advanced lab formulations.", icon: <CheckCircle /> },
              { title: "Bulk Job Work", desc: "High-volume capacity at our Sakinaka facility. You supply raw thread, we process it.", icon: <Star /> },
              { title: "Premium Texture", desc: "Silky, strong, and knot-free thread finishing.", icon: <CheckCircle /> }
            ].map((s, i) => (
              <div key={i} className="bg-zinc-900/50 border-b-2 border-pink-600 p-8 rounded-xl hover:bg-zinc-800/80 transition-all">
                <div className="mb-4 text-pink-500">{s.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-zinc-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Trusted By</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", company: "Shivam Thread", text: "Color fastness and consistency are unmatched in Mumbai." },
              { name: "Amit Desai", company: "Paramount Thread", text: "We hand them the most difficult shades, and they deliver every time." },
              { name: "Suresh Mehta", company: "Venus Industries", text: "10 years of partnership and not a single complaint." }
            ].map((r, i) => (
              <div key={i} className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-2xl relative shadow-xl">
                {/* Fixed: Used &quot; html entity instead of raw quotes */}
                <p className="text-gray-300 mb-6 italic">&quot;{r.text}&quot;</p>
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-bold text-white">{r.name}</div>
                  <div className="text-sm text-pink-500 font-semibold">{r.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="p-12 md:w-1/2 flex flex-col justify-center space-y-8">
              <h2 className="text-3xl font-bold mb-4">Visit Us</h2>
              <div>
                <h4 className="font-bold text-lg text-white flex items-center gap-2"><MapPin className="text-pink-500"/> Address</h4>
                <p className="text-gray-400 ml-8">DPK Compound, Sakinaka<br/>Mumbai, Maharashtra 400072</p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-white flex items-center gap-2"><Phone className="text-pink-500"/> Phone</h4>
                <a href="tel:+917977705026" className="text-gray-400 ml-8 hover:text-white">+91 7977705026</a>
              </div>
              <div>
                <h4 className="font-bold text-lg text-white flex items-center gap-2"><Mail className="text-pink-500"/> Email</h4>
                <a href="mailto:stenterprises97@gmail.com" className="text-gray-400 ml-8 hover:text-white">stenterprises97@gmail.com</a>
              </div>
            </div>
            <div className="md:w-1/2 h-80 md:h-auto bg-gray-700 relative">
              {/* Fixed: Added alt tag and silenced eslint warning for simple img tag usage */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1542461927-948f32269a6c?q=80&w=2128&auto=format&fit=crop" 
                alt="Factory Interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}