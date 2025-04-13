import { useState } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BadgeIndianRupee, BriefcaseBusiness, Building, Award, GraduationCap, Briefcase, Lightbulb, Rocket, ExternalLink, ChevronRight, Users, Target, MessageSquare, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
  metrics?: { value: string; label: string; icon: JSX.Element }[]; // Keep metrics if needed, though not in new data
}

// Year marker for the timeline (Simplified)
const TimelineYear = ({ year }: { year: number }) => (
  <div className="relative flex items-center justify-center h-8">
    <div className="h-2 w-2 rounded-full bg-gray-300 absolute left-1/2 -translate-x-1/2"></div>
    <span className="absolute left-0 -translate-x-full pr-4 text-sm text-gray-500">{year}</span>
  </div>
);

// Get color based on experience type
const getTypeColor = (type: string) => {
  const colors = {
    work: 'bg-blue-500/90 text-white',
    education: 'bg-green-500/90 text-white',
    internship: 'bg-yellow-500/90 text-white',
    fellowship: 'bg-orange-500/90 text-white',
    entrepreneurial: 'bg-purple-500/90 text-white'
  };
  return colors[type] || 'bg-gray-500/90 text-white';
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
  // Define the timeline span (reversed to show recent at top)
  const timelineStartYear = 2013; // Changed to 2013 to include education
  const timelineEndYear = new Date().getFullYear();
  const years = Array.from({ length: timelineEndYear - timelineStartYear + 1 }, (_, i) => timelineEndYear - i);

  // Add filter state
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Published articles (Assuming this data is still relevant)
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
      title: "Senior Growth Product Manager", // Moved this up as it's the most recent start date
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
      title: "Product Analyst Intern", // Corrected timeline order
      organization: "Navi",
      startDate: "Oct 2020",
      endDate: "Nov 2020",
      description: [
        "Conducted user behavior analysis and optimized loan application flow"
      ],
      skills: ["Data Analysis", "User Research", "Process Optimization"],
      side: "right", // Kept original side, but you might want to alternate more strictly
      type: "internship",
      location: "Delhi, India"
    },
    {
      title: "Product Manager Intern", // Corrected timeline order
      organization: "Brand Bazooka Advertising Pvt. Ltd.",
      startDate: "Jul 2020",
      endDate: "Aug 2020",
      description: [
        "Developed a strategic roadmap for LINC Pens"
      ],
      skills: ["Product Strategy", "Market Research", "Roadmapping"],
      side: "right", // Kept original side
      type: "internship",
      location: "Delhi, India"
    },
    {
      title: "Founder - ProductX Club", // Corrected timeline order
      organization: "Birla Institute of Technology and Science, Pilani",
      startDate: "Aug 2019",
      endDate: "Apr 2021",
      description: [
        "Established a vibrant community for product managers and enthusiasts",
        "Curated content, hosted workshops/webinars, and forged strategic partnerships"
      ],
      skills: ["Community Building", "Event Management", "Content Curation"],
      side: "right", // Swapped side for better alternation
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
      side: "right",
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

  // Filter experiences based on active filters
  const filteredExperiences = experiences.filter(exp =>
    activeFilters.length === 0 || activeFilters.includes(exp.type)
  );

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Professional Journey</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          A timeline of diverse experiences spanning product management, entrepreneurship, and continuous learning.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['work', 'education', 'internship', 'fellowship', 'entrepreneurial'].map(type => (
            <Button
              key={type}
              variant={activeFilters.includes(type) ? "default" : "ghost"}
              size="sm"
              onClick={() => {
                setActiveFilters(prev =>
                  prev.includes(type)
                    ? prev.filter(t => t !== type)
                    : [...prev, type]
                );
              }}
              className="flex items-center gap-1.5"
            >
              {getTypeIcon(type)}
              <span className="capitalize">{type}</span>
            </Button>
          ))}
          {activeFilters.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveFilters([])}
            >
              Clear Filters
            </Button>
          )}
        </div>

        {/* Timeline */}
        <div className="relative max-w-7xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 h-full w-px bg-gray-200 transform -translate-x-1/2" />

          {/* Years and Experiences */}
          <div className="relative">
            {years.map(year => (
              <div key={year} className="mb-8">
                <TimelineYear year={year} />
                
                {/* Experiences for this year */}
                <div className="relative">
                  {filteredExperiences
                    .filter(exp => {
                      const startYear = parseInt(exp.startDate.split(' ')[1] || exp.startDate);
                      const endYear = exp.endDate === 'Present' 
                        ? new Date().getFullYear() 
                        : parseInt(exp.endDate.split(' ')[1] || exp.endDate);
                      return startYear === year || endYear === year;
                    })
                    .map((exp, index) => (
                      <div
                        key={`${exp.organization}-${index}`}
                        className={cn(
                          'absolute w-[45%] mb-8',
                          exp.side === 'left' ? 'left-0 pr-8' : 'right-0 pl-8'
                        )}
                      >
                        <HoverCard>
                          <HoverCardTrigger>
                            <div
                              className={cn(
                                'p-4 rounded-lg shadow-lg transition-all duration-300 cursor-pointer text-white',
                                getTypeColor(exp.type)
                              )}
                            >
                              <div className="flex items-center gap-2 mb-2">
                                {getTypeIcon(exp.type)}
                                <span className="text-sm font-medium capitalize">{exp.type}</span>
                              </div>
                              <h3 className="font-bold text-lg">{exp.title}</h3>
                              <p className="text-sm opacity-90">{exp.organization}</p>
                              <p className="text-xs mt-1">
                                {exp.startDate} — {exp.endDate}
                              </p>
                            </div>
                          </HoverCardTrigger>
                          
                          <HoverCardContent
                            side={exp.side === 'left' ? 'right' : 'left'}
                            className="w-80 p-0"
                          >
                            <ScrollArea className="h-[300px]">
                              <div className={cn(
                                'p-4 text-white',
                                getTypeColor(exp.type)
                              )}>
                                <h4 className="font-bold text-lg">{exp.title}</h4>
                                <p className="text-sm">{exp.organization}</p>
                                <p className="text-xs mt-1">
                                  {exp.startDate} — {exp.endDate}
                                </p>
                              </div>
                              
                              <div className="p-4">
                                <div className="space-y-2">
                                  {exp.description.map((desc, i) => (
                                    <p key={i} className="text-sm flex items-start gap-2">
                                      <ChevronRight className="h-4 w-4 mt-1 flex-shrink-0" />
                                      {desc}
                                    </p>
                                  ))}
                                </div>
                                
                                {exp.skills && (
                                  <div className="mt-4">
                                    <h5 className="text-sm font-semibold mb-2">Skills & Tools</h5>
                                    <div className="flex flex-wrap gap-2">
                                      {exp.skills.map((skill, i) => (
                                        <span
                                          key={i}
                                          className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                                        >
                                          {skill}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}
                                
                                {exp.metrics && (
                                  <div className="mt-4 flex gap-4">
                                    {exp.metrics.map((metric, i) => (
                                      <div
                                        key={i}
                                        className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded"
                                      >
                                        {metric.icon}
                                        <div>
                                          <div className="font-bold text-sm">{metric.value}</div>
                                          <div className="text-xs text-gray-500">{metric.label}</div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </ScrollArea>
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-12" role="list" aria-label="Experience types"> {/* Increased mt */}
          {[
            { type: 'work', label: 'Work' }, // Shortened labels
            { type: 'education', label: 'Education' },
            { type: 'internship', label: 'Internship' },
            { type: 'fellowship', label: 'Fellowship' },
            { type: 'entrepreneurial', label: 'Entrepreneurial' }
          ].map((item) => (
            <div key={item.type} className="flex items-center gap-1.5" role="listitem">
              <div
                className={`h-3 w-3 rounded-sm ${getTypeColor(item.type).split(' ')[0]}`} // Changed to square
                aria-hidden="true"
              ></div>
              <span className="text-xs text-gray-700 font-medium">{item.label}</span> {/* Added font-medium */}
            </div>
          ))}
        </div>

        <div className="mt-4 text-center text-xs text-gray-500">
          Hover over items for details. Filters apply to the timeline.
        </div>

        {/* Articles Section */}
        <div className="mt-20 max-w-3xl mx-auto"> {/* Increased mt */}
          <h3 className="text-2xl font-bold mb-6 text-center">Recent Articles</h3>

          <div className="grid gap-6">
            {articles.map((article, index) => (
              <article key={index} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow duration-300">
                <h4 className="text-lg font-semibold mb-2 text-gray-800">{article.title}</h4> {/* Darker text */}
                <p className="text-sm text-gray-500 mb-3">Published: {article.date}</p>
                <p className="text-sm text-gray-700 mb-4">{article.summary}</p>
                <Button asChild variant="link" size="sm" className="text-blue-600 hover:text-blue-700 p-0 h-auto"> {/* Changed to link variant */}
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center" // Removed justify-center for left alignment
                    aria-label={`Read ${article.title} on LinkedIn`}
                  >
                    Read on LinkedIn
                    <ExternalLink className="ml-1.5 h-4 w-4" aria-hidden="true" /> {/* Adjusted margin */}
                  </a>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;