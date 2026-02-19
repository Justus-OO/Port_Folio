"use client";
import { Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-black tracking-tighter text-slate-900">JO.</span>
        
        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
          <a href="#projects" className="hover:text-emerald-600 transition">Projects</a>
          <a href="#about" className="hover:text-emerald-600 transition">About</a>
          <a href="#experience" className="hover:text-emerald-600 transition">Experience</a>
          <a href="#contact" className="hover:text-emerald-600 transition">Contact</a>
        </div>

        <div className="flex gap-4 text-slate-400">
          <a href="https://github.com/justus-00" target="_blank" rel="noreferrer"><Github size={20} className="hover:text-emerald-600 transition" /></a>
          <a href="https://www.linkedin.com/in/justus-obisa-81087139b/" target="_blank" rel="noreferrer"><Linkedin size={20} className="hover:text-emerald-600 transition" /></a>
        </div>
      </div>
    </nav>
  );
}