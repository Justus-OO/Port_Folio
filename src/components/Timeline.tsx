"use client";
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Terminal, 
  Rocket, 
  Briefcase, 
  ShieldCheck,
  Code2
} from 'lucide-react';

export default function Timeline() {
  const milestones = [
    {
      year: "MAY 2025 - SEPT 2025", 
      title: "Infrastructure Engineer", 
      organization: "Turnkey Africa Ltd",
      description: "Architected and maintained mission-critical application infrastructure. Leveraged Docker for containerization and Oracle DB for high-availability enterprise data management using Spring Boot, Angular, and PL/SQL.",
      icon: <Briefcase className="w-5 h-5 text-blue-600" />, 
      tags: ["Spring Boot", "Angular", "PL/SQL", "Oracle DB", "Docker", "ADF"]
    },
    {
      year: "2022 - Present", 
      title: "Full-Stack System Architect", 
      organization: "Independent Development",
      description: "Engineering high-performance, hybrid data architectures (PostgreSQL/SQLite). Successfully reduced application latency by 30% through advanced algorithmic tuning across diverse programming stacks.",
      icon: <Terminal className="w-5 h-5 text-emerald-600" />, 
      tags: ["Full-Stack", "Latency Optimization", "PostgreSQL", "System Design"]
    },
    {
      year: "2021 - 2025", 
      title: "B.Sc. Computer Science", 
      organization: "Masinde Muliro University",
      description: "Specialized in Machine Learning and Algorithms. Developed scalable neural networks with TensorFlow and Scikit-learn while leading programming initiatives at the MMUST Computer Science Club.",
      icon: <GraduationCap className="w-5 h-5 text-cyan-600" />, 
      tags: ["Python", "TensorFlow", "Scikit-learn", "Neural Networks", "Algorithms"]
    },
    {
      year: "2017 - 2020", 
      title: "Academic Foundation", 
      organization: "Nyambaria High School",
      description: "Established a core foundation in computational logic and advanced mathematics in Nyamira, setting the stage for a career in complex software engineering.",
      icon: <Rocket className="w-5 h-5 text-purple-600" />, 
      tags: ["Mathematics", "Physics", "Computing Fundamentals"]
    },
    {
      year: "Specialization", 
      title: "Cybersecurity & Networking", 
      organization: "Professional Foundations",
      description: "Focused on high-integrity system deployment, mastering TCP/IP and HTTP protocols alongside cybersecurity basics and bug bounty hunting.",
      icon: <ShieldCheck className="w-5 h-5 text-red-600" />, 
      tags: ["TCP/IP", "Network Security", "Bug Bounty", "Optimization"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-200">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Professional Evolution</h2>
        <div className="h-1 w-16 bg-emerald-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto flex flex-col items-center">
        {/* Central Vertical Line */}
        <div className="absolute left-[28px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-slate-200" />

        {milestones.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className="relative mb-12 flex items-center w-full justify-start md:justify-between">
              <div className={`hidden md:block w-5/12 ${isEven ? 'order-1' : 'order-3'}`}></div>

              {/* Status Node */}
              <motion.div
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                className="absolute left-[8px] md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center z-10 shadow-md order-1 md:order-2"
              >
                {item.icon}
              </motion.div>

              {/* Milestone Card */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -20 : 20, y: 10 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className={`w-full md:w-5/12 pl-16 md:pl-0 ${isEven ? 'order-2 md:order-1 md:text-right' : 'order-2 md:order-3 md:text-left'}`}
              >
                <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all duration-300 group">
                  <span className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-2 block">{item.year}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                  <h4 className="text-slate-500 text-sm font-semibold mb-4 uppercase tracking-wider">{item.organization}</h4>
                  <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">{item.description}</p>
                  
                  <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}