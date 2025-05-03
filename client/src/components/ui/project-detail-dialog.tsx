import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export interface ProjectDetailProps {
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
  children?: React.ReactNode;
}

const ProjectDetailDialog = ({
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
  children,
}: ProjectDetailProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute top-0 right-0 ${categoryColor} text-white px-3 py-1 text-sm font-medium`}>
              {category}
            </div>
          </div>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription className="text-base text-gray-700 dark:text-gray-300">
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="px-3 py-1 rounded-full">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
            <div className="flex items-center px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-lg">
              <i className={impact1Icon}></i>
              <span className="ml-2 font-medium">{impact1}</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 rounded-lg">
              <i className={impact2Icon}></i>
              <span className="ml-2 font-medium">{impact2}</span>
            </div>
          </div>
          
          <div className="text-gray-700 dark:text-gray-300 mt-6">
            {fullDescription || (
              <div className="space-y-4">
                <p>
                  This project represents a strategic enterprise-level AI solution developed to address
                  specific business challenges and create significant value.
                </p>
                <p>
                  Detailed information about the strategy, implementation, technology, and outcomes will be added soon.
                </p>
              </div>
            )}
          </div>
          
          <div className="flex justify-end mt-6">
            <Button variant="outline" className="flex items-center">
              Visit Project <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailDialog;