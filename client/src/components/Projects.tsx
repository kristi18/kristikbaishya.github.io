import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ui/project-card";
import CommodityIntelligence from "./ui/CommodityIntelligence";
import { FaChartLine, FaShieldAlt, FaClock, FaAward } from "react-icons/fa";

const Projects = () => {
  const projectsData = [
    {
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
      category: "GenAI",
      title: "Legal Document Management",
      description: "GenAI-powered solution for clause extraction, interpretation, Q&A, and comparison of legal documents.",
      tags: ["Large Language Models", "AWS", "NLP"],
      impact1: "120 hours/month saved",
      impact1Icon: "fas fa-clock mr-1",
      impact2: "Hackathon Winner",
      impact2Icon: "fas fa-award mr-1",
      categoryColor: "bg-primary"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
      category: "ML",
      title: "Anomaly Detection Engine",
      description: "Advanced ML system for regulatory reporting error detection and prevention for trade submissions.",
      tags: ["Statistical Modeling", "Python", "Time Series"],
      impact1: "15-20% error reduction",
      impact1Icon: "fas fa-chart-line mr-1",
      impact2: "Enhanced Compliance",
      impact2Icon: "fas fa-shield-alt mr-1",
      categoryColor: "bg-secondary"
    },
    {
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
      category: "ML",
      title: "Demand Forecasting System",
      description: "Advanced machine learning models to enhance demand forecasting across diverse fiber categories.",
      tags: ["Time Series", "Regression", "Supply Chain"],
      impact1: "25% accuracy increase",
      impact1Icon: "fas fa-arrow-up mr-1",
      impact2: "$2M+ value delivered",
      impact2Icon: "fas fa-dollar-sign mr-1",
      categoryColor: "bg-primary"
    },
    {
      image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
      category: "Governance",
      title: "AI Evaluation Application",
      description: "Framework incorporating ethical guardrails for responsible AI deployment and governance.",
      tags: ["Ethical AI", "Governance", "Risk Assessment"],
      impact1: "30-35% risk reduction",
      impact1Icon: "fas fa-shield-alt mr-1",
      impact2: "25% less bias incidents",
      impact2Icon: "fas fa-check-circle mr-1",
      categoryColor: "bg-secondary"
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
      category: "ML",
      title: "Customer Persona Clustering",
      description: "Leveraging clustering techniques to generate customer digital personas for targeted strategies.",
      tags: ["Clustering", "Customer Analytics", "Segmentation"],
      impact1: "~15% revenue growth",
      impact1Icon: "fas fa-arrow-up mr-1",
      impact2: "Enhanced targeting",
      impact2Icon: "fas fa-users mr-1",
      categoryColor: "bg-accent"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold bg-gradient-text">
              Featured Projects
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded mx-auto mt-2 mb-8"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of strategic, enterprise-level AI products that delivered significant business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Commodity Intelligence Platform (Featured first) */}
            <CommodityIntelligence />

            {/* Other projects */}
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                category={project.category}
                title={project.title}
                description={project.description}
                tags={project.tags}
                impact1={project.impact1}
                impact1Icon={project.impact1Icon}
                impact2={project.impact2}
                impact2Icon={project.impact2Icon}
                categoryColor={project.categoryColor}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="group">
              View All Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
