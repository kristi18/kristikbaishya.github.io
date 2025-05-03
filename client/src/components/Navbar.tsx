import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useThemeDetector } from "@/hooks/use-theme";
import { useActiveSection } from "@/hooks/use-active-section";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { downloadResume } from "@/lib/utils";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useThemeDetector();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/", id: "home" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Experience", href: "/#experience", id: "experience" },
    { name: "Projects", href: "/projects", id: "projects" },
    { name: "Skills", href: "/#skills", id: "skills" },
    { name: "Education", href: "/#education", id: "education" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="#" onClick={closeMobileMenu} className="flex-shrink-0 flex items-center">
              <span className="font-heading font-bold text-2xl bg-gradient-text">KB</span>
            </Link>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => {
              const isActive = 
                (link.id === activeSection) || 
                (link.id === 'home' && activeSection === '') || 
                (link.id === 'projects' && location === '/projects');
                
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                    isActive 
                      ? "text-primary dark:text-white font-semibold" 
                      : "text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary dark:bg-white mx-3 rounded-full" />
                  )}
                </a>
              );
            })}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="ml-3 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button onClick={downloadResume} className="ml-4">
              Resume <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white dark:bg-gray-900 shadow-md ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => {
            const isActive = 
              (link.id === activeSection) || 
              (link.id === 'home' && activeSection === '') || 
              (link.id === 'projects' && location === '/projects');
              
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className={`block px-3 py-2 text-base font-medium transition-colors relative ${
                  isActive 
                    ? "text-primary dark:text-white font-semibold" 
                    : "text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -left-1 top-0 bottom-0 w-0.5 bg-primary dark:bg-white rounded-full" />
                )}
              </a>
            );
          })}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="p-2 rounded-full text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button onClick={downloadResume} size="sm">
              Resume <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
