
import { useState } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BadgeIndianRupee, BriefcaseBusiness, Building, Award, GraduationCap, Briefcase, Lightbulb, Rocket } from 'lucide-react';

// Experience type definitions
interface BaseExperience {
  title: string;
  organization: string;
  startDate: string;
  endDate: string;
  description: string[];
  side: 'left' | 'right';
  type: 'work' | 'education' | 'internship' | 'fellowship' | 'entrepreneurial';
  metrics?: { value: string; label: string; icon: JSX.Element }[];
}

// Year marker for the timeline
const TimelineYear = ({ year, isActive }: { year: number; isActive: boolean }) => (
  <div className="relative">
    <div className={`h-4 w-4 rounded-full ${isActive ? 'bg-electric-blue shadow-lg shadow-electric-blue/50' : 'bg-gray-300'} absolute left-1/2 -translate-x-1/2`}></div>
    <div className="text-xs font-medium text-gray-500 absolute -left-7">{year}</div>
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
      return 'bg-electric-blue/90 text-white border-electric-blue/30';
    case 'education':
      return 'bg-emerald-100 text-emerald-900 border-emerald-200';
    case 'internship':
      return 'bg-amber-100 text-amber-900 border-amber-200';
    case 'fellowship':
      return 'bg-orange-100 text-orange-900 border-orange-200';
    case 'entrepreneurial':
      return 'bg-purple-100 text-purple-900 border-purple-200';
    default:
      return 'bg-gray-100 text-gray-900 border-gray-200';
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
  // Define the timeline span
  const timelineStart = 2014;
  const timelineEnd = 2024;
  const years = Array.from({ length: timelineEnd - timelineStart + 1 }, (_, i) => timelineStart + i);
  
  // Year visibility state for animation
  const [visibleYears, setVisibleYears] = useState<number[]>([timelineStart]);
  
  // Experience data
  const experiences: BaseExperience[] = [
    // Work experiences (left side)
    {
      title: "Network Engineer",
      organization: "Cisco",
      startDate: "Jan 2016",
      endDate: "Jun 2016",
      side: "left",
      type: "work",
      description: [
        "Configured routers for BFSI clients using Cisco series 17XX, 18XX, 19XX, 21XX, 36XX",
        "Implemented security protocols to meet client needs in the BFSI vertical"
      ]
    },
    {
      title: "Assistant Product Marketing Manager",
      organization: "Ola Electric",
      startDate: "Jun 2018",
      endDate: "Jul 2019",
      side: "left",
      type: "work",
      description: [
        "Conducted due diligence and synergy analysis for the acquisition of Etergo, foundational to Ola S1",
        "Collaborated with Bhavish Aggarwal on go-to-market strategy and product positioning"
      ]
    },
    {
      title: "Product Consultant",
      organization: "Capgemini Invent (BYJU'S Client)",
      startDate: "Jan 2021",
      endDate: "Aug 2021",
      side: "left",
      type: "work",
      description: [
        "Partnered with BYJU'S to enhance digital learning UX and engagement",
        "Aligned product, engineering, and business teams to improve learning outcomes and scalability"
      ]
    },
    {
      title: "Product Manager",
      organization: "Netcore Cloud",
      startDate: "Aug 2021",
      endDate: "Mar 2023",
      side: "left",
      type: "work",
      description: [
        "Built a scalable Journey Automation Platform integrating WhatsApp, Viber, RCS, and Zalo",
        "Led WhatsApp integration into the Campaign Module for targeted communication",
        "Delivered interactive features like CTA URLs, rich media, and carousels",
        "Collaborated to launch deflector APIs and attribution dashboards"
      ],
      metrics: [
        { value: '₹45 CR', label: 'ARR', icon: <BadgeIndianRupee className="h-4 w-4" /> },
        { value: '18%', label: 'QoQ Growth', icon: <BriefcaseBusiness className="h-4 w-4" /> },
      ]
    },
    {
      title: "Senior Product Manager",
      organization: "Netcore Cloud",
      startDate: "Mar 2023",
      endDate: "May 2024",
      side: "left",
      type: "work",
      description: [
        "Spearheaded the WhatsApp Ecosystem, establishing Netcore as a market leader",
        "Designed Magic Cart Checkout and Cart Abandonment journeys on WhatsApp",
        "Integrated WhatsApp Payments and attributed payments to ROI dashboards",
        "Launched a chatbot platform for conversational commerce and support"
      ],
      metrics: [
        { value: '₹100 CR', label: 'ARR', icon: <BadgeIndianRupee className="h-4 w-4" /> },
        { value: '22%', label: 'QoQ Growth', icon: <BriefcaseBusiness className="h-4 w-4" /> },
      ]
    },
    {
      title: "Senior Growth Product Manager",
      organization: "Netcore Cloud",
      startDate: "May 2024",
      endDate: "Present",
      side: "left",
      type: "work",
      description: [
        "Driving Netcore's 10X growth through Product-Led Growth strategies",
        "Building scalable growth engines and aligning teams to a user-driven vision",
        "Focusing on activation, adoption, and monetization levers"
      ]
    },
    
    // Education, Internships, Fellowships, and Entrepreneurial Ventures (right side)
    {
      title: "Bachelor's in Electronics & Telecommunications Engineering",
      organization: "VIIT Pune",
      startDate: "Aug 2014",
      endDate: "May 2018",
      side: "right",
      type: "education",
      description: [
        "Passed First Class with Distinction"
      ]
    },
    {
      title: "MBA-Tech, Finance & Marketing",
      organization: "BITS Pilani",
      startDate: "Aug 2019",
      endDate: "Apr 2021",
      side: "right",
      type: "education",
      description: [
        "Passed as Silver Medalist"
      ]
    },
    {
      title: "Founder - ProductX Club",
      organization: "BITS Pilani",
      startDate: "Aug 2019",
      endDate: "Apr 2021",
      side: "right",
      type: "entrepreneurial",
      description: [
        "Established a thriving community for product managers and enthusiasts",
        "Curated content and hosted workshops, webinars, and networking events",
        "Managed operations, budgets, and partnerships for growth"
      ]
    },
    {
      title: "Product Manager Intern",
      organization: "Brand Bazooka Advertising Pvt. Ltd.",
      startDate: "Jul 2020",
      endDate: "Aug 2020",
      side: "right",
      type: "internship",
      description: [
        "Developed a product strategy roadmap for LINC Pens"
      ]
    },
    {
      title: "Product Analyst Intern",
      organization: "Navi",
      startDate: "Oct 2020",
      endDate: "Nov 2020",
      side: "right",
      type: "internship",
      description: [
        "Analyzed user behavior to optimize loan application flow",
        "Supported product decisions with data analysis and KPI tracking"
      ]
    },
    {
      title: "GrowthX Fellow",
      organization: "GrowthX®",
      startDate: "Feb 2024",
      endDate: "Present",
      side: "right",
      type: "fellowship",
      description: [
        "Mastered Go-to-Market strategy, growth models, and PLG thinking",
        "Collaborated with product leaders to enhance experimentation skills"
      ]
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
  
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Professional Journey</h2>
        <div className="w-20 h-1 bg-electric-blue mx-auto mb-8"></div>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          A decade of diverse experiences spanning product management, entrepreneurship, and continuous learning
        </p>
        
        <div className="relative max-w-6xl mx-auto">
          <div 
            className="h-[600px] overflow-y-auto"
            onScroll={handleTimelineScroll}
          >
            <div className="relative min-h-[1200px]">
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
                const { top, height } = calculatePosition(
                  exp.startDate, 
                  exp.endDate, 
                  timelineStart, 
                  timelineEnd
                );
                
                const typeColor = getTypeColor(exp.type);
                const typeIcon = getTypeIcon(exp.type);
                
                // Offset for items on the same side that might overlap
                let offsetStyle = {};
                if (index > 0) {
                  const prevExp = experiences[index - 1];
                  if (prevExp.side === exp.side) {
                    const prevPos = calculatePosition(
                      prevExp.startDate, 
                      prevExp.endDate, 
                      timelineStart, 
                      timelineEnd
                    );
                    
                    // Check if there's an overlap
                    const prevBottom = parseFloat(prevPos.top) + parseFloat(prevPos.height);
                    const currentTop = parseFloat(top);
                    
                    if (currentTop < prevBottom) {
                      offsetStyle = exp.side === 'left' 
                        ? { marginLeft: '-10px' } 
                        : { marginRight: '-10px' };
                    }
                  }
                }
                
                return (
                  <HoverCard key={`${exp.organization}-${index}`} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div 
                        className={`absolute ${exp.side === 'left' ? 'right-1/2 mr-6' : 'left-1/2 ml-6'} p-0.5 cursor-pointer transform hover:scale-[1.03] transition-transform duration-300`}
                        style={{ 
                          top, 
                          height,
                          maxWidth: '45%',
                          minHeight: '60px',
                          zIndex: experiences.length - index,
                          ...offsetStyle
                        }}
                      >
                        <div className={`h-full w-full rounded-lg ${typeColor} p-3 shadow-sm border backdrop-blur-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md group overflow-hidden`}>
                          <div className="flex items-center gap-1.5 text-xs font-semibold opacity-80">
                            {typeIcon}
                            <span>{exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}</span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-sm md:text-base line-clamp-2 group-hover:line-clamp-none transition-all duration-300">{exp.title}</h3>
                            <p className="text-xs opacity-90">{exp.organization}</p>
                          </div>
                          <div className="text-xs opacity-75 mt-auto pt-1">
                            {exp.startDate} — {exp.endDate}
                          </div>
                        </div>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent
                      side={exp.side === 'left' ? 'left' : 'right'}
                      className="w-80 p-0 border shadow-lg"
                      sideOffset={5}
                    >
                      <div className={`p-4 rounded-t-md ${typeColor.split(' ')[0]} border-b`}>
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
                          <ul className="space-y-2 text-sm">
                            {exp.description.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1 w-1 rounded-full bg-electric-blue flex-shrink-0"></span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          
                          {exp.metrics && (
                            <>
                              <Separator className="my-3" />
                              <div className="flex gap-3 mt-2">
                                {exp.metrics.map((metric, i) => (
                                  <div key={i} className="flex items-center gap-1 bg-electric-blue/5 rounded-md px-2 py-1">
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
              { type: 'work', label: 'Work' },
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
      </div>
    </section>
  );
};

export default Experience;
