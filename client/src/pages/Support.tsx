import { motion } from "framer-motion";
import AtmosphericEnergyGame from "@/components/AtmosphericEnergyGame";

const Support = () => {
  return (
    <div>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Interactive Technology Demo</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience our atmospheric energy harvesting technology in action through this interactive game! See how we can pull electricity from the air.
            </p>
          </motion.div>
          
          {/* Interactive Game */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AtmosphericEnergyGame />
          </motion.div>
          
          {/* Technology Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-lg p-8 mb-16"
          >
            <h2 className="font-heading text-2xl font-bold text-primary mb-6 text-center">How Our Atmospheric Energy Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading text-xl font-bold text-primary mb-4">The Science</h3>
                <p className="mb-4">
                  Our technology is based on a groundbreaking discovery that specialized protein nanowires can generate electricity from atmospheric humidity. When exposed to air, these nanowires create a moisture gradient that induces an electrical current.
                </p>
                <p>
                  Unlike solar or wind power, our technology works 24/7, indoors or outdoors, as long as there is moisture in the air. It's a completely sustainable energy source with zero emissions.
                </p>
              </div>
              
              <div>
                <h3 className="font-heading text-xl font-bold text-primary mb-4">Key Advantages</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-secondary mt-1 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <p>Works in any environment with at least 40% humidity</p>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-secondary mt-1 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <p>Operates continuously without sunlight or wind</p>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-secondary mt-1 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <p>Uses sustainable, naturally-produced nanowires</p>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-secondary mt-1 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <p>Scalable from small sensors to larger applications</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Practical Applications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="font-heading text-2xl font-bold text-primary mb-6 text-center">Real-World Applications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
                <h3 className="font-heading text-xl font-bold mb-3">Remote Sensors</h3>
                <p className="text-gray-600 mb-4">
                  Power environmental monitoring sensors in remote locations without batteries or traditional power sources.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-secondary">
                <h3 className="font-heading text-xl font-bold mb-3">Emergency Power</h3>
                <p className="text-gray-600 mb-4">
                  Provide critical power for communication devices in disaster areas where infrastructure has been damaged.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-accent">
                <h3 className="font-heading text-xl font-bold mb-3">Smart Homes</h3>
                <p className="text-gray-600 mb-4">
                  Power small smart home sensors and IoT devices without the need for wiring or regular battery replacements.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Support;