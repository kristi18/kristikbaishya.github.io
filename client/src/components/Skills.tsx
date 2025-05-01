import { FaBrain, FaCode, FaCloud, FaUsersCog } from "react-icons/fa";
import SkillTag from "./ui/skill-tag";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <FaBrain className="text-primary dark:text-primary" />,
      skills: [
        "Generative AI",
        "Machine Learning",
        "Responsible AI",
        "NLP",
        "Deep Learning",
        "AI Governance"
      ],
      colorClass: "bg-primary-50 dark:bg-primary/20 text-primary-700 dark:text-primary-300"
    },
    {
      title: "Programming & Tools",
      icon: <FaCode className="text-secondary dark:text-secondary" />,
      skills: [
        "Python",
        "R",
        "SQL",
        "Pandas",
        "NumPy",
        "Scikit-Learn",
        "PyTorch"
      ],
      colorClass: "bg-secondary-50 dark:bg-secondary/20 text-secondary-700 dark:text-secondary-300"
    },
    {
      title: "Infrastructure & Platforms",
      icon: <FaCloud className="text-accent dark:text-accent" />,
      skills: [
        "AWS",
        "Snowflake",
        "MLFlow",
        "Airflow",
        "GitLab",
        "Streamlit",
        "PowerBI"
      ],
      colorClass: "bg-accent-50 dark:bg-accent/20 text-accent-700 dark:text-accent-300"
    },
    {
      title: "Product & Leadership",
      icon: <FaUsersCog className="text-primary dark:text-primary" />,
      skills: [
        "Product Management",
        "Strategic Planning",
        "Stakeholder Management",
        "Agile & Scrum",
        "Cross-functional Leadership"
      ],
      colorClass: "bg-primary-50 dark:bg-primary/20 text-primary-700 dark:text-primary-300"
    }
  ];

  const proficiencySkills = [
    { name: "AI & Generative AI", percentage: 95, color: "from-primary-500 to-primary-600" },
    { name: "Machine Learning", percentage: 90, color: "from-secondary-500 to-secondary-600" },
    { name: "Product Management", percentage: 92, color: "from-accent-500 to-accent-600" },
    { name: "Stakeholder Management", percentage: 88, color: "from-primary-500 to-primary-600" },
    { name: "Python & Data Science", percentage: 85, color: "from-secondary-500 to-secondary-600" },
    { name: "AI Governance", percentage: 90, color: "from-accent-500 to-accent-600" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold bg-gradient-text">
              Skills & Tools
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded mx-auto mt-2 mb-8"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technical and leadership competencies that drive my AI product development approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 mr-3">
                      <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-gray-800 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillTag
                        key={skillIndex}
                        text={skill}
                        colorClassName={category.colorClass}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-16 bg-white dark:bg-gray-800">
            <CardContent className="p-8">
              <h3 className="text-xl font-heading font-bold text-gray-800 dark:text-white mb-6 text-center">
                Proficiency Level
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {proficiencySkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <Progress
                        value={skill.percentage}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
