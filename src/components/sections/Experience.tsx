import { useState } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BadgeIndianRupee, BriefcaseBusiness, Building, Award, GraduationCap, Briefcase, Lightbulb, Rocket, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Experience type definitions
interface BaseExperience {
  title: string;
  organization: string;
  startDate: string;
  endDate: string;
  description: string;
  skills?: string[];
  side: 'left' | 'right';
  type: 'work' | 'education' | 'internship' | 'fellowship' | 'entrepreneurial';
  metrics?: { value: string; label: string; icon: JSX.Element }[];
  verticalOffset?: number;
}

// Year marker for the timeline
const TimelineYear = ({ year, isActive }: { year: number; isActive: boolean }) => (
  <div className="relative">
    <div className={`h-4 w-4 rounded-full ${isActive ? 'bg-electric-blue shadow-lg shadow-electric-blue/50' : 'bg-gray-300'} absolute left-1/2 -translate-x-1/2`}></div>
    <div className="text-xs font-medium text-gray-500 absolute -left-6 transform -translate-x-100">{year}</div>
  </div>
);

// Calculate position based on date range and timeline span
const calculatePosition = (startDate: string, endDate: string, timelineStart: number, timelineEnd: number) => {
  const start = new Date(startDate).getFullYear() + (new Date(startDate).getMonth() / 12);
  const end = endDate === 'Present' 
    ? new Date().getFullYear() + (new Date().getMonth() / 12) 
    : new Date(endDate).getFullYear() + (new Date(endDate).getMonth() / 12);
  
  const timelineSpan = timelineEnd - timelineStart;
  const startPos = ((start - timelineStart) / timelineSpan) * 100;
  const endPos = ((end - timelineStart) / timelineSpan) * 100;
  const height = endPos - startPos;
  
  return { top: `${startPos}%`, height: `${height}%` };
};

// Get color based on experience type
const getTypeColor = (type: string) => {
  switch (type) {
    case 'work':
      return 'bg-blue-500/90 text-white border-blue-500/30';
    case 'education':
      return 'bg-red-500/90 text-white border-red-500/30';
    case 'internship':
      return 'bg-green-500/90 text-white border-green-500/30';
    case 'fellowship':
      return 'bg-purple-500/90 text-white border-purple-500/30';
    case 'entrepreneurial':
      return 'bg-orange-500/90 text-white border-orange-500/30';
    default:
      return 'bg-gray-500/90 text-white border-gray-500/30';
  }
};

// Get icon based on experience type
const getTypeIcon = (type: string) => {
  switch (type) {
    case 'work':
      return <Briefcase className="h-4 w-4" />;
    case 'education':
      return <GraduationCap className="h-4 w-4" />;
    case 'internship':
      return <Building className="h-4 w-4" />;
    case 'fellowship':
      return <Award className="h-4 w-4" />;
    case 'entrepreneurial':
      return <Rocket className="h-4 w-4" />;
    default:
      return <Lightbulb className="h-4 w-4" />;
  }
};

