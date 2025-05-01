import { FaCircle } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      icon: <FaCircle className="text-blue-500 h-3 w-3" />,
      skills: [
        "Generative AI",
        "Machine Learning",
        "Responsible AI",
        "NLP",
        "Deep Learning",
        "AI Governance"
      ]
    },
    {
      id: "programming",
      title: "Programming & Tools",
      icon: <FaCircle className="text-green-500 h-3 w-3" />,
      skills: [
        "Python",
        "R",
        "SQL",
        "Pandas",
        "NumPy",
        "Scikit-Learn",
        "PyTorch"
      ]
    },
    {
      id: "infrastructure",
      title: "Infrastructure & Platforms",
      icon: <FaCircle className="text-purple-500 h-3 w-3" />,
      skills: [
        "AWS",
        "Snowflake",
        "MLFlow",
        "Airflow",
        "GitLab",
        "Streamlit",
        "PowerBI"
      ]
    },
    {
      id: "product",
      title: "Product & Leadership",
      icon: <FaCircle className="text-blue-400 h-3 w-3" />,
      skills: [
        "Product Management",
        "Strategic Planning",
        "Stakeholder Management",
        "Agile & Scrum",
        "Cross-functional Leadership"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-primary mb-4">
              Skills & Tools
            </h2>
            <div className="h-1 w-16 bg-primary rounded mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technical and leadership competencies that drive my AI product development approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category) => (
              <Card 
                key={category.id} 
                className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {category.icon}
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, index) => (
                      <p 
                        key={index} 
                        className="text-sm text-gray-600 dark:text-gray-300"
                      >
                        {skill}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
