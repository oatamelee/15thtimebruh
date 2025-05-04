import { Link } from "wouter";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                Science Fair Project: Group 7 in 7A6
              </h2>
              <p className="text-lg mb-6">
                We are Group 7 in 7A6, doing this year's science fair on the topic of sustainable energy. We have collaborated with each other to come up with a revolutionary, groundbreaking plan to solve the global problem of energy scarcity once and for all. Our machine is named Atmos Power, and it helps by generating electricity from atmospheric humidity.
              </p>
              <p className="text-lg mb-8">
                This is not a joke - you can pull electricity out of thin air!
              </p>
              <Button 
                asChild
                variant="default"
                className="font-semibold"
                size="lg"
              >
                <Link href="/about">
                  Click here to learn more
                </Link>
              </Button>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">Why It Matters</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary mt-1 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <p>
                    <strong className="text-secondary">Energy Access:</strong> Over 1 billion people worldwide lack reliable electricity. The power generation system can generate electricity wherever there exists air humidity. (Which occurs most of the time!)
                  </p>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary mt-1 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <p>
                    <strong className="text-secondary">Climate Change:</strong> Humankind needs to replace fossil fuels as an energy source to address climate change. The zero-emission power solution from our company helps tackle this critical problem.
                  </p>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary mt-1 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <p>
                    <strong className="text-secondary">Quick emergency response:</strong> Our technology operates as emergency power for disaster relief operations and emergency communications during times when established infrastructure collapses.
                  </p>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-secondary mt-1 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <p>
                    <strong className="text-secondary">Sustainable Future:</strong> The creation of such technologies stands vital for constructing an entirely sustainable energy infrastructure.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-8">
            Explore Our Innovative Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md card-highlight">
              <svg className="h-12 w-12 text-primary mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
                <path d="M2 20h20"></path>
                <path d="M14 12v.01"></path>
              </svg>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">The Science</h3>
              <p className="text-gray-600 mb-4">Learn about the protein nanowire technology that makes atmospheric electricity harvesting possible.</p>
              <Button asChild variant="outline">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md card-highlight">
              <svg className="h-12 w-12 text-primary mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">Solutions</h3>
              <p className="text-gray-600 mb-4">Our technology implementation helps address actual energy problems in the world today. Discover how!</p>
              <Button asChild variant="outline">
                <Link href="/solutions">
                  Explore Solutions
                </Link>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md card-highlight">
              <svg className="h-12 w-12 text-primary mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">Interactive Demo</h3>
              <p className="text-gray-600 mb-4">Try our exciting interactive simulation that demonstrates how we can pull electricity from the air!</p>
              <Button asChild variant="outline">
                <Link href="/support">
                  Try the Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
            Join Our Mission
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-12">
            You have the chance to join a progressive system that creates sustainable power generation. A collaborative effort will transform the way the world generates its power. We have the power to choose a more sustainable future, only we can do it, as one.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              asChild
              variant="secondary" 
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
            <Button 
              asChild
              variant="default" 
              size="lg"
              className="bg-accent text-black border-accent hover:bg-yellow-400"
            >
              <Link href="/support">
                Try Interactive Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
