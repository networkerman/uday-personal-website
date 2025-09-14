
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const keywords = ['Martech', 'AI Agents', 'WhatsApp Commerce', 'CPaaS', 'Product'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % keywords.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-bg">
      {/* Cosmic Orange gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"
           style={{
             background: 'radial-gradient(1200px 800px at 20% -10%, rgba(255,140,0,0.12), transparent), radial-gradient(1000px 600px at 80% 20%, rgba(255,140,0,0.08), transparent), radial-gradient(800px 400px at 50% 50%, rgba(255,140,0,0.05), transparent)'
           }} />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-text"
          >
            <span className="block">Hi, I'm Udayan</span>
            <span className="text-gradient">Product Manager</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="h-8 overflow-hidden mb-8"
          >
            <p className="text-xl md:text-2xl font-medium text-subt">
              Specializing in <span className="text-accent font-bold animate-pulse-slow">{keywords[currentWord]}</span>
            </p>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl text-subt mb-10 max-w-2xl mx-auto"
          >
            A builder at heart, product thinker by trade, and Martech specialist by design. 
            I help brands transform communication into conversions through innovation in CPaaS, 
            automation, and AI-driven user journeys.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button asChild className="glass px-5 py-3 text-sm font-medium">
              <a href="#projects"><span>Explore Projects</span></a>
            </Button>
            <Button asChild variant="outline" className="px-5 py-3 text-sm font-medium border border-accent/40 rounded-xl2 hover:bg-accent/10 transition-colors duration-200">
              <a href="#contact"><span>Get in Touch</span></a>
            </Button>
          </motion.div>

          {/* Glass highlight card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
            className="mt-16 p-6 md:p-8 glass"
          >
            <div className="text-sm uppercase tracking-widest text-subt">Highlights</div>
            <div className="mt-3 grid gap-6 sm:grid-cols-3">
              <Metric label="WhatsApp MAUs" value="40%" />
              <Metric label="RCS Pilots" value="12+" />
              <Metric label="Campaign Lift" value="18%" />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float"
      >
        <ArrowDown className="h-8 w-8 text-accent" />
      </motion.a>
    </section>
  );
};

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45 }}
      className="rounded-xl2 border border-white/5 bg-surface/30 p-5"
    >
      <div className="text-3xl font-semibold text-text">{value}</div>
      <div className="text-subt text-sm mt-1">{label}</div>
    </motion.div>
  )
}

export default Hero;
