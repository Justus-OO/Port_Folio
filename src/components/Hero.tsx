export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 flex flex-col items-center">
      {/* Subtle Background Glow */}
      <div className="absolute top-20 -z-10 h-[300px] w-[300px] bg-emerald-500/10 blur-[120px] rounded-full" />
      
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Building <span className="text-emerald-500">Robust</span> Systems for the Modern Web.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
          I'm <span className="text-white font-medium">Justus Obisa</span>, a Computer Science graduate based in Nairobi. 
          I specialize in full-stack development, creating high-performance POS systems and property management solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-4 px-10 rounded-xl transition-all shadow-lg shadow-emerald-500/20">
            View My Work
          </a>
          <a href="mailto:justusobisa5@gmail.com" className="bg-white/5 hover:bg-white/10 border border-white/10 py-4 px-10 rounded-xl font-bold transition-all">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}