const Experience = () => {
  // Define the timeline span (reversed to show recent at top)
  const timelineStart = 2013;
  const timelineEnd = 2024;
  const years = Array.from({ length: timelineEnd - timelineStart + 1 }, (_, i) => timelineEnd - i);
  
  // Year visibility state for animation
  const [visibleYears, setVisibleYears] = useState<number[]>([timelineEnd]);
  
  // Experience data (pre-sorted with most recent first)
  const experiences: BaseExperience[] = [
    // Education (Right Side)
    {
      title: "Bachelor's in Electronics & Telecommunications Engineering",
      organization: "VIIT, Pune",
      startDate: "Aug 2013",
      endDate: "May 2017",
      description: "Completed with First Class Distinction, building a strong technical foundation.",
      side: "right",
      type: "education"
    },
    {
      title: "MBA-Tech, Finance & Marketing",
      organization: "BITS Pilani",
      startDate: "Jun 2019",
      endDate: "May 2021",
      description: "Graduated as Silver Medalist, specializing in product management and marketing strategies.",
      side: "right",
      type: "education",
      verticalOffset: -50
    },

    // Professional Experiences (Left Side)
    {
      title: "Senior Product Manager",
      organization: "Netcore Cloud",
      startDate: "Mar 2023",
      endDate: "Present",
      description: "Led the WhatsApp Ecosystem development, launching Magic Cart Checkout and boosting client engagement.",
      skills: ["Teamwork", "Go-to-Market Strategy", "Product Management"],
      side: "left",
      type: "work",
      metrics: [
        { value: '₹100 CR', label: 'ARR', icon: <BadgeIndianRupee className="h-4 w-4" /> },
        { value: '22%', label: 'QoQ Growth', icon: <BriefcaseBusiness className="h-4 w-4" /> }
      ]
    },
    {
      title: "Product Manager",
      organization: "Netcore Cloud",
      startDate: "Aug 2021",
      endDate: "Mar 2023",
      description: "Built the Journey Automation Platform, scaling WhatsApp revenue from ₹24 CR to ₹52 CR ARR with innovative features.",
      skills: ["Product Strategy", "Stakeholder Management", "Customer Journeys"],
      side: "left",
      type: "work",
      metrics: [
        { value: '₹45 CR', label: 'ARR', icon: <BadgeIndianRupee className="h-4 w-4" /> },
        { value: '18%', label: 'QoQ Growth', icon: <BriefcaseBusiness className="h-4 w-4" /> }
      ]
    },
    {
      title: "Product Consultant",
      organization: "Capgemini Invent (BYJU'S Client)",
      startDate: "Jan 2021",
      endDate: "Aug 2021",
      description: "Partnered with BYJU'S to enhance digital learning solutions, improving user engagement and scalability.",
      skills: ["Go-to-Market Strategy", "Stakeholder Management", "Product Management"],
      side: "left",
      type: "work"
    },
    {
      title: "Product Analyst Intern",
      organization: "Navi",
      startDate: "Oct 2020",
      endDate: "Nov 2020",
      description: "Analyzed user behavior to optimize loan application flows and inform product decisions.",
      skills: ["Competitive Assessment", "Problem Solving"],
      side: "left",
      type: "internship",
      verticalOffset: -120
    },
    {
      title: "Product Manager Intern",
      organization: "Brand Bazooka Advertising Pvt. Ltd.",
      startDate: "Jul 2020",
      endDate: "Aug 2020",
      description: "Developed the product strategy roadmap for LINC Pens, enhancing brand positioning.",
      skills: ["Competitive Assessment", "Stakeholder Management", "Key Performance Indicators"],
      side: "left",
      type: "internship",
      verticalOffset: -70
    },
    {
      title: "Founder - ProductX Club",
      organization: "BITS Pilani",
      startDate: "Aug 2019",
      endDate: "Apr 2021",
      description: "Created a community for product enthusiasts, organizing workshops and fostering industry connections.",
      skills: ["Presentation Skills", "Problem Solving"],
      side: "left",
      type: "entrepreneurial",
      verticalOffset: -110
    },
    {
      title: "Assistant Product Marketing Manager",
      organization: "Ola Electric",
      startDate: "Jun 2018",
      endDate: "Jul 2019",
      description: "Supported M&A due diligence for Etergo acquisition and collaborated on go-to-market strategies for Ola S1 e-scooter.",
      skills: ["Problem Solving"],
      side: "left",
      type: "work"
    },
    {
      title: "Network Engineer",
      organization: "Cisco",
      startDate: "Jan 2016",
      endDate: "Jun 2016",
      description: "Configured routers and implemented security protocols for BFSI clients, gaining hands-on technical experience.",
      skills: ["Problem Solving"],
      side: "left",
      type: "internship"
    },
    {
      title: "GrowthX Fellow",
      organization: "GrowthX®",
      startDate: "Feb 2024",
      endDate: "Present",
      description: "Engaged in a fellowship focused on Go-to-Market strategy and growth models with product leaders.",
      skills: ["Go-to-Market Strategy", "Growth Hacking", "Product Management"],
      side: "left",
      type: "fellowship"
    }
  ];

  // Handle scroll to show years progressively
  const handleTimelineScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollPosition = container.scrollTop;
    const containerHeight = container.clientHeight;
    const scrollRatio = scrollPosition / (container.scrollHeight - containerHeight);
    
    // Calculate which years should be visible based on scroll position
    const visibleCount = Math.max(1, Math.floor(scrollRatio * years.length) + 1);
    setVisibleYears(years.slice(0, visibleCount));
  };

  // Published articles
  const articles = [
    {
      title: "The End of Truecaller? How India's New Telecom Rules Might Erase It",
      date: "October 2023",
      summary: "A deep dive into how India's telecom regulations could impact apps like Truecaller.",
      link: "https://www.linkedin.com/pulse/end-truecaller-indias-new-telecom-rules-might-erase-das-chowdhury-5ei4f/"
    }
  ];
  
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Professional Journey</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          A decade of diverse experiences spanning product management, entrepreneurship, and continuous learning
        </p>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="h-[600px] overflow-y-auto" onScroll={handleTimelineScroll}>
            <div className="relative min-h-[1500px]">
              {/* Center timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              {/* Year markers */}
              {years.map((year, index) => (
                <div 
                  key={year}
                  className="absolute left-1/2 transform -translate-x-1/2" 
                  style={{ top: `${(index / (years.length - 1)) * 100}%` }}
                >
                  <TimelineYear year={year} isActive={visibleYears.includes(year)} />
                </div>
              ))}
              
              {/* Experience tiles */}
              {experiences.map((exp, index) => {
                const position = calculatePosition(exp.startDate, exp.endDate, timelineStart, timelineEnd);
                const typeColor = getTypeColor(exp.type);
                const typeIcon = getTypeIcon(exp.type);
                
                return (
                  <HoverCard key={`${exp.organization}-${index}`} openDelay={100} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div 
                        className={`absolute ${exp.side === 'left' ? 'right-1/2 mr-6' : 'left-1/2 ml-6'} 
                          p-0.5 cursor-pointer transform hover:scale-[1.03] transition-all duration-300
                          animate-fade-in`}
                        style={{ 
                          top: exp.verticalOffset 
                            ? `calc(${position.top} + ${exp.verticalOffset}px)` 
                            : position.top,
                          height: position.height,
                          minHeight: exp.type === 'education' ? '200px' : '50px',
                          maxWidth: '45%',
                          zIndex: experiences.length - index,
                        }}
                      >
                        <div className={`w-full h-full rounded-lg ${typeColor} p-4 shadow-sm border backdrop-blur-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md group`}>
                          <div className="flex items-center gap-1.5 text-xs font-semibold opacity-80">
                            {typeIcon}
                            <span>{exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}</span>
                          </div>
                          <div className="mt-2">
                            <h3 className="font-semibold text-sm md:text-base">{exp.title}</h3>
                            <p className="text-xs opacity-90 mt-1">{exp.organization}</p>
                            <p className="text-xs opacity-75 mt-1">
                              {exp.startDate} — {exp.endDate}
                            </p>
                          </div>
                        </div>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent
                      side={exp.side === 'left' ? 'left' : 'right'}
                      className="w-80 p-0 border shadow-lg"
                      sideOffset={5}
                    >
                      <div className={`p-4 rounded-t-md ${typeColor} border-b`}>
                        <div className="flex items-center gap-1.5 text-xs font-semibold mb-1">
                          {typeIcon}
                          <span>{exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}</span>
                        </div>
                        <h3 className="font-bold">{exp.title}</h3>
                        <p className="text-sm">{exp.organization}</p>
                        <p className="text-xs mt-1 opacity-80">
                          {exp.startDate} — {exp.endDate}
                        </p>
                      </div>
                      
                      <div className="p-4 bg-white rounded-b-md">
                        <ScrollArea className="max-h-48">
                          <p className="text-sm mb-3">{exp.description}</p>
                          
                          {exp.skills && exp.skills.length > 0 && (
                            <>
                              <Separator className="my-3" />
                              <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                  <div key={i} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                                    {skill}
                                  </div>
                                ))}
                              </div>
                            </>
                          )}
                          
                          {exp.metrics && (
                            <>
                              <Separator className="my-3" />
                              <div className="flex gap-3">
                                {exp.metrics.map((metric, i) => (
                                  <div key={i} className="flex items-center gap-1 bg-gray-50 rounded-md px-2 py-1">
                                    {metric.icon}
                                    <div>
                                      <div className="font-bold text-xs">{metric.value}</div>
                                      <div className="text-[10px] text-gray-500">{metric.label}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </>
                          )}
                        </ScrollArea>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                );
              })}
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              { type: 'work', label: 'Full-time Work' },
              { type: 'education', label: 'Education' },
              { type: 'internship', label: 'Internship' },
              { type: 'fellowship', label: 'Fellowship' },
              { type: 'entrepreneurial', label: 'Entrepreneurial' }
            ].map((item) => (
              <div key={item.type} className="flex items-center gap-1.5">
                <div className={`h-3 w-3 rounded ${getTypeColor(item.type).split(' ')[0]}`}></div>
                <span className="text-xs text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
          
          {/* Mobile Instructions */}
          <div className="mt-4 text-center text-xs text-gray-500 md:hidden">
            Scroll the timeline to explore my journey
          </div>
          
          {/* Desktop Instructions */}
          <div className="mt-4 text-center text-xs text-gray-500 hidden md:block">
            Hover over items to see detailed information
          </div>
        </div>

        {/* Articles Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Recent Articles</h3>
          
          <div className="grid gap-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow duration-300">
                <h4 className="text-lg font-semibold mb-2">{article.title}</h4>
                <p className="text-sm text-gray-500 mb-3">Published: {article.date}</p>
                <p className="text-sm text-gray-700 mb-4">{article.summary}</p>
                <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center">
                    Read on LinkedIn
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
