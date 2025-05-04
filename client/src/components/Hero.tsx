import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-gradient py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AtmosPower: <br/>Group 7 in 7A6
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Our science fair project demonstrates how to pull electricity out of thin air - a sustainable energy solution that could change the world.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                asChild
                variant="secondary" 
                className="py-6 px-8 bg-purple-600 text-white hover:bg-purple-700 shadow-lg btn-shine relative z-10 font-bold text-lg"
              >
                <Link href="/about">
                  What is this magic?
                </Link>
              </Button>
              <Button
                asChild
                className="py-6 px-8 bg-accent text-neutral-dark hover:bg-yellow-500 shadow-lg"
              >
                <Link href="/support">
                  Try Interactive Demo
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
              <svg 
                className="relative z-10 w-full h-auto" 
                viewBox="0 0 600 400" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1a73e8" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#34a853" stopOpacity="0.8"/>
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="10" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                
                {/* Background */}
                <rect x="0" y="0" width="600" height="400" rx="20" fill="#1E3A8A" />
                
                {/* Abstract atmospheric electricity visualization */}
                <g filter="url(#glow)">
                  <circle cx="300" cy="200" r="120" fill="url(#bgGradient)" />
                  
                  {/* Electric pathways */}
                  <path d="M150,200 C200,100 250,300 300,200 C350,100 400,300 450,200" 
                    stroke="#FFFFFF" strokeWidth="2" fill="none" />
                  
                  <path d="M200,150 C250,50 300,250 350,150 C400,50 450,250 500,150" 
                    stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
                    
                  <path d="M100,250 C150,150 200,350 250,250 C300,150 350,350 400,250"
                    stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
                    
                  {/* Particles */}
                  <circle cx="200" cy="150" r="5" fill="#FBBC04" />
                  <circle cx="250" cy="220" r="4" fill="#FBBC04" />
                  <circle cx="350" cy="180" r="6" fill="#FBBC04" />
                  <circle cx="400" cy="150" r="4" fill="#FBBC04" />
                  <circle cx="150" cy="250" r="5" fill="#FBBC04" />
                  <circle cx="300" cy="290" r="4" fill="#FBBC04" />
                  <circle cx="450" cy="220" r="5" fill="#FBBC04" />
                </g>
                
                {/* Protein nanowire representation */}
                <g transform="translate(280, 180)">
                  <rect x="-60" y="-15" width="120" height="30" rx="15" fill="#34A853" opacity="0.7" />
                  <text x="0" y="5" textAnchor="middle" fill="white" fontSize="12" fontFamily="sans-serif">Nanowire Array</text>
                </g>
              </svg>
            </div>
          </motion.div>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <motion.div 
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 transform transition-transform"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-4xl font-bold text-accent mb-2">100%</p>
            <p className="text-lg">Renewable Energy Source</p>
          </motion.div>
          <motion.div 
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 transform transition-transform"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-4xl font-bold text-accent mb-2">24/7</p>
            <p className="text-lg">Continuous Generation</p>
          </motion.div>
          <motion.div 
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 transform transition-transform"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <p className="text-4xl font-bold text-accent mb-2">0</p>
            <p className="text-lg">Carbon Emissions</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
