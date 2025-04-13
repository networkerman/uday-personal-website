
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">About Me</h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto mb-10"></div>
          
          <div className="space-y-6 text-lg text-gray-700">
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
            <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-electric-blue hover:shadow-md transition-all hover-scale"
                >
                  <div className="p-3 bg-electric-blue/10 rounded-full mb-3 text-electric-blue">
                    {skill.icon}
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Side Passions</h3>
            <div className="grid grid-cols-2 gap-6">
              {passions.map((passion, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-electric-blue hover:shadow-md transition-all hover-scale"
                >
                  <div className="p-3 bg-electric-blue/10 rounded-full mb-3 text-electric-blue">
                    {passion.icon}
                  </div>
                  <span className="font-medium">{passion.name}</span>
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
