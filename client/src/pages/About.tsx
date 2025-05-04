import { motion } from "framer-motion";
import ScienceTabs from "@/components/ScienceTabs";

const About = () => {
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
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              The Science Behind Atmospheric Electricity
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our groundbreaking technology leverages naturally occurring phenomena to generate clean, sustainable electricity from moisture in the air.
            </p>
          </motion.div>
          
          <ScienceTabs />
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Scientific Foundations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our technology builds on decades of research in microbiology, materials science, and electrical engineering.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-heading text-xl font-bold text-primary mb-4">Geobacter Bacteria</h3>
              <p className="mb-4">
                The protein nanowires in our technology are inspired by a remarkable microorganism called <em>Geobacter sulfurreducens</em>. These bacteria naturally produce conductive protein filaments to transfer electrons outside their cells during their metabolic processes.
              </p>
              <p>
                Scientists discovered that these nanowires could be harvested and engineered to create self-sustaining electrical devices that generate power from ambient humidity.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="font-heading text-xl font-bold text-primary mb-4">Water Gradient Physics</h3>
              <p className="mb-4">
                When a thin film of protein nanowires is exposed to air, it absorbs water molecules from the environment. This creates a gradient of water molecules across the material.
              </p>
              <p>
                The unique structure of these nanowires enables a charge separation phenomenon - protons can move freely through the material following this moisture gradient, generating a sustainable voltage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Technical Specifications
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-4">Performance Metrics</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold mb-1">Power Density</p>
                      <div className="h-2 w-full bg-gray-200 rounded-full">
                        <div className="h-2 bg-primary rounded-full" style={{ width: '50%' }}></div>
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span>0 W/m²</span>
                        <span>0.5 W/m²</span>
                        <span>1 W/m²</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-1">Operating Humidity Range</p>
                      <div className="h-2 w-full bg-gray-200 rounded-full">
                        <div className="h-2 bg-primary rounded-full" style={{ width: '80%' }}></div>
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span>20%</span>
                        <span>50%</span>
                        <span>80%</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-1">Device Lifespan</p>
                      <div className="h-2 w-full bg-gray-200 rounded-full">
                        <div className="h-2 bg-primary rounded-full" style={{ width: '60%' }}></div>
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span>0 yr</span>
                        <span>5 yr</span>
                        <span>10 yr</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-4">Material Properties</h3>
                  
                  <table className="w-full text-left">
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 font-semibold">Nanowire Diameter</td>
                        <td className="py-2">3-5 nanometers</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-semibold">Array Thickness</td>
                        <td className="py-2">7-10 micrometers</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-semibold">Conductivity</td>
                        <td className="py-2">1-5 S/cm</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-semibold">Operating Temperature</td>
                        <td className="py-2">-10°C to 60°C</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold">Biocompatibility</td>
                        <td className="py-2">High (non-toxic materials)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-heading text-lg font-bold text-primary mb-2">
                  How much electricity can this technology generate?
                </h3>
                <p>
                  Currently, our prototype devices can generate approximately 0.5 watts per square meter of nanowire array surface area in optimal humidity conditions. While this is relatively low compared to solar panels (which generate around 100-200 W/m²), our technology works 24/7, in any lighting condition, and even indoors.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-heading text-lg font-bold text-primary mb-2">
                  Does this technology work in dry environments?
                </h3>
                <p>
                  Yes, though with reduced efficiency. Our systems can operate in environments with relative humidity as low as 20%, which covers most inhabited regions on Earth. Even desert environments typically have some humidity, especially during nighttime when temperatures drop.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-heading text-lg font-bold text-primary mb-2">
                  How is this different from existing renewable energy technologies?
                </h3>
                <p>
                  Unlike solar, wind, or hydroelectric power, atmospheric electricity harvesting requires no specific environmental conditions such as sunlight, wind, or flowing water. It works continuously in any indoor or outdoor environment where there's humidity in the air. It also has no moving parts, making it exceptionally low-maintenance compared to other renewable technologies.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-heading text-lg font-bold text-primary mb-2">
                  What are the environmental impacts of manufacturing these devices?
                </h3>
                <p>
                  The protein nanowires are produced using sustainable biological processes with minimal environmental impact. The supporting electronic components do have some manufacturing footprint, but it's significantly lower than many other energy technologies. The devices contain no toxic materials and are biodegradable at end-of-life.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-heading text-lg font-bold text-primary mb-2">
                  When will this technology be commercially available?
                </h3>
                <p>
                  We anticipate our first commercial products targeting emergency power and remote sensing applications will be available within 2-3 years. Larger-scale consumer and industrial applications are expected within 5 years, pending further research and development milestones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
