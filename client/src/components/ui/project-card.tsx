import { Card, CardContent } from "@/components/ui/card";

import ProjectDetailDialog from "./project-detail-dialog";

export interface ProjectCardProps {
  id?: string;
  image: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  impact1: string;
  impact1Icon: string;
  impact2: string;
  impact2Icon: string;
  categoryColor: string;
  fullDescription?: string;
  onClick?: () => void;
}

const ProjectCard = ({
  id,
  image,
  category,
  title,
  description,
  tags,
  impact1,
  impact1Icon,
  impact2,
  impact2Icon,
  categoryColor,
  fullDescription,
  onClick,
}: ProjectCardProps) => {
  const projectContent = (
    <Card 
      className="project-card overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className={`absolute top-0 right-0 ${categoryColor} text-white px-3 py-1 text-sm font-medium`}>
          {category}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-heading font-bold text-gray-800 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
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
            <i className={impact1Icon}></i> {impact1}
          </span>
          <span className="text-amber-600 dark:text-amber-400 text-sm font-medium flex items-center">
            <i className={impact2Icon}></i> {impact2}
          </span>
        </div>
      </CardContent>
    </Card>
  );

  // If there's a full description, wrap in dialog
  if (fullDescription) {
    return (
      <ProjectDetailDialog
        id={id}
        image={image}
        category={category}
        title={title}
        description={description}
        tags={tags}
        impact1={impact1}
        impact1Icon={impact1Icon}
        impact2={impact2}
        impact2Icon={impact2Icon}
        categoryColor={categoryColor}
        fullDescription={fullDescription}
      >
        {projectContent}
      </ProjectDetailDialog>
    );
  }

  return projectContent;
};

export default ProjectCard;
