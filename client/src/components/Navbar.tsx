import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Zap className="h-8 w-8 text-accent mr-2" />
            <h1 className="font-heading text-xl md:text-2xl font-bold text-primary">
              AtmosPower
            </h1>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`font-semibold ${isActive("/") ? "text-primary" : "hover:text-primary transition-colors"}`}>
              Home
            </Link>
            <Link href="/about" className={`font-semibold ${isActive("/about") ? "text-primary" : "hover:text-primary transition-colors"}`}>
              About
            </Link>
            <Link href="/solutions" className={`font-semibold ${isActive("/solutions") ? "text-primary" : "hover:text-primary transition-colors"}`}>
              Our Solutions
            </Link>
            <Link href="/support" className={`font-semibold ${isActive("/support") ? "text-primary" : "hover:text-primary transition-colors"}`}>
              Interactive Demo
            </Link>
            <Link href="/contact" className={`font-semibold ${isActive("/contact") ? "text-primary" : "hover:text-primary transition-colors"}`}>
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className={`font-semibold ${isActive("/") ? "text-primary" : "hover:text-primary transition-colors"}`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                href="/about"
                className={`font-semibold ${isActive("/about") ? "text-primary" : "hover:text-primary transition-colors"}`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                href="/solutions"
                className={`font-semibold ${isActive("/solutions") ? "text-primary" : "hover:text-primary transition-colors"}`}
                onClick={closeMenu}
              >
                Our Solutions
              </Link>
              <Link 
                href="/support"
                className={`font-semibold ${isActive("/support") ? "text-primary" : "hover:text-primary transition-colors"}`}
                onClick={closeMenu}
              >
                Interactive Demo
              </Link>
              <Link 
                href="/contact"
                className={`font-semibold ${isActive("/contact") ? "text-primary" : "hover:text-primary transition-colors"}`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
