import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  side: "left" | "right";
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  dotColor: string;
  achievements: string[];
}

const TimelineItem = ({
  side,
  title,
  organization,
  location,
  period,
  description,
  dotColor,
  achievements,
}: TimelineItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="timeline-item md:flex">
      {side === "right" ? (
        <>
          <div className="hidden md:block md:w-1/2"></div>
          <div className={`timeline-dot ${dotColor}`}></div>
          <div className="timeline-content md:w-1/2 ml-12 md:ml-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-heading font-bold text-gray-800 dark:text-white">
                {title}
              </h3>
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4 flex-wrap">
                <span className="font-medium">{organization}</span>
                <span className="mx-2">•</span>
                <span>{location}</span>
                <span className="mx-2">•</span>
                <span>{period}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
              <div className={cn("space-y-2", isExpanded ? "block" : "hidden")}>
                {achievements.map((achievement, index) => (
                  <p key={index} className="text-gray-600 dark:text-gray-300 mb-2">
                    • {achievement}
                  </p>
                ))}
              </div>
              <button
                className="mt-4 text-primary hover:text-primary-hover dark:text-primary dark:hover:text-primary-hover font-medium flex items-center"
                onClick={toggleDetails}
              >
                <span>{isExpanded ? "Hide Details" : "Show Details"}</span>
                {isExpanded ? (
                  <ChevronUp className="ml-1 w-4 h-4" />
                ) : (
                  <ChevronDown className="ml-1 w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="timeline-content md:w-1/2 mr-12 md:mr-6 md:text-right ml-12 md:ml-0">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-heading font-bold text-gray-800 dark:text-white">
                {title}
              </h3>
              <div className="flex items-center md:justify-end text-gray-600 dark:text-gray-400 mb-4 flex-wrap">
                <span className="font-medium">{organization}</span>
                <span className="mx-2">•</span>
                <span>{location}</span>
                <span className="mx-2">•</span>
                <span>{period}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
              <div className={cn("space-y-2", isExpanded ? "block" : "hidden")}>
                {achievements.map((achievement, index) => (
                  <p key={index} className="text-gray-600 dark:text-gray-300 mb-2">
                    • {achievement}
                  </p>
                ))}
              </div>
              <button
                className="mt-4 text-primary hover:text-primary-hover dark:text-primary dark:hover:text-primary-hover font-medium flex items-center md:justify-end ml-auto"
                onClick={toggleDetails}
              >
                <span>{isExpanded ? "Hide Details" : "Show Details"}</span>
                {isExpanded ? (
                  <ChevronUp className="ml-1 w-4 h-4" />
                ) : (
                  <ChevronDown className="ml-1 w-4 h-4" />
                )}
              </button>
            </div>
          </div>
          <div className={`timeline-dot ${dotColor}`}></div>
          <div className="hidden md:block md:w-1/2"></div>
        </>
      )}
    </div>
  );
};

export default TimelineItem;
