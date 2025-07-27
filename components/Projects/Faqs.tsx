'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

const faqs = [
    {
        question: "Is the app out yet?",
        answer: "The app is still under development.",
    },
    {
        question: "Will the app be offline?",
        answer: "Yes MessageMe can be used offline.",
    },
    {
        question: "Can I create group chats?",
        answer: "Of course you can, you can create and limit invitations, but we took it  a step further, curious? install messageMe to find out.",
    },
    {
        question: "What happens during updates?",
        answer: "We understand that sometimes updates can easily ruin what already works, we can assure you that the seamless experience you get at first never changes for the worst.",
    },
]

const Faqs = () => {
  const [selectedIndex, setSelectedIndex] = useState<number|null>(null)

  return (
    <div className='py-[182px]'>
        <motion.div 
        initial={{ opacity: 0, y: 150 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition:{
                  duration: 0.8,
                  ease:[0.44, 0, 0, 1],
                },
              }}
              viewport={{
                amount: "some",
                once: false
              }}
        className="container">
          <h1 className="text-4xl font-thin md:text-5xl tracking-tighter text-center mb-3 ">
            <span className=" ">Questions</span>{" "}
            <span className="">&</span>{" "}
            <span className="text-[#007aff]">Answers</span>
          </h1>
          <div className='w-full max-w-4xl mx-auto pb-4 font-normal text-[14px] tracking-tight lg:text-[15px] lg:justify-end lg:text-start flex flex-col'>    
            <div className=" w-full mt-10">
              {faqs.map(({ question, answer }, faqIndex) => (
                <div key={question} className='bg-neutral-900 p-6 mb-3 border px-5 border-white/10 rounded-lg group/faq cursor-pointer relative isolate' onClick={() => {
                  if(faqIndex === selectedIndex){
                    setSelectedIndex(null)
                  } else{
                    setSelectedIndex(faqIndex)
                  }
              }}>
                <div className={twMerge("absolute bottom-0 left-0 h-0 w-full bg-neutral-900 text-white transition-all duration-700 -z-10 group-hover/faq:h-full", 
                  faqIndex === selectedIndex && "h-full"
                  )}
                ></div>
                <div className="flex items-center justify-between">
                  <div className={twMerge("group-hover/faq:text-white tracking-tight text-lg text-[#B7AB98] transition-all duration-700 ease-in-out ",
                    faqIndex === selectedIndex && "text-white underline underline-offset-2 "
                  )
                  }>
                    {question}
                  </div>
                  <div className="group-hover/faq:text-white">
                    <svg strokeWidth="1.5" 
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      fill='none' 
                      xmlns='http://www.w3.org/200/svg' 
                      className={
                        twMerge('size-5 text-[#B7AB98] transition-all duration-700 ease-in-out rotate-180 group-hover/faq:text-white', faqIndex === selectedIndex && 
                          "text-white rotate-30"
                      )}
                    >
                      <path strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5' 
                      />
                    </svg>
                  </div>
                </div>

                <AnimatePresence>
                  {faqIndex === selectedIndex &&
                    (
                      <motion.div className="overflow-hidden"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ 
                          duration: 0.5,
                          ease: "easeOut"
                        }}
                      >
                        <p className={twMerge('group-hover/faq:text-white text-[17px] lg:text-[19px] tracking-tight mt-4 px-4 rounded-lg py-2 ',
                          faqIndex === selectedIndex && "text-white"
                        )}>{answer}</p>
                      </motion.div>
                    )
                  }
                </AnimatePresence>
              </div>
              ) )}
              </div>        
            </div>
        </motion.div>
    </div>
  )
}

export default Faqs