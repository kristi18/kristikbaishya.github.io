import { cn } from "@/lib/utils";

interface SkillTagProps {
  text: string;
  colorClassName: string;
}

const SkillTag = ({ text, colorClassName }: SkillTagProps) => {
  return (
    <span
      className={cn(
        "skill-tag px-3 py-1.5 rounded-lg text-sm font-medium",
        colorClassName
      )}
    >
      {text}
    </span>
  );
};

export default SkillTag;
