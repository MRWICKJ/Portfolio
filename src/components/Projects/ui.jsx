import { cn } from "../../utils/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-2xl transition-shadow duration-300 shadow-input dark:shadow-none p-4 dark:bg-gray-800 bg-white border border-transparent flex flex-col space-y-4 transform transition-transform duration-200",
        className
      )}
    >
      {header}
      <div className="flex items-center space-x-2 group-hover/bento:translate-x-1 transition-transform duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-800 dark:text-neutral-200 mb-1 mt-2">
          {title}
        </div>
      </div>
      <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
        {description}
      </div>
    </div>
  );
};
