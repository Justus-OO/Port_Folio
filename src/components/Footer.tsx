"use client";
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowUp, Zap } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 mt-12 bg-slate-50 overflow-hidden border-t border-slate-200">
      {/* Subtle bottom ambient glow (Light Mode) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-100/50 blur-[120px] rounded-t-full -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        
        {/* Back to Top Button */}
        <motion.button 
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 mb-10 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-emerald-600 hover:border-emerald-300 hover:bg-slate-50 hover:shadow-md transition-all shadow-sm focus:outline-none"
        >
          <ArrowUp size={20} />
        </motion.button>

        {/* Social Links Matrix */}
        <div className="flex gap-6 mb-12">
          <a 
            href="https://github.com/justus-00" 
            target="_blank" 
            rel="noreferrer" 
            className="group p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300"
          >
            <Github size={24} className="text-slate-500 group-hover:text-emerald-600 group-hover:scale-110 transition-all" />
          </a>
          <a 
            href="https://www.linkedin.com/in/justus-onyiego-397914346/" 
            target="_blank" 
            rel="noreferrer" 
            className="group p-4 rounded-2xl bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all duration-300"
          >
            <Linkedin size={24} className="text-slate-500 group-hover:text-cyan-600 group-hover:scale-110 transition-all" />
          </a>
        </div>

        {/* Branding, Copyright & System Status */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl border-t border-slate-200 pt-8">
          
          {/* Status Indicator */}
          <div className="flex items-center gap-3 mb-6 md:mb-0 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-sm"></span>
            </div>
            <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase">Available for Hire</span>
          </div>
          
          {/* Copyright */}
          <p className="text-slate-500 text-sm font-medium tracking-tight text-center md:text-left mb-6 md:mb-0">
            Architected & Built by <span className="text-slate-900 font-bold">Justus Obisa</span> © {new Date().getFullYear()}
          </p>

          {/* System Online Text */}
          <div className="hidden md:flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
             <Zap size={14} className="text-emerald-500" /> System Online
          </div>

        </div>
      </div>
    </footer>
  );
}