import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Timeline from '@/components/Timeline';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <About/>
      <Timeline/>
      <Contact/>
      <Footer/>
      {/* We will add the Project Grid next! */}
    </main>
  );
}