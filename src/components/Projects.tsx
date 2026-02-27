"use client";
import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3">
          <span className="text-emerald-600 font-mono text-xl md:text-2xl">01.</span> 
          Featured Architecture
        </h2>
        <div className="h-1 w-16 bg-emerald-500 mt-4 rounded-full" />
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 overflow-hidden"
          >
            {/* 1. Make the Image a direct link to the Live Demo */}
            <a 
              href={project.external !== "#" ? project.external : project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative h-60 w-full overflow-hidden bg-slate-100 border-b border-slate-200 block"
            >
              <div className="absolute inset-0 flex items-center justify-center text-slate-300 z-0">
                <FolderGit2 size={80} strokeWidth={1} />
              </div>
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 z-10"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center">
                 <span className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                   View Project
                 </span>
              </div>
            </a>

            {/* Content Section */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {project.title}
                </h3>
                
                {/* 2. Enhanced Link Action Buttons */}
                <div className="flex gap-4 text-slate-400 z-30">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-emerald-600 hover:scale-110 transition-all p-1"
                    title="View Source Code"
                  >
                    <Github size={22} />
                  </a>
                  {project.external !== "#" && (
                    <a 
                      href={project.external} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-emerald-600 hover:scale-110 transition-all p-1"
                      title="Live Demo"
                    >
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-slate-600 text-base mb-8 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-100">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-semibold tracking-wide text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-md border border-emerald-100">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}