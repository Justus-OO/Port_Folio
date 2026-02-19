"use client";
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowUp, Zap } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 mt-12 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Subtle bottom ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-900/10 blur-[150px] rounded-t-full -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        
        {/* Back to Top Button */}
        <motion.button 
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 mb-10 rounded-full bg-white/[0.03] border border-white/10 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all shadow-lg focus:outline-none"
        >
          <ArrowUp size={20} />
        </motion.button>

        {/* Social Links Matrix */}
        <div className="flex gap-6 mb-12">
          <a 
            href="https://github.com/justus-00" 
            target="_blank" 
            rel="noreferrer" 
            className="group p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300"
          >
            <Github size={24} className="text-gray-400 group-hover:text-emerald-400 group-hover:scale-110 transition-all" />
          </a>
          <a 
            href="https://www.linkedin.com/in/justus-onyiego-397914346/" 
            target="_blank" 
            rel="noreferrer" 
            className="group p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300"
          >
            <Linkedin size={24} className="text-gray-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all" />
          </a>
        </div>

        {/* Branding, Copyright & System Status */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl border-t border-white/5 pt-8">
          
          {/* Status Indicator */}
          <div className="flex items-center gap-3 mb-6 md:mb-0 bg-white/[0.02] px-4 py-2 rounded-full border border-white/5">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
            </div>
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">Available for Hire</span>
          </div>
          
          {/* Copyright */}
          <p className="text-gray-500 text-sm font-mono tracking-tight text-center md:text-left mb-6 md:mb-0">
            Architected & Built by <span className="text-white font-medium">Justus Obisa</span> © {new Date().getFullYear()}
          </p>

          {/* System Online Text */}
          <div className="hidden md:flex items-center gap-2 text-gray-600 text-xs font-mono uppercase tracking-widest">
             <Zap size={14} className="text-emerald-600" /> System Online
          </div>

        </div>
      </div>
    </footer>
  );
}