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
            className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative h-60 w-full overflow-hidden bg-slate-100 border-b border-slate-200">
              <div className="absolute inset-0 flex items-center justify-center text-slate-300 z-0">
                <FolderGit2 size={80} strokeWidth={1} />
              </div>
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 z-10"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-4 text-slate-400">
                  <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-emerald-600 hover:scale-110 transition-all"><Github size={22} /></a>
                  <a href={project.external} target="_blank" rel="noreferrer" className="hover:text-emerald-600 hover:scale-110 transition-all"><ExternalLink size={22} /></a>
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