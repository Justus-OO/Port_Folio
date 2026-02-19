import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tighter">JO.</span>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#projects" className="hover:text-emerald-400 transition">Projects</a>
          <a href="#about" className="hover:text-emerald-400 transition">About</a>
          <a href="#contact" className="hover:text-emerald-400 transition">Contact</a>
        </div>

        <div className="flex gap-4">
          <a href="https://github.com/justus-00" target="_blank"><Github size={20} className="hover:text-emerald-400 transition" /></a>
          <a href="https://www.linkedin.com/in/justus-onyiego-397914346/" target="_blank"><Linkedin size={20} className="hover:text-emerald-400 transition" /></a>
        </div>
      </div>
    </nav>
  );
}