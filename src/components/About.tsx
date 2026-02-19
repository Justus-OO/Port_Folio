"use client";
import { motion } from 'framer-motion';
import { Terminal, Mountain, Cpu, Layers, Database, Code2, Globe, ShieldCheck } from 'lucide-react';

export default function About() {
  const skillCategories = [
    {
      title: "Enterprise & Backend",
      icon: <Database className="w-5 h-5 text-emerald-600" />,
      skills: ["Java", "Spring Boot", "PL/SQL", "Oracle DB", "PostgreSQL", "Node.js"]
    },
    {
      title: "Frontend & Mobile",
      icon: <Layers className="w-5 h-5 text-cyan-600" />,
      skills: ["React", "Angular", "Next.js", "React Native", "Flutter", "Tailwind CSS"]
    },
    {
      title: "DevOps & Infrastructure",
      icon: <Globe className="w-5 h-5 text-blue-600" />,
      skills: ["Docker", "Git", "ADF", "System Infrastructure", "RESTful APIs"]
    },
    {
      title: "Intelligence & Logic",
      icon: <Cpu className="w-5 h-5 text-purple-600" />,
      skills: ["Python", "TensorFlow", "Scikit-learn", "Algorithms", "Kotlin", "C++"]
    }
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-200 bg-slate-50/30">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3">
          <span className="text-emerald-600 font-mono text-xl md:text-2xl">02.</span> 
          System Architect
        </h2>
        <div className="h-1 w-16 bg-emerald-500 mt-4 rounded-full" />
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: The Professional Narrative */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex gap-4 mb-4">
              <div className="p-3 bg-emerald-50 rounded-xl h-fit">
                <Code2 className="text-emerald-600 w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 self-center">Engineering Depth</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              I am a Software Engineer and Computer Science graduate from Masinde Muliro University. Since 2022, I have mastered a diverse stack of programming languages to build robust, scalable applications from the ground up. 
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex gap-4 mb-4">
              <div className="p-3 bg-blue-50 rounded-xl h-fit">
                <ShieldCheck className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 self-center">Infrastructure & Scalability</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              My tenure as an Infrastructure Engineer at Turnkey Africa allowed me to specialize in maintaining mission-critical systems. I leveraged Docker and Oracle DB to ensure high-availability and secure data management.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex gap-4 mb-4">
              <div className="p-3 bg-purple-50 rounded-xl h-fit">
                <Mountain className="text-purple-600 w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 self-center">Problem Solving Persona</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Beyond the terminal, I am an avid mountaineer. I find that the persistence and endurance required to summit mountains translate perfectly into tackling complex software challenges and performance optimization.
            </p>
          </motion.div>
        </div>

        {/* Right Column: The Expanded Technical Arsenal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">
            Technical Arsenal
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-3">
                  {category.icon}
                  <h4 className="text-slate-800 font-bold text-sm uppercase tracking-wider">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-[11px] font-bold tracking-tight text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md hover:border-emerald-400 hover:text-emerald-700 transition-all cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}