'use client'

import { emails } from '@/db/email';
import image1 from '@/public/assets/images/hero-image.jpg'
import {
  BriefcaseBusiness,
  Inbox,
  LucideSquareArrowOutUpRight,
  Mail,
  Megaphone,
  Menu,
  MessageCircle,
  MessageSquareText,
  ShoppingCart,
  UserRound,
  X,
} from "lucide-react";
import { AnimatePresence, motion, Reorder, useAnimate } from 'framer-motion';
import { RefObject, useEffect, useRef, useState } from "react";
import { CategoryBadge } from './CategoryBadge';
import Tray from './Tray';
import CategoryList from './CategoryList';
import Image from 'next/image';


export const categories = [
  {
    id: 1,
    name: "primary",
    displayName: "Primary",
    accentColor: "rgb(0,122,255)",
    icon: <UserRound />,
  },
  {
    id: 2,
    name: "transactions",
    displayName: "Transactions",
    accentColor: "rgb(52,199,89)",
    icon: <ShoppingCart />,
  },
  {
    id: 3,
    name: "updates",
    displayName: "Updates",
    accentColor: "rgb(88,86,214)",
    icon: <MessageSquareText />,
  },
  {
    id: 4,
    name: "business",
    displayName: "Business",
    accentColor: "rgb(255,45,85)",
    icon: <BriefcaseBusiness />,
  },
  
];



const EmailCategory = () => {
  const [sectionDesignScope, sectionDesignAnimate] = useAnimate()
  
  const allEmails = emails;
  const [theEmails, setTheEmails] = useState(allEmails);
  const [trayOpen, setTrayOpen] = useState(false);
  const wrapper = useRef(null)

  const [activeCategory, setActiveCategory] = useState("primary")

  useEffect(() => {
      sectionDesignAnimate([
          [sectionDesignScope.current, { opacity: 1 }, { duration: 0.6, delay: 0.7 }],
          [sectionDesignScope.current, { y: 0  }, { duration: 0.6 }],
      ]);
      
    }, [])

   useEffect(() => {
    setTheEmails(allEmails.filter((e) => e.category === activeCategory))

   }, [activeCategory])


  return (
    <motion.section className=''
      ref={sectionDesignScope} 
      // initial={{ opacity: 0, y: 100 }}
    >
        <motion.div 
          className="relative bg-neutral-900 overflow-hidden emailLayout border border-white/10 rounded-lg">
        <div className="absolute hidden -z-10 inset-0 bg-[#00000061]"></div>
        {/* <AnimatePresence>
          {trayOpen && <Tray closeTray={() => setTrayOpen(false)} />}
        </AnimatePresence> */}
            <div className="flex flex-col gap-7">
                <div className="flex items-center gap-7 justify-between">
                  <div className="flex items-center gap-2">
                    <Image src={image1} alt='user image' 
                    className='w-[30px] h-[30px] bg-cover rounded-full' />
                    <h1 className='tracking-tighter text-xl flex '>
                        Hi John Doe
                    </h1>
                  </div>
                  <Menu className='mt-2' 
                    // onClick={() => setTrayOpen(true)} 
                  />  
                </div>
                <motion.div className="max-w-fit flex gap-2 md:gap-4 " layout>
                  {categories.map((category) => (
                    <CategoryBadge 
                      isActive={activeCategory === category.name}
                      accentColor={category.accentColor} 
                      onClick={() => {
                        setActiveCategory(category.name) 
                      }}
                      id={category.name}
                      key={category.name}
                      
                    >
                      <motion.div layout className="">{category.icon}</motion.div>
                      <motion.span data-slot='label' className="text-[12px] md:text-sm tracking-tight font-semibold">{category.displayName}</motion.span>
                    </CategoryBadge>
                  ))}
                </motion.div>
                
                {/* <motion.div className=""
                      key={activeCategory}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
                      // transition={{ 
                      //   type: "spring", bounce: 0, duration: 0.5, delay: 0.4
                      //  }}
                >
                  <Reorder.Group values={theEmails} onReorder={setTheEmails} 
                    ref={wrapper}
                  >
                    {theEmails.map((email) => (
                      <CategoryList 
                      email={email} 
                      wrapper={wrapper}/>
                    ))} 
                  </Reorder.Group>
                </motion.div> */}
                
                <motion.div className=""
                      key={activeCategory}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
                      transition={{ 
                        type: "spring", bounce: 0, duration: 0.5, delay: 0.4
                       }}
                >
                    {theEmails.map((email) => (
                      <CategoryList 
                      email={email} 
                      key={email.id}
                      wrapper={wrapper}/>
                    ))} 
                </motion.div>

            </div>
        </motion.div>

    </motion.section>
  )
}
export default EmailCategory

