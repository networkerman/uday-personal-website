import { useState, useEffect, useRef, useMemo } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  BadgeIndianRupee, Building, Award, GraduationCap, Briefcase, 
  Rocket, ExternalLink, Users, Target, Filter 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

// Experience type definitions
interface Experience {
  title: string;
  organization: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills?: string[];
  side: 'left' | 'right';
  type: 'work' | 'education' | 'internship' | 'fellowship' | 'entrepreneurial';
  location?: string;
  metrics?: { value: string; label: string; icon: JSX.Element }[];
}

// Get color based on experience type
const getTypeColor = (type: string) => {
  const colors = {
    work: 'bg-blue-500 text-white',
    education: 'bg-green-500 text-white',
    internship: 'bg-yellow-500 text-white',
    fellowship: 'bg-orange-500 text-white',
    entrepreneurial: 'bg-purple-500 text-white'
  };
  return colors[type] || 'bg-button-bg text-button-text';
};

// Get icon based on experience type
const getTypeIcon = (type: string) => {
  const icons = {
    work: <Briefcase className="h-4 w-4" />,
    education: <GraduationCap className="h-4 w-4" />,
    internship: <Building className="h-4 w-4" />,
    fellowship: <Award className="h-4 w-4" />,
    entrepreneurial: <Rocket className="h-4 w-4" />
  };
  return icons[type] || <Briefcase className="h-4 w-4" />;
};

