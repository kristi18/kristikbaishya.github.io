import { ChevronDown, Download } from "lucide-react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ParticlesBackground from "./ParticlesBackground";
import { Button } from "@/components/ui/button";
import { downloadResume } from "@/lib/utils";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <ParticlesBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center animate-fade-in">
            <div className="inline-block mb-6">
              <img
                src="/attached_assets/KKB.jpg"
                alt="Kristi Kunworee Baishya"
                className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-xl border-4 border-white dark:border-gray-800"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 bg-gradient-text">
              Kristi Kunworee Baishya
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded mb-6"></div>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8">
              AI Product Leader | Builder of Impactful, Responsible, and Scalable AI Solutions
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="secondary" size="lg" onClick={downloadResume} className="flex items-center">
                Download Resume <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center mt-12 space-x-6">
              <a
                href="https://linkedin.com/in/kristibaishya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <FaGithub className="text-2xl" />
              </a>
              <div className="flex flex-col items-center">
                <a
                  href="mailto:kristibaishya@gmail.com"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                >
                  <span className="sr-only">Email</span>
                  <FaEnvelope className="text-2xl" />
                </a>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  kristibaishya@gmail.com | kbaishya@alumni.cmu.edu
                </span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a
              href="#about"
              className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <span className="sr-only">Scroll down</span>
              <ChevronDown className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
