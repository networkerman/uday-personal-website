
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '../ui/button';

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
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-gray-200">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-electric-blue/5 rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-electric-blue/5 rounded-tr-full" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block">Hi, I'm Udayan</span>
            <span className="text-gradient">Product Manager</span>
          </h1>
          
          <div className="h-8 overflow-hidden mb-8">
            <p className="text-xl md:text-2xl font-medium text-gray-600">
              Specializing in <span className="text-electric-blue font-bold animate-pulse-slow">{keywords[currentWord]}</span>
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            A builder at heart, product thinker by trade, and Martech specialist by design. 
            I help brands transform communication into conversions through innovation in CPaaS, 
            automation, and AI-driven user journeys.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="btn-primary">
              <a href="#projects"><span>Explore Projects</span></a>
            </Button>
            <Button asChild variant="outline" className="btn-outline">
              <a href="#contact"><span>Get in Touch</span></a>
            </Button>
          </div>
        </div>
      </div>
      
      <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <ArrowDown className="h-8 w-8 text-electric-blue" />
      </a>
    </section>
  );
};

export default Hero;
