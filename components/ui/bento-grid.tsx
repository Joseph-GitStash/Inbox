import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
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
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 group/bento hover:shadow-xl transition duration-200 shadow-input p-2 pl-2 justify-between flex flex-col h-[220px] md:h-[220px] lg:h-[250px] space-y-4 customBorder ",
        className
      )}
    >
      {header}
      <div className=" group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        {header ? 
        (<div className="tracking-wide font-bold text-white my-2">
          {title}
        </div>):
        (<div className="tracking-wide font-bold mt-[3rem] text-white mb-2">
          {title}
        </div>)}
        
        <div className=" text-white/80 font-[600] tracking-wide shadow-xl text-[14px] md:text-[16px] pr-2">
          {description}
        </div>
      </div>
    </div>
  );
};
