'use client'

import { motion } from 'framer-motion'
import Features from './Features'

const About = () => {
  const text = `give you a seamless, fun and secure messaging experience. We are dedicated to helping you stay connected to family and friends, and yes, even your boss`
  

  return (
    <div className="py-[92px] ">
        <div className="container">
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
          className=""
          >
            <Features />
            <h1 className="text-4xl md:text-5xl tracking-tighter text-center pt-[3rem] mb-7 ">
                <span className="text-[#007aff]">MessageMe</span>{" "}
                <span className="">was built to </span> {" "}
                <span className="">
                  {text}
                </span>
            </h1>
          </motion.div>
        </div>
    </div>
  )
}

export default About