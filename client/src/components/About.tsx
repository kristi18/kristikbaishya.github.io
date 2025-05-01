import { FaBrain, FaShieldAlt, FaUsersCog } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold bg-gradient-text">
              About Me
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded mx-auto mt-2 mb-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                <img
                  src="/attached_assets/KKB.jpg"
                  alt="Kristi Kunworee Baishya"
                  className="w-full h-auto object-contain rounded-t-xl"
                />
                <div className="p-4 bg-primary text-white">
                  <p className="font-heading font-bold text-center">
                    "Building AI solutions that are impactful, responsible, and scalable."
                  </p>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-heading font-bold text-gray-800 dark:text-white mb-4">
                AI Product Leader
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I am an experienced AI Product Leader with a proven track record of delivering transformative AI and Generative AI products that drive measurable business outcomes. My expertise spans product strategy, AI governance, and cross-functional leadership.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Throughout my career, I've focused on crafting strategic roadmaps, designing innovative operating models, and leading the development of large-scale AI/ML products that meet both business needs and ethical standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                      <FaBrain />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                      AI Innovation
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Leading cutting-edge AI/GenAI initiatives that deliver 35-45% efficiency gains.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-secondary text-white">
                      <FaShieldAlt />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                      Responsible AI
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Established AI Risk Assessment frameworks, reducing bias incidents by 25%.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-accent text-white">
                      <FaUsersCog />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                      Stakeholder Leadership
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Enhanced decision-making by 25% through cross-functional collaboration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