const Experience = () => {
  // Animation references
  const timelineRef = useRef<HTMLDivElement>(null);
  const [visibleYear, setVisibleYear] = useState(new Date().getFullYear());
  
  // Filter state
  const [activeTypeFilters, setActiveTypeFilters] = useState<string[]>([]);
  const [activeSkillFilters, setActiveSkillFilters] = useState<string[]>([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [showSkillFilters, setShowSkillFilters] = useState(false);

  // Published articles
  const articles = [
    {
      title: "The End of Truecaller? How India's New Telecom Rules Might Erase It",
      date: "October 2023",
      summary: "A deep dive into how India's telecom regulations could impact apps like Truecaller.",
      link: "https://www.linkedin.com/pulse/end-truecaller-indias-new-telecom-rules-might-erase-das-chowdhury-5ei4f/"
    }
  ];

  // Experience data (sorted with most recent first)
  const experiences: Experience[] = [
    {
      title: "Senior Growth Product Manager",
      organization: "Netcore Cloud",
      startDate: "May 2024",
      endDate: "Present",
      description: [
        "Driving 10X growth through Product-Led Growth strategies",
        "Building scalable growth engines and aligning cross-functional teams to a unified, user-driven vision"
      ],
      skills: ["Product-Led Growth", "Growth Strategy", "Team Leadership"],
      side: "left",
      type: "work",
      location: "Mumbai, Maharashtra, India",
      metrics: [
        { value: '10X', label: 'Growth Target', icon: <Target className="h-4 w-4" /> },
        { value: 'PLG', label: 'Strategy', icon: <Users className="h-4 w-4" /> }
      ]
    },
    {
      title: "GrowthX Fellow",
      organization: "GrowthX®",
      startDate: "Feb 2024",
      endDate: "Present",
      description: [
        "Developed expertise in Go-to-Market strategy, growth hacking, and PLG",
        "Collaborated with top product leaders to refine experimental and monetization techniques"
      ],
      skills: ["Go-to-Market Strategy", "Growth Hacking", "Product-Led Growth"],
      side: "right",
      type: "fellowship",
      location: ""
    },
    {
      title: "Senior Product Manager",
      organization: "Netcore Cloud",
      startDate: "Mar 2023",
      endDate: "May 2024",
      description: [
        "Spearheaded the WhatsApp Ecosystem, establishing Netcore as a market leader",
        "Designed Magic Cart Checkout and Cart Abandonment journeys",
        "Integrated WhatsApp Payments into ROI dashboards and launched a chatbot platform"
      ],
      skills: ["WhatsApp Business API", "Product Strategy", "Team Leadership"],
      side: "left",
      type: "work",
      location: "Mumbai, Maharashtra, India",
      metrics: [
        { value: '₹100 CR', label: 'ARR Impact', icon: <BadgeIndianRupee className="h-4 w-4" /> },
        { value: '22%', label: 'QoQ Growth', icon: <Target className="h-4 w-4" /> }
      ]
    },
    {
      title: "Product Manager",
      organization: "Netcore Cloud",
      startDate: "Aug 2021",
      endDate: "Mar 2023",
      description: [
        "Built a scalable Journey Automation Platform integrating WhatsApp, Viber, RCS, and Zalo",
        "Led integration of WhatsApp into the Campaign Module and delivered interactive features",
        "Rolled out deflector APIs and attribution dashboards"
      ],
      skills: ["Product Management", "API Integration", "Technical Leadership"],
      side: "left",
      type: "work",
      location: "Gurugram, Haryana, India",
      metrics: [
        { value: '₹45 CR', label: 'ARR Impact', icon: <BadgeIndianRupee className="h-4 w-4" /> },
        { value: '18%', label: 'QoQ Growth', icon: <Target className="h-4 w-4" /> }
      ]
    },
    {
      title: "Product Consultant",
      organization: "Capgemini Invent (BYJU'S Client)",
      startDate: "Jan 2021",
      endDate: "Aug 2021",
      description: [
        "Enhanced digital learning UX and engagement for BYJU'S",
        "Aligned product, engineering, and business teams to improve scalability"
      ],
      skills: ["Product Strategy", "UX Design", "Team Alignment"],
      side: "left",
      type: "work",
      location: "Gurugram, Haryana, India"
    },
    {
      title: "Product Analyst Intern",
      organization: "Navi",
      startDate: "Oct 2020",
      endDate: "Nov 2020",
      description: [
        "Conducted user behavior analysis and optimized loan application flow"
      ],
      skills: ["Data Analysis", "User Research", "Process Optimization"],
      side: "right",
      type: "internship",
      location: "Delhi, India"
    },
    {
      title: "Product Manager Intern",
      organization: "Brand Bazooka Advertising Pvt. Ltd.",
      startDate: "Jul 2020",
      endDate: "Aug 2020",
      description: [
        "Developed a strategic roadmap for LINC Pens"
      ],
      skills: ["Product Strategy", "Market Research", "Roadmapping"],
      side: "right",
      type: "internship",
      location: "Delhi, India"
    },
    {
      title: "Founder - ProductX Club",
      organization: "Birla Institute of Technology and Science, Pilani",
      startDate: "Aug 2019",
      endDate: "Apr 2021",
      description: [
        "Established a vibrant community for product managers and enthusiasts",
        "Curated content, hosted workshops/webinars, and forged strategic partnerships"
      ],
      skills: ["Community Building", "Event Management", "Content Curation"],
      side: "right",
      type: "entrepreneurial",
      location: "Pilani, Rajasthan, India"
    },
    {
      title: "Assistant Product Marketing Manager",
      organization: "Ola Electric",
      startDate: "Jun 2018",
      endDate: "Jul 2019",
      description: [
        "Conducted due diligence and synergy analysis for the acquisition of Etergo (foundation for Ola S1)",
        "Collaborated with Bhavish Aggarwal on GTM strategy and product positioning"
      ],
      skills: ["Product Marketing", "GTM Strategy", "Market Analysis"],
      side: "left",
      type: "work",
      location: "Pune, Maharashtra, India"
    },
    {
      title: "Network Engineer",
      organization: "Cisco",
      startDate: "Jan 2017",
      endDate: "Jun 2018",
      description: [
        "Configured routers for BFSI clients (Cisco series 17XX, 18XX, 19XX, 21XX, 36XX)",
        "Implemented security protocols tailored for BFSI"
      ],
      skills: ["Network Configuration", "Security Protocols", "BFSI Domain"],
      side: "left", // Changed from right to left to match other work experiences
      type: "work",
      location: "Pune, Maharashtra, India"
    },
    {
      title: "B.Tech, Computer Engineering",
      organization: "Vishwakarma Institute of Information Technology",
      startDate: "Aug 2013",
      endDate: "May 2017",
      description: ["Graduated with distinction, focusing on computer engineering and network security."],
      skills: ["Computer Engineering", "Network Security", "Programming"],
      side: "left",
      type: "education",
      location: "Pune, Maharashtra, India"
    },
  ];

  // Extract all unique skills across experiences
  const allSkills = Array.from(new Set(
    experiences.flatMap(exp => exp.skills || [])
  )).sort();

  // Filter experiences based on active filters
  const filteredExperiences = experiences.filter(exp => {
    // Type filter check
    const typeFilterPassed = activeTypeFilters.length === 0 || activeTypeFilters.includes(exp.type);
    
    // Skill filter check
    const skillFilterPassed = activeSkillFilters.length === 0 || 
      (exp.skills && exp.skills.some(skill => activeSkillFilters.includes(skill)));
    
    return typeFilterPassed && skillFilterPassed;
  });

  // Toggle type filter function
  const toggleTypeFilter = (type: string) => {
    setIsFiltering(true);
    setActiveTypeFilters(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
    
    // Reset filtering state after animation completes
    setTimeout(() => setIsFiltering(false), 500);
  };
  
  // Toggle skill filter function
  const toggleSkillFilter = (skill: string) => {
    setIsFiltering(true);
    setActiveSkillFilters(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill) 
        : [...prev, skill]
    );
    
    // Reset filtering state after animation completes
    setTimeout(() => setIsFiltering(false), 500);
  };

  // Determine years in timeline for dynamic year indicator
  const timelineYears = useMemo(() => {
    // Extract all unique years from experience start/end dates
    const years = new Set<number>();
    experiences.forEach(exp => {
      // Add start year
      const startYear = parseInt(exp.startDate.split(' ')[1]);
      if (!isNaN(startYear)) years.add(startYear);
      
      // Add end year (if not 'Present')
      if (exp.endDate.toLowerCase() !== 'present') {
        const endYear = parseInt(exp.endDate.split(' ')[1]);
        if (!isNaN(endYear)) years.add(endYear);
      } else {
        // If 'Present', add current year
        years.add(new Date().getFullYear());
      }
    });
    
    // Convert to array and sort in descending order (most recent first)
    return Array.from(years).sort((a, b) => b - a);
  }, [experiences]);
  
  // Set up intersection observer for animations and year tracking
  useEffect(() => {
    // Animation observer
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            entry.target.classList.add('opacity-100');
            
            // Update visible year based on the currently visible experience
            const yearAttr = entry.target.getAttribute('data-year');
            if (yearAttr) {
              setVisibleYear(parseInt(yearAttr));
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -100px 0px" }
    );

    // Select all timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
      item.classList.add('opacity-0');
      animationObserver.observe(item);
    });

    return () => {
      timelineItems.forEach((item) => animationObserver.unobserve(item));
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-bg relative">
      {/* Cosmic Orange gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"
           style={{
             background: 'linear-gradient(225deg, rgba(255,140,0,0.04) 0%, rgba(255,140,0,0.01) 50%, rgba(255,140,0,0.03) 100%)'
           }} />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-text">Experience</h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
        
        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-2xl mx-auto">
          {[
            { type: 'work', label: 'Work' },
            { type: 'education', label: 'Education' },
            { type: 'internship', label: 'Internship' },
            { type: 'fellowship', label: 'Fellowship' },
            { type: 'entrepreneurial', label: 'Entrepreneurial' }
          ].map((item) => (
            <Badge 
              key={item.type} 
              variant={activeTypeFilters.includes(item.type) ? "default" : "outline"}
              className={cn(
                "cursor-pointer transition-all duration-300 py-1.5 px-3",
                activeTypeFilters.includes(item.type) 
                  ? getTypeColor(item.type) 
                  : "hover:border-button-bg"
              )}
              onClick={() => toggleTypeFilter(item.type)}
            >
              <span className="flex items-center gap-1.5">
                {getTypeIcon(item.type)}
                {item.label}
              </span>
            </Badge>
          ))}
          <Badge
            variant="outline"
            className={cn(
              "cursor-pointer py-1.5 px-3 transition-all",
              showSkillFilters ? "bg-blue-50 hover:bg-blue-100" : "hover:bg-button-bg/10"
            )}
            onClick={() => setShowSkillFilters(prev => !prev)}
          >
            <span className="flex items-center gap-1.5">
              <Filter className="h-4 w-4" />
              {showSkillFilters ? "Hide Skills" : "Filter by Skills"}
            </span>
          </Badge>
          
          {(activeTypeFilters.length > 0 || activeSkillFilters.length > 0) && (
            <Badge 
              variant="outline"
              className="cursor-pointer hover:bg-button-bg/10 py-1.5 px-3"
              onClick={() => {
                setActiveTypeFilters([]);
                setActiveSkillFilters([]);
              }}
            >
              <span className="flex items-center gap-1.5">
                <Filter className="h-4 w-4" />
                Clear
              </span>
            </Badge>
          )}
        </div>
        
        {/* Skill filter UI */}
        {showSkillFilters && (
          <div className="mb-10 mt-4 max-w-3xl mx-auto">
            <div className="bg-button-bg/10 p-4 rounded-lg border border-button-bg/20">
              <h3 className="text-sm font-medium mb-3 text-text">Filter by Skills</h3>
              <div className="flex flex-wrap gap-2">
                {allSkills.map(skill => (
                  <Badge
                    key={skill}
                    variant={activeSkillFilters.includes(skill) ? "default" : "outline"}
                    className={cn(
                      "cursor-pointer text-xs py-1 px-2",
                      activeSkillFilters.includes(skill) 
                        ? "bg-electric-blue hover:bg-electric-blue/90" 
                        : "hover:bg-button-bg/10"
                    )}
                    onClick={() => toggleSkillFilter(skill)}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Modern Timeline */}
        <div 
          ref={timelineRef} 
          className={cn(
            "relative max-w-5xl mx-auto transition-all duration-500",
            isFiltering ? "opacity-50 scale-98" : "opacity-100 scale-100"
          )}
        >
          {/* Fixed Year Indicators */}
          <div className="sticky top-20 h-0 z-10 pointer-events-none">
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-button-bg/10 shadow-sm border border-button-bg/20 rounded-full px-4 py-1 text-sm font-medium text-text transition-all duration-300">
              {/* If the visible year is the current year or any item has 'Present' as end date, show 'Present (YEAR)' */}
              {visibleYear === new Date().getFullYear() ? 
                `Present (${new Date().getFullYear()})` : visibleYear}
            </div>
          </div>
          
          {/* Central line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-button-bg/30 transform -translate-x-1/2"></div>
          
          {/* Timeline items */}
          {filteredExperiences.map((exp, index) => (
            <div 
              key={`${exp.organization}-${exp.title}`}
              data-year={exp.endDate === 'Present' ? new Date().getFullYear() : parseInt(exp.startDate.split(' ')[1]) || new Date().getFullYear()}
              className={cn(
                "timeline-item relative mb-12 transition-all duration-500 ease-in-out",
                // Force education to right, work to left, others follow their set side
                exp.type === 'education' ? "pl-12 md:pr-0 md:pl-[50%]" : 
                exp.type === 'work' ? "pr-12 md:pl-0 md:pr-[50%]" : 
                exp.side === "left" ? "pr-12 md:pl-0 md:pr-[50%]" : "pl-12 md:pr-0 md:pl-[50%]",
                "transform hover:scale-[1.01] hover:z-10",
                "will-change-transform" // For better parallax performance
              )}
              style={{
                transform: exp.side === "left" ? "translateX(-5px)" : "translateX(5px)", // Subtle initial offset for parallax effect
              }}
              onMouseEnter={(e) => {
                // Subtle parallax hover effect
                const el = e.currentTarget;
                el.style.transform = exp.side === "left" ? "translateX(-2px)" : "translateX(2px)";
              }}
              onMouseLeave={(e) => {
                // Reset parallax effect
                const el = e.currentTarget;
                el.style.transform = exp.side === "left" ? "translateX(-5px)" : "translateX(5px)";
              }}
            >
              {/* Connector dot */}
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/3">
                <div className={cn(
                  "w-4 h-4 rounded-full border-2 border-white",
                  getTypeColor(exp.type).split(' ')[0], // Just take the background color
                  "shadow-md"
                )}>
                </div>
              </div>
              
              {/* Content card */}
              <HoverCard openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <div 
                    className={cn(
                      "relative bg-white p-5 rounded-lg shadow-sm border border-button-bg/20",
                      "hover:shadow-md transition-shadow duration-300",
                      exp.side === "right" && "md:ml-10",
                      exp.side === "left" && "md:mr-10"
                    )}
                  >
                    {/* Type badge */}
                    <div className="absolute -top-3 right-3">
                      <span className={cn(
                        "text-xs font-medium px-2 py-1 rounded",
                        getTypeColor(exp.type)
                      )}>
                        {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-1">{exp.title}</h3>
                    <h4 className="text-md font-medium text-subt mb-1">{exp.organization}</h4>
                    
                    <div className="flex items-center text-sm text-subt mb-3">
                      <span>{exp.startDate} - {exp.endDate}</span>
                      {exp.location && (
                        <>
                          <span className="mx-2">•</span>
                          <span>{exp.location}</span>
                        </>
                      )}
                    </div>
                    
                    {exp.metrics && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {exp.metrics.map((metric, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 bg-button-bg/10 rounded-full px-3 py-1 text-sm">
                            {metric.icon}
                            <span className="font-medium">{metric.value}</span>
                            <span className="text-subt text-xs">{metric.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Show only first line of description on the main card */}
                    <p className="text-subt line-clamp-2">
                      {exp.description[0]}
                    </p>
                  </div>
                </HoverCardTrigger>
                
                <HoverCardContent side="right" className="w-80">
                  <ScrollArea className="h-80">
                    <div className="p-2">
                      <h3 className="text-lg font-bold mb-1">{exp.title}</h3>
                      <h4 className="text-md font-medium text-subt mb-1">{exp.organization}</h4>
                      
                      <div className="text-sm text-subt mb-3">
                        <div>{exp.startDate} - {exp.endDate}</div>
                        {exp.location && <div>{exp.location}</div>}
                      </div>
                      
                      <Separator className="my-2" />
                      
                      <div className="mt-3">
                        <h5 className="text-sm font-semibold mb-2">Overview</h5>
                        <ul className="list-disc pl-4 space-y-1.5">
                          {exp.description.map((desc, idx) => (
                            <li key={idx} className="text-subt text-sm">{desc}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {exp.skills && exp.skills.length > 0 && (
                        <div className="mt-4">
                          <h5 className="text-sm font-semibold mb-2">Skills & Technologies</h5>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.skills.map((skill, idx) => (
                              <Badge key={idx} variant="secondary" className="bg-button-bg/20">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {exp.metrics && (
                        <div className="mt-4">
                          <h5 className="text-sm font-semibold mb-2">Key Metrics</h5>
                          <div className="grid grid-cols-2 gap-2">
                            {exp.metrics.map((metric, idx) => (
                              <div key={idx} className="flex items-center gap-2 bg-button-bg/10 px-3 py-2 rounded">
                                {metric.icon}
                                <div>
                                  <div className="font-bold text-sm">{metric.value}</div>
                                  <div className="text-xs text-subt">{metric.label}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </HoverCardContent>
              </HoverCard>
            </div>
          ))}
        </div>
        
        {/* Articles Section */}
        {articles.length > 0 && (
          <div className="mt-20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Recent Articles</h3>

            <div className="grid gap-6">
              {articles.map((article, index) => (
                <article 
                  key={index} 
                  className="bg-button-bg/5 p-6 rounded-xl shadow-sm border border-button-bg/20 hover:shadow-md transition-shadow duration-300"
                >
                  <h4 className="text-lg font-semibold mb-2 text-text">{article.title}</h4>
                  <p className="text-sm text-subt mb-3">Published: {article.date}</p>
                  <p className="text-sm text-subt mb-4">{article.summary}</p>
                  <Button asChild variant="link" size="sm" className="text-accent hover:text-accent/80 p-0 h-auto">
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Read ${article.title} on LinkedIn`}
                    >
                      <span className="flex items-center gap-1.5">
                        Read on LinkedIn
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </a>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
