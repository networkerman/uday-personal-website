
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-surface text-text">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">Udayan Das Chowdhury</h3>
            <p className="text-sm text-subt mb-4">
              Senior Product Manager specializing in Martech and CPaaS
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-subt">
                <Mail className="h-4 w-4 mr-2 text-electric-blue" />
                <a href="mailto:networker.udayan@gmail.com" className="hover:text-electric-blue transition-colors">
                  networker.udayan@gmail.com
                </a>
              </li>
              <li className="flex items-center text-sm text-subt">
                <Phone className="h-4 w-4 mr-2 text-electric-blue" />
                <a href="tel:+919823329163" className="hover:text-electric-blue transition-colors">
                  +91 9823329163
                </a>
              </li>
              <li className="flex items-center text-sm text-subt">
                <MapPin className="h-4 w-4 mr-2 text-electric-blue" />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.linkedin.com/in/udayan-PM/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-subt hover:text-accent transition-colors"
                >
                  <Linkedin className="h-4 w-4 mr-2 text-electric-blue" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm text-subt hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-subt hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-subt hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-sm text-subt hover:text-accent transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-subt hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-button-bg/20 text-center text-sm text-subt">
          <p>&copy; {currentYear} Udayan Das Chowdhury. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
