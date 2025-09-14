
import { 
  BarChart, Users, MessageSquare, BrainCircuit, 
  TrendingUp, Rocket, Plane, UtensilsCrossed 
} from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Martech', icon: <MessageSquare className="h-6 w-6" /> },
    { name: 'CPaaS', icon: <Users className="h-6 w-6" /> },
    { name: 'API', icon: <BrainCircuit className="h-6 w-6" /> },
    { name: 'UX', icon: <Rocket className="h-6 w-6" /> },
    { name: 'Automation', icon: <BarChart className="h-6 w-6" /> },
    { name: 'Growth', icon: <TrendingUp className="h-6 w-6" /> }
  ];
  
  const passions = [
    { name: 'Licensed pilot', icon: <Plane className="h-6 w-6" /> },
    { name: 'Experimental chef', icon: <UtensilsCrossed className="h-6 w-6" /> }
  ];
  
  return (
    <section id="about" className="py-20 bg-bg relative">
      {/* Cosmic Orange gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"
           style={{
             background: 'linear-gradient(135deg, rgba(255,140,0,0.03) 0%, rgba(255,140,0,0.01) 50%, rgba(255,140,0,0.05) 100%)'
           }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-text">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-10"></div>
          
          <div className="space-y-6 text-lg text-subt">
            <p>
              With over 6 years of experience in scaling B2B SaaS platforms, I'm on a mission to 
              simplify complexity through product. My expertise lies at the intersection of marketing technology, 
              communication platforms, and customer journey optimization.
            </p>
            <p>
              I specialize in building products that transform how businesses communicate with their customers. 
              Through innovative CPaaS solutions, AI-driven automation, and strategic thinking, I help 
              companies increase conversions and create meaningful customer engagement.
            </p>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-text">Skills & Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center p-4 rounded-lg border border-accent/20 bg-gradient-to-br from-surface to-accent/5 hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all hover-scale"
                >
                  <div className="p-3 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full mb-3 text-accent">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-text">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-text">Side Passions</h3>
            <div className="grid grid-cols-2 gap-6">
              {passions.map((passion, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center p-4 rounded-lg border border-accent/20 bg-gradient-to-br from-surface to-accent/5 hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all hover-scale"
                >
                  <div className="p-3 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full mb-3 text-accent">
                    {passion.icon}
                  </div>
                  <span className="font-medium text-text">{passion.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
