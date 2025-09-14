
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Send, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { toast } from '../ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };
  
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-accent" />,
      label: 'Email',
      value: 'networker.udayan@gmail.com',
      link: 'mailto:networker.udayan@gmail.com'
    },
    {
      icon: <Phone className="h-5 w-5 text-accent" />,
      label: 'Phone',
      value: '+91 9823329163',
      link: 'tel:+919823329163'
    },
    {
      icon: <Linkedin className="h-5 w-5 text-accent" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/udayan-PM',
      link: 'https://www.linkedin.com/in/udayan-PM/'
    },
    {
      icon: <MapPin className="h-5 w-5 text-accent" />,
      label: 'Location',
      value: 'Mumbai, India',
      link: null
    }
  ];
  
  return (
    <section id="contact" className="py-20 bg-bg relative">
      {/* Cosmic Orange gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10"
           style={{
             background: 'linear-gradient(180deg, rgba(255,140,0,0.03) 0%, rgba(255,140,0,0.01) 50%, rgba(255,140,0,0.04) 100%)'
           }} />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-text">Get In Touch</h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-text">Contact Information</h3>
            <p className="text-subt mb-8">
              Feel free to reach out for collaboration opportunities, 
              speaking engagements, or just to say hello.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-2 bg-accent/10 rounded-full mr-4 text-accent">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-subt">{item.label}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-text hover:text-accent transition-colors"
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-text">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-surface to-accent/5 p-8 rounded-xl border border-accent/20 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-text">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name" 
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email" 
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?" 
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" 
                  placeholder="Your message" 
                  required
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full btn-primary" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
