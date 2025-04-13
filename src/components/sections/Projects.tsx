
import { useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  image: string;
}

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const projects: Project[] = [
    {
      id: 'magic-cart',
      title: 'Magic Cart',
      tagline: '1-Click Checkout via WhatsApp',
      problem: 'Traditional e-commerce checkout processes were causing cart abandonment and reducing conversion rates.',
      solution: 'Built a seamless WhatsApp-based checkout solution that allows customers to complete purchases with minimal friction.',
      impact: 'Increased checkout conversion by 32% and reduced cart abandonment by 45%.',
      stack: ['WhatsApp API', 'ChatGPT', 'Payment Gateway', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    },
    {
      id: 'chatbot-platform',
      title: 'Chatbot Platform',
      tagline: 'AI-powered commerce solution',
      problem: 'Companies struggled with managing customer queries at scale and providing personalized shopping experiences.',
      solution: 'Developed an AI-powered chatbot platform that integrates with e-commerce systems to provide personalized shopping assistance.',
      impact: 'Reduced customer support tickets by 60% and increased sales through chat by 25%.',
      stack: ['AI/ML', 'Natural Language Processing', 'E-commerce APIs', 'React'],
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    },
    {
      id: 'cart-abandonment',
      title: 'Cart Abandonment Journey',
      tagline: 'Smart recovery system',
      problem: 'High cart abandonment rates were leaving significant revenue on the table.',
      solution: 'Created an intelligent multi-channel recovery system that dynamically selects the optimal channel and message to reconnect with customers.',
      impact: 'Recovered 28% of abandoned carts, generating ₹2.5 CR in additional revenue.',
      stack: ['Marketing Automation', 'Behavioral Analytics', 'WhatsApp', 'Email'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    },
    {
      id: 'cpaas-payload',
      title: 'CPaaS Payload Personalization',
      tagline: 'Dynamic content delivery',
      problem: 'Generic messaging was resulting in poor engagement and conversion rates.',
      solution: 'Built a system that dynamically personalizes payload content based on user behavior, preferences, and real-time context.',
      impact: 'Improved engagement by 40% and increased click-through rates by 35%.',
      stack: ['Real-time Data Processing', 'Machine Learning', 'Template Engine', 'Microservices'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    },
  ];
  
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Featured Projects</h2>
        <div className="w-20 h-1 bg-electric-blue mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={projectsRef}>
          {projects.map((project) => (
            <Card key={project.id} className="hover-scale overflow-hidden border border-gray-200 hover:border-electric-blue transition-all">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.tagline}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-electric-blue mb-1">The Problem</h4>
                    <p className="text-gray-700">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-electric-blue mb-1">What I Built</h4>
                    <p className="text-gray-700">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-electric-blue mb-1">Business Impact</h4>
                    <p className="text-gray-700">{project.impact}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-electric-blue mb-1">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.stack.map((tech, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-electric-blue/10 text-electric-blue-dark rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-electric-blue hover:text-electric-blue-dark hover:bg-electric-blue/10">
                  Read Full Case Study <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
