
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Blog & Insights</h2>
        <div className="w-20 h-1 bg-electric-blue mx-auto mb-8"></div>
        
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
            <p className="text-gray-600 mb-6">
              My thoughts on Product Management, Martech Innovations, and AI-driven Customer Experiences
            </p>
            
            <div className="flex flex-col items-center space-y-4">
              <p className="text-gray-700">
                In the meantime, connect with me on LinkedIn for updates on my latest thinking and industry insights.
              </p>
              
              <Button asChild variant="outline" className="mt-6">
                <a 
                  href="https://www.linkedin.com/in/udayan-das-chowdhury8329/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="inline-flex items-center">
                    Follow on LinkedIn
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </span>
                </a>
              </Button>
              
              <span className="block text-sm text-gray-500 mt-4">
                Be the first to know when new articles are published
              </span>
            </div>
          </div>
          
          <div className="mt-10 flex justify-center">
            <Button asChild variant="ghost" className="text-electric-blue hover:text-electric-blue-dark hover:bg-electric-blue/10">
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
