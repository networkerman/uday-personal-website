
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-bg relative">
      {/* Cosmic Orange gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"
           style={{
             background: 'linear-gradient(315deg, rgba(255,140,0,0.02) 0%, rgba(255,140,0,0.05) 50%, rgba(255,140,0,0.01) 100%)'
           }} />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-text">Blog & Insights</h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-surface to-accent/5 p-10 rounded-xl shadow-lg border border-accent/20">
            <h3 className="text-2xl font-bold mb-4 text-text">Coming Soon</h3>
            <p className="text-subt mb-6">
              My thoughts on Product Management, Martech Innovations, and AI-driven Customer Experiences
            </p>
            
            <div className="flex flex-col items-center space-y-4">
              <p className="text-subt">
                In the meantime, connect with me on LinkedIn for updates on my latest thinking and industry insights.
              </p>
              
              <Button asChild variant="outline" className="mt-6 px-5 py-3 text-sm font-medium">
                <a 
                  href="https://www.linkedin.com/in/udayan-PM/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="inline-flex items-center">
                    Follow on LinkedIn
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </span>
                </a>
              </Button>
              
              <span className="block text-sm text-subt mt-4">
                Be the first to know when new articles are published
              </span>
            </div>
          </div>
          
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline" className="px-5 py-3 text-sm font-medium">
              <a href="#contact">
                <span className="inline-flex items-center">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
