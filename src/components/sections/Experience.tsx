
import { BadgeIndianRupee, BriefcaseBusiness, Building } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  logo: string;
  metrics?: { value: string; label: string; icon: JSX.Element }[];
}

const Experience = () => {
  const experiences: Experience[] = [
    {
      company: 'Netcore Cloud',
      role: 'Senior Product Manager',
      period: '2022 - Present',
      description: 'Leading product strategy and development for CPaaS and marketing automation solutions.',
      achievements: [
        'Led development of WhatsApp commerce solutions increasing client revenue by 35%',
        'Spearheaded CPaaS payload personalization increasing engagement by 40%',
        'Launched AI-driven customer journey optimization tools'
      ],
      logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaCUyMGxvZ298fDB8fHx8MTcxMzA5NzgwMHww&ixlib=rb-4.0.3&q=80&w=400',
      metrics: [
        { value: '₹100 CR', label: 'ARR', icon: <BadgeIndianRupee className="h-5 w-5 text-electric-blue" /> },
        { value: '22%', label: 'QoQ Growth', icon: <BriefcaseBusiness className="h-5 w-5 text-electric-blue" /> },
      ],
    },
    {
      company: 'Ola Electric',
      role: 'Product Manager',
      period: '2020 - 2022',
      description: 'Managed customer experience products for electric vehicle ecosystem.',
      achievements: [
        'Built customer onboarding journeys improving activation by 28%',
        'Developed multi-channel notification system for service updates',
        'Created analytics dashboard for customer usage patterns'
      ],
      logo: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fGVsZWN0cmljJTIwY2FyfHwwfHx8fDE3MTMwOTc4NTB8MA&ixlib=rb-4.0.3&q=80&w=400',
      metrics: [
        { value: '450K', label: 'Users', icon: <Building className="h-5 w-5 text-electric-blue" /> },
      ],
    },
    {
      company: 'Capgemini Invent',
      role: 'Associate Consultant',
      period: '2018 - 2020',
      description: 'Delivered digital transformation consulting for enterprise clients.',
      achievements: [
        'Led customer journey mapping workshops for BFSI clients',
        'Designed automation solutions for operational efficiency',
        'Developed digital strategy roadmaps for retail clients'
      ],
      logo: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzN8fGNvbnN1bHRpbmd8fDB8fHx8MTcxMzA5Nzg4Mnww&ixlib=rb-4.0.3&q=80&w=400',
    },
  ];
  
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Professional Journey</h2>
        <div className="w-20 h-1 bg-electric-blue mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-electric-blue/30 pl-8 ml-4">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-16 relative">
                <div className="absolute -left-12 top-0 h-8 w-8 rounded-full bg-white border-2 border-electric-blue flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-electric-blue"></div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-white shadow-md rounded-lg p-4 w-20 h-20 flex items-center justify-center mb-4">
                      <img 
                        src={exp.logo} 
                        alt={exp.company} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                      <span className="text-electric-blue font-medium">{exp.company}</span>
                      <span className="hidden sm:block text-gray-400">•</span>
                      <span className="text-gray-500">{exp.period}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    
                    {exp.metrics && (
                      <div className="flex flex-wrap gap-4 mb-4">
                        {exp.metrics.map((metric, i) => (
                          <div key={i} className="flex items-center bg-electric-blue/5 px-3 py-2 rounded-md">
                            {metric.icon}
                            <div className="ml-2">
                              <div className="font-bold text-gray-900">{metric.value}</div>
                              <div className="text-xs text-gray-500">{metric.label}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <h4 className="font-medium text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
