import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { Link } from "wouter";
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Contact = () => {
  return (
    <div>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions about our technology or want to collaborate? Reach out to our team of scientists and engineers.
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row">
            <motion.div 
              className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 md:pl-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6">Connect With Us</h3>
                
                <div className="mb-8">
                  <h4 className="font-heading font-bold text-lg mb-3">Research Headquarters</h4>
                  <div className="space-y-3">
                    <p className="flex items-center">
                      <MapPin className="h-5 w-5 text-primary mr-2" />
                      123 Innovation Way, Cambridge, MA 02139
                    </p>
                    <p className="flex items-center">
                      <Phone className="h-5 w-5 text-primary mr-2" />
                      (555) 123-4567
                    </p>
                    <p className="flex items-center">
                      <Mail className="h-5 w-5 text-primary mr-2" />
                      research@atmospower.org
                    </p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-heading font-bold text-lg mb-3">Follow Our Progress</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-primary hover:text-blue-700 text-2xl">
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-primary hover:text-blue-700 text-2xl">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-primary hover:text-blue-700 text-2xl">
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-primary hover:text-blue-700 text-2xl">
                      <Youtube className="h-6 w-6" />
                    </a>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-heading font-bold text-lg mb-3">Join Our Newsletter</h4>
                  <p className="mb-4">
                    Stay updated on our latest research breakthroughs and technology developments.
                  </p>
                  <div className="flex">
                    <Input 
                      type="email" 
                      placeholder="Your email address" 
                      className="flex-grow rounded-r-none"
                    />
                    <Button className="rounded-l-none">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our technology and organization.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-heading text-lg font-bold text-primary mb-2">
                Are you accepting research partnerships?
              </h3>
              <p>
                Yes, we're actively seeking research partnerships with universities, laboratories, and private companies. Please use our contact form or email partnerships@atmospower.org with your proposal.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-heading text-lg font-bold text-primary mb-2">
                Do you offer internships or job opportunities?
              </h3>
              <p>
                We regularly have openings for positions in research, engineering, and administrative roles. Check our Careers page or contact us with your resume and area of interest.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-heading text-lg font-bold text-primary mb-2">
                Can I purchase a prototype for personal use?
              </h3>
              <p>
                Our technology is still in the development phase and not yet available for consumer purchase. Sign up for our newsletter to be notified when products become available.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-heading text-lg font-bold text-primary mb-2">
                Do you offer educational materials for schools?
              </h3>
              <p>
                Yes, we've developed educational kits and curriculum materials about atmospheric electricity generation for middle and high school science classes. Contact our education team for details.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-heading text-lg font-bold text-primary mb-2">
                Are you seeking investors?
              </h3>
              <p>
                We're open to discussions with strategic investors who align with our mission of providing sustainable energy solutions. Please contact our executive team for investment opportunities.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-heading text-lg font-bold text-primary mb-2">
                Can your technology be used in my country?
              </h3>
              <p>
                Our technology is designed to work globally in various climate conditions. We're especially interested in applications in developing regions with limited energy infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            From research collaborations to implementing solutions, we're excited to work with organizations that share our vision for a sustainable energy future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/support">
              <a className="bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-block">
                Support Our Research
              </a>
            </Link>
            <Link href="/solutions">
              <a className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary transition-colors inline-block">
                Explore Solutions
              </a>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Interactive Map */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <svg viewBox="0 0 800 400" className="w-full h-full">
            <rect width="800" height="400" fill="#E3F2FD" />
            
            {/* Continents simplified */}
            <path d="M100,150 Q200,100 300,150 Q400,200 500,150 Q600,100 700,150 Q750,200 800,150 L800,350 L0,350 L0,150 Q50,200 100,150 Z" fill="#A5D6A7" opacity="0.6" />
            
            {/* Water */}
            <rect y="350" width="800" height="50" fill="#90CAF9" opacity="0.7" />
            
            {/* Location markers */}
            <g transform="translate(200, 200)">
              <circle r="5" fill="#F44336" />
              <circle r="20" fill="#F44336" opacity="0.2">
                <animate attributeName="r" values="20;30;20" dur="2s" repeatCount="indefinite" />
              </circle>
              <text y="-15" textAnchor="middle" fill="#F44336" fontSize="12" fontWeight="bold">Cambridge, MA</text>
            </g>
            
            <g transform="translate(650, 180)">
              <circle r="5" fill="#F44336" />
              <circle r="20" fill="#F44336" opacity="0.2">
                <animate attributeName="r" values="20;30;20" dur="2s" repeatCount="indefinite" />
              </circle>
              <text y="-15" textAnchor="middle" fill="#F44336" fontSize="12" fontWeight="bold">Tokyo Lab</text>
            </g>
            
            <g transform="translate(400, 250)">
              <circle r="5" fill="#F44336" />
              <circle r="20" fill="#F44336" opacity="0.2">
                <animate attributeName="r" values="20;30;20" dur="2s" repeatCount="indefinite" />
              </circle>
              <text y="-15" textAnchor="middle" fill="#F44336" fontSize="12" fontWeight="bold">Nairobi Test Site</text>
            </g>
            
            {/* Title */}
            <text x="400" y="50" textAnchor="middle" fill="#1565C0" fontSize="20" fontWeight="bold">Our Global Presence</text>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Contact;
