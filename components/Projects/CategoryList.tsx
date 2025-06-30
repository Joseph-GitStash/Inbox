
import { emails } from '@/db/email';
import {
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
import { AnimatePresence, motion, Reorder, useDragControls } from 'framer-motion';
import { RefObject, useState } from "react";

const EmailDetails = ({
  getEmails,
  onClose,
}: {
  getEmails: (typeof emails)[0];
  onClose: () => void;
}) => {
    return(
      
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200, duration: 0.2, ease: 'easeIn' }}
        className="absolute inset-0 m-auto w-[22rem] h-[22rem] bg-white px-8 pb-6 border-l border-white/20 shadow-lg p-6 cursor-pointer overflow-hidden rounded-md z-10"
      >
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
    email,
    wrapper,
}:{
  email: emails;
  wrapper: RefObject<null>;
}) => {
    const [selectedEmail, setSelectedEmail] = useState<
                  (typeof emails)[0] | null
                >(null);


  return (
    <section>

    <Reorder.Item 
        value={email}
        className="cursor-grab flex gap-1 py-3" 
        dragConstraints={wrapper}
        // dragElastic={1}
    >
        <div className="flex flex-col flex-1" 
        // onPointerDown={(e) => controls.start(e)}
        >
            <h2 className="tracking-tighter text-[18px] font-semibold">{email.sender}</h2>
            <h3 className='tracking-tighter'>{email.subject}</h3>
            <p className="text-sm tracking-tight font-semibold">{email.description}</p>
            </div>
            <div>
                <LucideSquareArrowOutUpRight className='cursor-pointer' onClick={() => setSelectedEmail(email)} 
            />
        </div>
                          
    </Reorder.Item>
    
        {selectedEmail && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black "
                  onClick={() => setSelectedEmail(null)}
                  layout
                />
                  <EmailDetails
                    getEmails={selectedEmail}
                    onClose={() => setSelectedEmail(null)}
                    key={email.id}
                  />
                
            </AnimatePresence>
        )}
    </section>
  )
}

export default CategoryList