
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
  description: string[];
  side: 'left' | 'right';
  type: 'work' | 'education' | 'internship' | 'fellowship' | 'entrepreneurial';
  metrics?: { value: string; label: string; icon: JSX.Element }[];
}

// Year marker for the timeline
const TimelineYear = ({ year, isActive }: { year: number; isActive: boolean }) => (
  <div className="relative">
    <div className={`h-4 w-4 rounded-full ${isActive ? 'bg-electric-blue shadow-lg shadow-electric-blue/50' : 'bg-gray-300'} absolute left-1/2 -translate-x-1/2`}></div>
    <div className="text-xs font-medium text-gray-500 absolute -left-10">{year}</div>
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
  // Define the timeline span (reversed to show recent at top)
  const timelineStart = 2014;
  const timelineEnd = 2024;
  const years = Array.from({ length: timelineEnd - timelineStart + 1 }, (_, i) => timelineEnd - i);
  
  // Year visibility state for animation
  const [visibleYears, setVisibleYears] = useState<number[]>([timelineEnd]);
  
  // Experience data (pre-sorted with most recent first)
  const experiences: BaseExperience[] = [
    // Work experiences (left side)
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
    
    // Education, Internships, Fellowships, and Entrepreneurial Ventures (right side)
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
      title: "Bachelor's in Electronics & Telecommunications Engineering",
      organization: "VIIT Pune",
      startDate: "Aug 2014",
      endDate: "May 2018",
      side: "right",
      type: "education",
      description: [
        "Passed First Class with Distinction"
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
                // Reverse the calculation for timeline position since years are now in reverse
                const yearIndex = years.indexOf(new Date(exp.startDate).getFullYear());
                const nextYearIndex = years.indexOf(
                  exp.endDate === 'Present' 
                    ? years[0] 
                    : Math.min(new Date(exp.endDate).getFullYear(), years[0])
                );
                
                const top = `${(yearIndex / (years.length - 1)) * 100}%`;
                const height = nextYearIndex <= yearIndex 
                  ? `${((nextYearIndex - yearIndex) / (years.length - 1)) * 100}%`
                  : '5%'; // Minimum height for short experiences
                
                const typeColor = getTypeColor(exp.type);
                const typeIcon = getTypeIcon(exp.type);
                
                // Offset for items on the same side that might overlap
                let offsetStyle = {};
                if (index > 0) {
                  const prevExp = experiences[index - 1];
                  if (prevExp.side === exp.side) {
                    // Check if there's a potential overlap based on years
                    const prevYearStart = new Date(prevExp.startDate).getFullYear();
                    const prevYearEnd = prevExp.endDate === 'Present' 
                      ? new Date().getFullYear() 
                      : new Date(prevExp.endDate).getFullYear();
                    
                    const currYearStart = new Date(exp.startDate).getFullYear();
                    const currYearEnd = exp.endDate === 'Present' 
                      ? new Date().getFullYear() 
                      : new Date(exp.endDate).getFullYear();
                    
                    // If years overlap
                    if ((currYearStart <= prevYearEnd && currYearStart >= prevYearStart) ||
                        (currYearEnd <= prevYearEnd && currYearEnd >= prevYearStart) ||
                        (prevYearStart <= currYearEnd && prevYearStart >= currYearStart)) {
                      offsetStyle = exp.side === 'left' 
                        ? { marginLeft: '-20px' } 
                        : { marginRight: '-20px' };
                    }
                  }
                }
                
                return (
                  <HoverCard key={`${exp.organization}-${index}`} openDelay={100} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div 
                        className={`absolute ${exp.side === 'left' ? 'right-1/2 mr-6' : 'left-1/2 ml-6'} p-0.5 cursor-pointer transform hover:scale-[1.03] transition-transform duration-300`}
                        style={{ 
                          top,
                          minHeight: '80px', // Ensure minimum height for all tiles
                          maxWidth: '45%',
                          zIndex: experiences.length - index,
                          ...offsetStyle
                        }}
                      >
                        <div className={`w-full rounded-lg ${typeColor} p-4 shadow-sm border backdrop-blur-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md group`}>
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
