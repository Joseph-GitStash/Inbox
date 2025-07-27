
import { emails } from '@/db/email';
import {
  ArrowUpRight,
  LucideSquareArrowOutUpRight,
} from "lucide-react";
import { AnimatePresence, motion, Reorder, useDragControls, useMotionValue } from 'framer-motion';
import { RefObject, useState } from "react";

const EmailDetails = ({
  getEmails,
  onClose,
  closeEmailTray,
}: {
  getEmails: (typeof emails)[0];
  onClose: () => void;
  closeEmailTray: () => void
}) => {
   const controls = useDragControls()
   const dragY = useMotionValue(0)

    return(
      
      <motion.div 
        className="absolute bottom-0 inset-x-0 mx-auto w-[22rem] h-[340px] bg-white px-8 pb-6 shadow-lg p-6 cursor-pointer overflow-hidden rounded-t-md z-10"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200, duration: 0.2, ease: 'easeIn' }}
        layout
        drag='y'
        dragControls={controls}
        dragConstraints={{
          top: 0,
          bottom: 0,
        }}
        dragElastic={{
          top: 0,
          bottom: 0.5,
        }}
        onDragEnd={() => {
          if(dragY.get() >= 100){
            closeEmailTray()
          }
        }}
        
      >
        <button className='mb-7 -mt-2 mx-auto flex justify-center'>
          <motion.div 
            className="h-2 w-14 cursor-grab bg-gray-200 touch-none  "
            style={{ borderRadius: 100 }}      
            key="drag-bar"
            layout
            onPointerDown={(e) => {
            controls.start(e)
            } }
          />
        </button>
        <div className="flex gap-2 items-center">
        <h1 className='tracking-tighter text-xl text-black'>
         <span className="text-lg">From </span> {getEmails.sender}
        </h1>
          <span className={`
            ${getEmails.category === "primary"? "bg-[rgb(0,122,255)]": 
              getEmails.category === "transactions"? "bg-[rgb(52,199,89)]": 
              getEmails.category === "updates"? "bg-[rgb(88,86,214)]": 
                                                  "bg-[rgb(255,45,85)]"}
            text-white capitalize px-4 py-1 rounded-full text-[13px] tracking-tight`}
          >
            {getEmails.category}
          </span>
        </div>
        <p className='text-sm tracking-tight bg-gray-200 w-fit mt-2 px-3'>
          {getEmails.date}
        </p>
        <p className="text-sm mt-24 tracking-tight bg-gray-200 w-fit px-3 mb-1">Message</p>
        <h2 className='text-lg tracking-tighter'>{getEmails.subject}</h2>
        <p className='text-[15px]  tracking-tight'>{getEmails.description}</p>
      </motion.div>
    
    )
}


const CategoryList = ({
    email ,
    wrapper,
}:{
  email: (typeof emails)[0];
  wrapper: RefObject<null>;
}) => {
  
    const [selectedEmail, setSelectedEmail] = useState<
                  (typeof emails)[0] | null
                >(null);
      const [trayOpen, setTrayOpen] = useState(false);
      const closeAll = ()=>{
        setSelectedEmail(null)
        setTrayOpen(false)
      }


  return (
    <section className=''>

    <div className="pointer-events-none flex gap-1 py-3 border border-white/10 bg-[#262626] my-4 px-2 rounded-lg" 
       
    >
        <div className="flex flex-col flex-1" 
        >
            <h2 className="tracking-tight mb-2 text-[17px]">{email.sender}</h2>
            <h3 className={`
              ${email.category === "primary"? "text-[#00aff]": 
                email.category === "transactions"? "text-[#34759]": 
                email.category === "updates"? "text-[#585d6]": 
                                              "text-[#ff255]"}
                tracking-tight mb-1 underline underline-offset-2 text-[18px]`}>
              {email.subject}
              </h3>
            <p className="hidden lg:block text-[15px] ">
              {email.description}
            </p>
            <p className="lg:hidden text-[15px] ">
              {email.description.slice(0, 60) + '...'}
            </p>
            </div>
            <div>
                <LucideSquareArrowOutUpRight className='hidden cursor-pointer' onClick={() => setSelectedEmail(email)} />
                <ArrowUpRight className='' />
        </div>
                          
    </div>
    
        {selectedEmail &&(
          <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black "
                  onClick={() => setSelectedEmail(null)}
                  layout
              ></motion.div>

                <EmailDetails
                    getEmails={selectedEmail}
                    onClose={() => setSelectedEmail(null)}
                    key={email.id}
                    closeEmailTray={() => setTrayOpen(true)}
                />
          </AnimatePresence>
                
        )}
    </section>
  )
}

export default CategoryList