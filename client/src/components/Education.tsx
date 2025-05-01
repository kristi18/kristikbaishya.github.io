import { 
  FaGraduationCap, 
  FaUniversity, 
  FaTrophy, 
  FaMedal, 
  FaStar, 
  FaUsers 
} from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const educationData = [
    {
      institution: "Carnegie Mellon University",
      degree: "Master of Information Systems Management (BIDA)",
      location: "Pittsburgh, PA",
      period: "2021 - 2022",
      distinction: "With Distinction",
      icon: <FaUniversity className="text-primary dark:text-primary" />
    },
    {
      institution: "Symbiosis Centre for Information Technology",
      degree: "Master of Business Administration",
      location: "Pune, India",
      period: "2016 - 2018",
      icon: <FaUniversity className="text-primary dark:text-primary" />
    },
    {
      institution: "Jorhat Engineering College",
      degree: "Bachelor of Engineering in Computer Science & Engineering",
      location: "Jorhat, India",
      period: "2010 - 2014",
      icon: <FaUniversity className="text-primary dark:text-primary" />
    }
  ];

  const awardsData = [
    {
      title: "US Regionals Hackathon Winner",
      description: "GenAI Launch event organized by Nomura in partnership with Amazon AWS",
      year: "2024",
      icon: <FaTrophy className="text-accent dark:text-accent" />
    },
    {
      title: "Most Valuable Player Award",
      description: "Nomura Holding America",
      year: "Q4 2023",
      icon: <FaMedal className="text-accent dark:text-accent" />
    },
    {
      title: "Gold Medalist",
      description: "Bachelor of Engineering in Computer Science and Engineering",
      year: "2014",
      icon: <FaStar className="text-accent dark:text-accent" />
    },
    {
      title: "Women in Data NY Chapter Co-Lead",
      description: "Driving regional programming and initiatives to elevate women in AI and Data Leadership",
      year: "2023 - Present",
      icon: <FaUsers className="text-accent dark:text-accent" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold bg-gradient-text">
              Education & Awards
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded mx-auto mt-2 mb-8"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Academic background and professional recognition highlighting my journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Education Section */}
            <div>
              <h3 className="text-xl font-heading font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <FaGraduationCap className="mr-3 text-primary dark:text-primary" /> Education
              </h3>

              <div className="space-y-6">
                {educationData.map((item, index) => (
                  <Card key={index} className="border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                            {item.institution}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 font-medium">
                            {item.degree}
                          </p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">
                            {item.location} | {item.period}
                          </p>
                          {item.distinction && (
                            <p className="text-primary dark:text-primary text-sm mt-1">
                              {item.distinction}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Awards Section */}
            <div>
              <h3 className="text-xl font-heading font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <FaTrophy className="mr-3 text-accent dark:text-accent" /> Awards & Recognition
              </h3>

              <div className="space-y-6">
                {awardsData.map((item, index) => (
                  <Card key={index} className="border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="h-12 w-12 rounded-full bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {item.description}
                          </p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                            {item.year}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
