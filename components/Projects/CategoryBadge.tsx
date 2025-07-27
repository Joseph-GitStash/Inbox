import { HTMLMotionProps, motion } from 'framer-motion';


export const CategoryBadge = ({
  isActive = false,
  accentColor,
  children,
  id,
  ...props
}: {
  isActive?: boolean;
  accentColor: string;
} & HTMLMotionProps<'div'>) => {
  return(
  <motion.div className={`border border-white/10 cursor-pointer items-center flex justify-center gap-1 md:gap-2 py-2 px-4 md:py-4 md:px-6 transition-colors [&>[data-slot=label]]:transition-all [&>[data-slot=label]]:text-white  ${isActive? "flex-1" : "[&>[data-slot=label]]:hidden "} `}
  style={{
     borderRadius: 24,
     backgroundColor: isActive? accentColor : "#262626",
     color: isActive? "white" : "inherit"
  }}
  layoutId={id}
  {...props}
  >
    {children}
  </motion.div>)
}