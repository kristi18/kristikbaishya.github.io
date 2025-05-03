import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import ProjectDetailDialog, { ProjectDetailProps } from "./project-detail-dialog";
import { FaChartLine, FaMoneyBillWave } from "react-icons/fa";

const CommodityIntelligence: React.FC = () => {
  const projectData: ProjectDetailProps = {
    id: "commodity-intelligence-platform",
    image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=400&q=80",
    category: "Strategic AI",
    title: "Commodity Intelligence Platform",
    description: "AI-powered multi-signal platform for forecasting bulk commodity prices (coal, iron ore, freight) using predictive models, ship movement analytics, and sentiment signals. Delivered 400%+ RoCE on $1.3B portfolio.",
    tags: ["Predictive AI", "Supply Chain Intelligence", "NLP Sentiment", "Time Series Forecasting", "Humble AI"],
    impact1: "400% RoCE on $1.3B portfolio",
    impact1Icon: "fas fa-chart-line mr-1",
    impact2: "New revenue from FFA derivatives trading",
    impact2Icon: "fas fa-money-bill-wave mr-1",
    categoryColor: "bg-violet-600",
    fullDescription: `
      The Commodity Intelligence Platform represents a strategic enterprise-level AI solution that integrates multiple data signals to forecast bulk commodity prices with high accuracy.
      
      This platform combines predictive models, ship movement analytics, and sentiment analysis from industry news to provide a comprehensive view of market trends. The system delivered exceptional return on capital employed (400%+) across a $1.3B trading portfolio.
      
      Additionally, the platform enabled new revenue streams through Forward Freight Agreement (FFA) derivatives trading, leveraging the predictive insights to identify profitable market opportunities.
    `
  };

  return (
    <ProjectDetailDialog {...projectData}>
      <Card className="project-card overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <img
            src={projectData.image}
            alt={projectData.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className={`absolute top-0 right-0 ${projectData.categoryColor} text-white px-3 py-1 text-sm font-medium`}>
            {projectData.category}
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-heading font-bold text-gray-800 dark:text-white mb-2">
            {projectData.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {projectData.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {projectData.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span className="text-emerald-600 dark:text-emerald-400 text-sm font-medium flex items-center">
              <i className={projectData.impact1Icon}></i> {projectData.impact1}
            </span>
            <span className="text-amber-600 dark:text-amber-400 text-sm font-medium flex items-center">
              <i className={projectData.impact2Icon}></i> {projectData.impact2}
            </span>
          </div>
        </CardContent>
      </Card>
    </ProjectDetailDialog>
  );
};

export default CommodityIntelligence;