import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SolutionCard from "@/components/SolutionCard";

const Solutions = () => {
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
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Our Solutions</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From emergency power generation to everyday applications, our technology provides sustainable electricity in innovative ways.
            </p>
          </motion.div>
          
          {/* Solutions Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <SolutionCard 
              title="Remote Home Power" 
              description="Our residential units can supplement or replace traditional power sources for homes in remote locations, providing a constant energy source without fuel or significant maintenance."
              powerOutput="100-500W continuous output"
              svgContent={
                <svg className="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="200" fill="#E3F2FD" />
                  
                  {/* Sky */}
                  <rect width="400" height="100" fill="#90CAF9" opacity="0.5" />
                  
                  {/* Hills */}
                  <path d="M0,100 Q100,50 200,100 Q300,150 400,100 L400,200 L0,200 Z" fill="#81C784" opacity="0.7" />
                  
                  {/* House */}
                  <rect x="150" y="90" width="100" height="70" fill="#FFFFFF" stroke="#455A64" strokeWidth="2" />
                  <polygon points="150,90 200,50 250,90" fill="#ECEFF1" stroke="#455A64" strokeWidth="2" />
                  <rect x="180" y="120" width="40" height="40" fill="#90CAF9" stroke="#455A64" strokeWidth="1" />
                  
                  {/* Atmospheric Energy Device */}
                  <rect x="270" y="110" width="30" height="50" fill="#1565C0" stroke="#0D47A1" strokeWidth="1" />
                  <circle cx="285" cy="100" r="10" fill="#1976D2" stroke="#0D47A1" strokeWidth="1" />
                  
                  {/* Energy Flow */}
                  <path d="M265,130 Q250,130 230,130" stroke="#FFEB3B" strokeWidth="2" strokeDasharray="5,3" />
                  <path d="M265,140 Q250,140 230,140" stroke="#FFEB3B" strokeWidth="2" strokeDasharray="5,3" />
                </svg>
              }
            />
            
            <SolutionCard 
              title="Emergency Response" 
              description="Portable units designed for disaster relief situations where traditional power infrastructure is compromised. These can power critical medical equipment and communication devices."
              powerOutput="50-200W rapid deployment units"
              svgContent={
                <svg className="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="200" fill="#FFEBEE" />
                  
                  {/* Disaster Background */}
                  <rect width="400" height="200" fill="#FFCDD2" opacity="0.3" />
                  
                  {/* Emergency Tent */}
                  <polygon points="100,150 150,100 250,100 300,150" fill="#FFFFFF" stroke="#D32F2F" strokeWidth="2" />
                  <polygon points="100,150 150,100 200,100 150,150" fill="#FFCDD2" />
                  <line x1="175" y1="100" x2="175" y2="150" stroke="#D32F2F" strokeWidth="1" />
                  <line x1="225" y1="100" x2="225" y2="150" stroke="#D32F2F" strokeWidth="1" />
                  
                  {/* Red Cross */}
                  <rect x="170" y="115" width="60" height="20" fill="#FFFFFF" stroke="#D32F2F" strokeWidth="1" />
                  <rect x="190" y="105" width="20" height="40" fill="#FFFFFF" stroke="#D32F2F" strokeWidth="1" />
                  <rect x="185" y="110" width="30" height="30" fill="#D32F2F" />
                  
                  {/* Atmospheric Energy Device */}
                  <rect x="320" y="110" width="30" height="50" fill="#1565C0" stroke="#0D47A1" strokeWidth="1" />
                  <circle cx="335" cy="100" r="10" fill="#1976D2" stroke="#0D47A1" strokeWidth="1" />
                  
                  {/* Energy Flow */}
                  <path d="M315,130 Q290,130 250,130" stroke="#FFEB3B" strokeWidth="2" strokeDasharray="5,3" />
                </svg>
              }
            />
            
            <SolutionCard 
              title="Agricultural Monitoring" 
              description="Self-powered sensors and monitoring stations for agricultural applications, eliminating the need for battery replacement or wired connections in large farm operations."
              powerOutput="5-20W per sensor node"
              svgContent={
                <svg className="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="200" fill="#E8F5E9" />
                  
                  {/* Farm Field */}
                  <rect x="0" y="130" width="400" height="70" fill="#81C784" />
                  
                  {/* Crop Rows */}
                  <g fill="#2E7D32">
                    <rect x="20" y="140" width="360" height="2" />
                    <rect x="20" y="160" width="360" height="2" />
                    <rect x="20" y="180" width="360" height="2" />
                  </g>
                  
                  {/* Plants */}
                  <g fill="#388E3C">
                    {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x, i) => (
                      <path key={i} d={`M${x},140 Q${x-5},130 ${x-10},120 M${x},140 Q${x+5},130 ${x+10},120`} stroke="#388E3C" strokeWidth="2" />
                    ))}
                    {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x, i) => (
                      <path key={i} d={`M${x},160 Q${x-5},150 ${x-10},140 M${x},160 Q${x+5},150 ${x+10},140`} stroke="#388E3C" strokeWidth="2" />
                    ))}
                  </g>
                  
                  {/* Sensor Station */}
                  <rect x="180" y="50" width="40" height="80" fill="#FAFAFA" stroke="#616161" strokeWidth="1" />
                  <circle cx="200" cy="40" r="10" fill="#9E9E9E" stroke="#616161" strokeWidth="1" />
                  
                  {/* Atmospheric Energy Device */}
                  <rect x="250" y="70" width="30" height="50" fill="#1565C0" stroke="#0D47A1" strokeWidth="1" />
                  <circle cx="265" cy="60" r="10" fill="#1976D2" stroke="#0D47A1" strokeWidth="1" />
                  
                  {/* Energy Flow */}
                  <path d="M245,90 Q230,90 220,90" stroke="#FFEB3B" strokeWidth="2" strokeDasharray="5,3" />
                  
                  {/* Data Visualization */}
                  <g transform="translate(190, 80)">
                    <rect x="-5" y="-10" width="30" height="20" fill="#E0E0E0" stroke="#616161" strokeWidth="1" />
                    <polyline points="0,5 5,0 10,3 15,2 20,0" fill="none" stroke="#388E3C" strokeWidth="1" />
                  </g>
                </svg>
              }
            />
            
            <SolutionCard 
              title="IoT Power Solutions" 
              description="Miniaturized atmospheric generators that can power Internet of Things devices indefinitely, removing the need for battery replacement in smart city and industrial applications."
              powerOutput="1-10W continuous for small devices"
              svgContent={
                <svg className="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="200" fill="#E1F5FE" />
                  
                  {/* Circuit Board Background */}
                  <rect width="400" height="200" fill="#B3E5FC" opacity="0.3" />
                  
                  {/* Circuit Traces */}
                  <path d="M50,50 H350 M50,100 H350 M50,150 H350 M100,50 V150 M200,50 V150 M300,50 V150" 
                    stroke="#0288D1" strokeWidth="1" fill="none" strokeDasharray="5,5" />
                  
                  {/* IoT Devices */}
                  <g transform="translate(100,100)">
                    <rect x="-20" y="-20" width="40" height="40" fill="#FFFFFF" stroke="#0288D1" strokeWidth="2" rx="5" />
                    <circle cx="0" cy="0" r="10" fill="#29B6F6" />
                    <circle cx="-10" cy="-10" r="3" fill="#0288D1" />
                    <circle cx="10" cy="-10" r="3" fill="#0288D1" />
                    <circle cx="-10" cy="10" r="3" fill="#0288D1" />
                    <circle cx="10" cy="10" r="3" fill="#0288D1" />
                  </g>
                  
                  <g transform="translate(200,100)">
                    <rect x="-15" y="-25" width="30" height="50" fill="#FFFFFF" stroke="#0288D1" strokeWidth="2" rx="5" />
                    <rect x="-10" y="-20" width="20" height="15" fill="#29B6F6" />
                    <circle cx="0" cy="5" r="8" fill="#29B6F6" />
                    <rect x="-8" y="15" width="16" height="5" fill="#0288D1" />
                  </g>
                  
                  <g transform="translate(300,100)">
                    <rect x="-25" y="-15" width="50" height="30" fill="#FFFFFF" stroke="#0288D1" strokeWidth="2" rx="5" />
                    <rect x="-20" y="-10" width="15" height="20" fill="#29B6F6" />
                    <rect x="5" y="-10" width="15" height="20" fill="#29B6F6" />
                    <rect x="-15" y="15" width="30" height="5" fill="#0288D1" />
                  </g>
                  
                  {/* Atmospheric Energy Collector */}
                  <g transform="translate(200,30)">
                    <rect x="-40" y="-15" width="80" height="10" fill="#1565C0" stroke="#0D47A1" strokeWidth="1" />
                    <rect x="-30" y="-5" width="60" height="5" fill="#1976D2" />
                    
                    {/* Energy Flow */}
                    <path d="M-30,15 V40 H-100 V100 M0,15 V40 H0 V60 M30,15 V40 H100 V100" 
                      stroke="#FFEB3B" strokeWidth="2" strokeDasharray="5,3" />
                  </g>
                </svg>
              }
            />
            
            <SolutionCard 
              title="Healthcare Applications" 
              description="Reliable power sources for medical facilities in developing regions, ensuring critical equipment remains operational despite unreliable grid infrastructure."
              powerOutput="200-1000W medical-grade units"
              svgContent={
                <svg className="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="200" fill="#F3E5F5" />
                  
                  {/* Hospital Room */}
                  <rect x="50" y="50" width="300" height="120" fill="#FFFFFF" stroke="#9C27B0" strokeWidth="2" />
                  
                  {/* Hospital Equipment */}
                  <rect x="70" y="70" width="80" height="100" fill="#E1BEE7" stroke="#7B1FA2" strokeWidth="1" />
                  <circle cx="110" cy="90" r="10" fill="#9C27B0" />
                  <rect x="90" y="110" width="40" height="20" fill="#CE93D8" stroke="#7B1FA2" strokeWidth="1" />
                  <rect x="90" y="140" width="40" height="10" fill="#CE93D8" stroke="#7B1FA2" strokeWidth="1" />
                  
                  {/* Patient Bed */}
                  <rect x="200" y="90" width="120" height="60" fill="#F5F5F5" stroke="#9E9E9E" strokeWidth="1" />
                  <rect x="200" y="80" width="40" height="10" fill="#E0E0E0" stroke="#9E9E9E" strokeWidth="1" />
                  
                  {/* Atmospheric Energy Device */}
                  <rect x="320" y="60" width="15" height="40" fill="#1565C0" stroke="#0D47A1" strokeWidth="1" />
                  <circle cx="327.5" cy="55" r="5" fill="#1976D2" stroke="#0D47A1" strokeWidth="1" />
                  
                  {/* Energy Flow */}
                  <path d="M315,80 H180 V90" stroke="#FFEB3B" strokeWidth="2" strokeDasharray="5,3" />
                  <path d="M180,90 H110 V100" stroke="#FFEB3B" strokeWidth="2" strokeDasharray="5,3" />
                  
                  {/* Doctor/Nurse */}
                  <circle cx="170" cy="120" r="15" fill="#9C27B0" opacity="0.5" />
                  <rect x="165" y="135" width="10" height="25" fill="#9C27B0" opacity="0.5" />
                  <rect x="160" y="135" width="5" height="20" fill="#9C27B0" opacity="0.3" />
                  <rect x="175" y="135" width="5" height="20" fill="#9C27B0" opacity="0.3" />
                </svg>
              }
            />
            
            <SolutionCard 
              title="Personal Electronics" 
              description="Consumer-grade devices for charging phones and small electronics using ambient humidity, perfect for hikers, travelers, and those living in areas with unreliable power."
              powerOutput="2-5W portable charging units"
              svgContent={
                <svg className="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="200" fill="#FFF3E0" />
                  
                  {/* Hiking/Outdoor Scene */}
                  <rect width="400" height="150" fill="#A5D6A7" opacity="0.3" />
                  <path d="M0,150 Q100,100 200,150 Q300,100 400,150 L400,200 L0,200 Z" fill="#81C784" opacity="0.5" />
                  <path d="M300,150 L350,70 L400,150" fill="#795548" opacity="0.8" />
                  <circle cx="350" cy="50" r="20" fill="#FFA726" opacity="0.8" />
                  
                  {/* Backpack */}
                  <path d="M150,100 V160 H200 V100 Q175,90 150,100 Z" fill="#795548" stroke="#5D4037" strokeWidth="1" />
                  <path d="M150,110 H200" stroke="#5D4037" strokeWidth="1" />
                  <path d="M150,130 H200" stroke="#5D4037" strokeWidth="1" />
                  
                  {/* Smartphone */}
                  <rect x="220" y="110" width="30" height="50" rx="3" fill="#E0E0E0" stroke="#616161" strokeWidth="1" />
                  <rect x="225" y="115" width="20" height="35" fill="#90CAF9" />
                  <circle cx="235" cy="155" r="3" fill="#616161" />
                  
                  {/* Atmospheric Energy Charger */}
                  <rect x="270" y="120" width="40" height="20" rx="5" fill="#1565C0" stroke="#0D47A1" strokeWidth="1" />
                  <circle cx="280" cy="130" r="5" fill="#1976D2" />
                  <circle cx="300" cy="130" r="5" fill="#1976D2" />
                  
                  {/* Energy Flow */}
                  <path d="M265,130 H250" stroke="#FFEB3B" strokeWidth="2" strokeDasharray="5,3" />
                </svg>
              }
            />
          </div>
          
          {/* Case Study */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="rounded-lg overflow-hidden">
                  <svg viewBox="0 0 400 300" className="w-full h-auto">
                    <rect width="400" height="300" fill="#E3F2FD" />
                    
                    {/* Landscape */}
                    <rect y="150" width="400" height="150" fill="#81C784" opacity="0.3" />
                    <path d="M0,150 Q100,120 200,150 Q300,120 400,150" fill="none" stroke="#81C784" strokeWidth="2" />
                    
                    {/* Buildings/Houses */}
                    <rect x="50" y="130" width="60" height="40" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1" />
                    <polygon points="50,130 80,100 110,130" fill="#1976D2" />
                    <rect x="60" y="150" width="15" height="20" fill="#FFFFFF" />
                    
                    <rect x="150" y="110" width="70" height="60" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1" />
                    <polygon points="150,110 185,80 220,110" fill="#1976D2" />
                    <rect x="160" y="130" width="15" height="20" fill="#FFFFFF" />
                    <rect x="190" y="130" width="15" height="20" fill="#FFFFFF" />
                    
                    <rect x="270" y="120" width="80" height="50" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1" />
                    <polygon points="270,120 310,90 350,120" fill="#1976D2" />
                    <rect x="285" y="140" width="20" height="30" fill="#FFFFFF" />
                    <rect x="315" y="140" width="20" height="15" fill="#FFFFFF" />
                    
                    {/* Atmospheric Energy Units */}
                    <g transform="translate(80, 100)">
                      <rect x="-10" y="0" width="20" height="30" fill="#1565C0" />
                      <circle cx="0" cy="-5" r="5" fill="#1976D2" />
                      <path d="M0,30 V40" stroke="#FFEB3B" strokeWidth="2" strokeDasharray="3,2" />
                    </g>
                    
                    <g transform="translate(185, 80)">
                      <rect x="-10" y="0" width="20" height="30" fill="#1565C0" />
                      <circle cx="0" cy="-5" r="5" fill="#1976D2" />
                      <path d="M0,30 V40" stroke="#FFEB3B" strokeWidth="2" strokeDasharray="3,2" />
                    </g>
                    
                    <g transform="translate(310, 90)">
                      <rect x="-10" y="0" width="20" height="30" fill="#1565C0" />
                      <circle cx="0" cy="-5" r="5" fill="#1976D2" />
                      <path d="M0,30 V40" stroke="#FFEB3B" strokeWidth="2" strokeDasharray="3,2" />
                    </g>
                    
                    {/* People */}
                    <circle cx="100" cy="190" r="8" fill="#FFA726" />
                    <rect x="96" y="198" width="8" height="15" fill="#FFA726" />
                    
                    <circle cx="200" cy="200" r="8" fill="#FFA726" />
                    <rect x="196" y="208" width="8" height="15" fill="#FFA726" />
                    
                    <circle cx="300" cy="190" r="8" fill="#FFA726" />
                    <rect x="296" y="198" width="8" height="15" fill="#FFA726" />
                    
                    {/* Text */}
                    <text x="200" y="250" textAnchor="middle" fill="#1565C0" fontWeight="bold">Puerto Rico Recovery Project</text>
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">Case Study: Puerto Rico Recovery Project</h3>
                <p className="mb-4">
                  Following the devastation of Hurricane Maria, we deployed 50 prototype atmospheric generators to communities with damaged power infrastructure. These units provided essential electricity for:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  <li>Medical refrigeration for critical medications</li>
                  <li>Communication equipment to coordinate relief efforts</li>
                  <li>Water purification systems</li>
                  <li>Basic lighting for safety and security</li>
                </ul>
                <p>
                  The success of this pilot program demonstrated the real-world potential of our technology in disaster recovery scenarios and has led to partnerships with multiple humanitarian organizations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">Implementation Challenges</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're actively working to overcome these challenges to bring our technology to scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Power Density Limitations</h3>
                </div>
                <p>
                  Current prototypes generate relatively low power compared to solar or wind. We're researching enhanced nanowire formulations and optimized array configurations to significantly increase power output per square meter.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Scaling Production</h3>
                </div>
                <p>
                  Manufacturing protein nanowires at scale presents unique challenges. We're developing bioreactor systems that can produce large quantities of the specialized bacteria and extract their nanowires efficiently.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 12H6M18 12H22M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Environmental Stability</h3>
                </div>
                <p>
                  Ensuring long-term stability in various environmental conditions is crucial. We're developing protective encapsulation technologies that shield the nanowires while still allowing efficient moisture transfer from the air.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Consumer Adoption</h3>
                </div>
                <p>
                  Introducing a fundamentally new energy technology requires education and awareness. We're developing demonstration kits and educational materials that clearly explain the technology to potential users and partners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-8">Ready to Implement Our Solutions?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-12">
            Connect with our team to discuss how atmospheric electricity generation can benefit your project, community, or organization.
          </p>
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Link href="/contact">
                  Contact Our Solutions Team
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
