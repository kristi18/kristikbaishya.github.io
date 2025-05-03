import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-2xl font-heading font-bold text-white mb-2">
                Kristi Kunworee Baishya
              </h2>
              <p className="text-gray-400">AI Product Leader</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/kristikbaishya/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedinIn className="text-xl" />
              </a>
              <span
                className="text-gray-600 opacity-60 cursor-default flex items-center"
                title="Coming Soon"
              >
                <span className="sr-only">GitHub (Coming Soon)</span>
                <FaGithub className="text-xl" />
                <span className="ml-1 text-xs bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded-full">Soon</span>
              </span>
              <a
                href="mailto:kristibaishya@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Email</span>
                <FaEnvelope className="text-xl" />
              </a>
              <a
                href="tel:4127064059"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Phone</span>
                <FaPhone className="text-xl" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Kristi Kunworee Baishya. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
