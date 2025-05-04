import { Link } from "wouter";
import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <Zap className="h-6 w-6 text-accent mr-2" />
              <h2 className="font-heading text-2xl font-bold">AtmosPower</h2>
            </div>
            <p className="max-w-xs text-gray-400">
              Revolutionary atmospheric electricity generation technology for a sustainable future.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/">
                    <a className="text-gray-400 hover:text-white transition-colors">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="text-gray-400 hover:text-white transition-colors">About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/solutions">
                    <a className="text-gray-400 hover:text-white transition-colors">Solutions</a>
                  </Link>
                </li>
                <li>
                  <Link href="/support">
                    <a className="text-gray-400 hover:text-white transition-colors">Support Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="text-gray-400 hover:text-white transition-colors">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Research Papers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technology FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press Kit</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Licensing</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} AtmosPower Technology. All rights reserved.</p>
          <p className="mt-2">
            Atmospheric electricity generation project for educational and research purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
