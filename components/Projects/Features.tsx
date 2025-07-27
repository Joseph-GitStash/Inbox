'use client'

import { motion } from 'framer-motion'
import { DotIcon, List } from 'lucide-react'

const features = [
    "Sms blocker",
    "Animated emojis",
    "Group chats",
    "Backup and restore",
    "Schedule sms",
    "Auto delete",
    "Sort and grab",
]

const Features = () => {
  return (
    <div className='py-[72px]'>
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
        <h1 className="text-2xl underline tracking-tighter text-center mb-7">
          Features
        </h1>
        <div className="mt-8 flex flex-wrap gap-3 justify-center lg:px-[10rem]">
          {features.map((feature) => (
            <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-2 py-1 rounded-lg gap-1 items-center">
              <DotIcon className='-ml-2 hidden text-[#007aff]'/>
              <span className="text-[17px] md:text-xl tracking-tight">
                <span className='hidden text-[#007aff]'>.</span>{" "}
                {feature}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Features