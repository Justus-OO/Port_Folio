"use client";
import { motion } from 'framer-motion';
import { Terminal, Download, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-slate-50">
      
      {/* 1. Subtle Light Mode Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-emerald-200/50 blur-[120px] rounded-full -z-10" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-cyan-200/50 blur-[120px] rounded-full -z-10" 
      />
      
      {/* 2. Light Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] -z-20 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      
      <div className="max-w-4xl mx-auto text-center z-10 pt-20">
        
        {/* 3. Terminal Boot Badge (Light Mode) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-8 shadow-sm"
        >
          <Terminal className="w-4 h-4 text-emerald-600" />
        </motion.div>
        
        {/* 4. Structured Headline (Scaled Down) */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-slate-900"
        >
          Architecting <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
            Digital Infrastructure.
          </span>
        </motion.h1>

        {/* 5. Precision Copy */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto"
        >
          I am <strong className="text-slate-900 font-semibold">Justus Obisa</strong>, a Computer Science Graduate. 
          Specializing in enterprise-grade POS systems, Property Management platforms, 
          and high-performance modern web applications.
        </motion.p>

        {/* 6. Interactive Call-to-Actions (Light Mode) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="#projects" 
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold text-white transition-all duration-300 bg-emerald-600 rounded-xl hover:bg-emerald-700 hover:shadow-lg focus:outline-none"
          >
            Explore Architecture
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="/resume.pdf" 
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold text-slate-700 transition-all duration-300 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 hover:border-emerald-600 shadow-sm focus:outline-none"
          >
            <Download className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 group-hover:-translate-y-1 transition-all" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}