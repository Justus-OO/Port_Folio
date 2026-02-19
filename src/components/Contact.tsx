"use client";
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const contactDetails = [
    { icon: <Mail className="w-5 h-5 text-emerald-600" />, label: "Email", value: "justusobisa5@gmail.com", href: "mailto:justusobisa5@gmail.com" },
    { icon: <Phone className="w-5 h-5 text-cyan-600" />, label: "Phone", value: "+254 715 980 740", href: "tel:+254715980740" },
    { icon: <MapPin className="w-5 h-5 text-purple-600" />, label: "Location", value: "Nairobi, Kenya", href: "#" }
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto border-t border-slate-200">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight flex items-center justify-center gap-3">
          <span className="text-emerald-600 font-mono text-xl md:text-2xl">03.</span> 
          Initiate Connection
        </h2>
        <div className="h-1 w-16 bg-emerald-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Let's build something <span className="text-emerald-600">great.</span></h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              I am actively exploring new engineering opportunities, graduate programs, and challenging projects. Whether you have an architectural problem to solve or just want to connect, my inbox is always open.
            </p>
            
            <a href="mailto:justusobisa5@gmail.com" className="group inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white transition-all duration-300 bg-emerald-600 rounded-xl hover:bg-emerald-700 hover:shadow-lg">
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Say Hello
            </a>
          </div>

          <div className="space-y-4">
            {contactDetails.map((item, index) => (
              <a key={index} href={item.href !== "#" ? item.href : undefined} className={`flex items-center gap-5 p-4 rounded-2xl border border-slate-100 bg-slate-50 transition-all duration-300 ${item.href !== "#" ? 'hover:border-emerald-200 hover:bg-white hover:shadow-sm cursor-pointer group' : 'cursor-default'}`}>
                <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-base font-semibold text-slate-800">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}