import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import StarBackground from './components/StarBackground';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <StarBackground mousePosition={mousePosition} />
      
      <div className="relative z-10">
        <Navbar scrollY={scrollY} />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Hero mousePosition={mousePosition} />
          <About />
          <Skills />
          <Education />
          <Certifications />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;