"use client";
import { motion } from 'framer-motion';
import { Terminal, Mountain, Cpu, Layers, Database, Code2 } from 'lucide-react';

export default function About() {
  const skillCategories = [
    {
      title: "Backend & Systems",
      icon: <Terminal className="w-5 h-5 text-emerald-600" />,
      skills: ["Java", "Spring Boot", "Node.js", "SQL"]
    },
    {
      title: "Frontend Architecture",
      icon: <Layers className="w-5 h-5 text-cyan-600" />,
      skills: ["React", "Next.js", "React Native", "Tailwind CSS"]
    },
    {
      title: "Data & Infrastructure",
      icon: <Database className="w-5 h-5 text-purple-600" />,
      skills: ["MySQL", "Firebase", "Git", "RESTful APIs"]
    }
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      
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
        
        {/* Left Column: The Narrative */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="flex gap-4 group p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
          >
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl h-fit">
              <Code2 className="text-emerald-600 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Engineering Philosophy</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                As a Computer Science graduate from Masinde Muliro University, my focus has shifted from theoretical algorithms to building robust, commercial-grade applications from the ground up.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="flex gap-4 group p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all"
          >
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl h-fit">
              <Cpu className="text-cyan-600 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Hardware Integration</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Whether developing hardware-integrated Point of Sale systems or architecting seamless Property Management platforms, I engineer solutions that solve complex, real-world operational bottlenecks.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="flex gap-4 group p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all"
          >
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl h-fit">
              <Mountain className="text-purple-600 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Beyond the Terminal</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                When I'm not deep in my IDE, I'm planning my next mountaineering expedition. The endurance and strategic problem-solving required to summit mountains translate directly into how I tackle complex system architectures.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: The Tech Matrix */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          transition={{ delay: 0.4 }}
          className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg relative"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-8">
            Technical Arsenal
          </h3>

          <div className="space-y-8">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h4 className="text-slate-800 font-semibold">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-sm font-medium tracking-tight text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg hover:border-emerald-400 hover:text-emerald-700 transition-all cursor-default"
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