'use client'
import React, { useEffect } from 'react'
import Pointer from './Pointer'
import EmailCategory from './EmailCategory'
import { motion, useAnimate } from 'framer-motion'

const Hero = () => {
  const [leftDesignScope, leftDesignAnimate] = useAnimate()
  const [headerDesignScope, headerDesignAnimate] = useAnimate()
  const [pDesignScope, pDesignAnimate] = useAnimate()
  const [p2DesignScope, p2DesignAnimate] = useAnimate()
  const [rightDesignScope, rightDesignAnimate] = useAnimate()

  useEffect(() => {
    leftDesignAnimate([
        [leftDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
        [leftDesignScope.current, { y: 0, x: 0  }, { duration: 0.5 }],
    ]);
    rightDesignAnimate([
        [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5}],
        [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5}],
    ]);
    headerDesignAnimate([
        [headerDesignScope.current, { opacity: 1 }, { duration: 0.5}],
    ]);
    pDesignAnimate([
        [pDesignScope.current, { opacity: 1 }, { duration: 0.5}],
    ]);
    p2DesignAnimate([
        [p2DesignScope.current, { opacity: 1 }, { duration: 0.5}],
    ]);
    
  }, [])

  return (
    <div className="pt-[100px] lg:pt-[172px] pb-[72px] mt-[72px]">
        <div className="container relative">
            <motion.div 
            ref={leftDesignScope} 
                initial={{ opacity: 0, y: 100, x: -100 }}
                className="hidden lg:block absolute left-[100px] -top-[60px]">
                <Pointer name="Smith" />
            </motion.div>
            <motion.div ref={rightDesignScope}
                initial={{ opacity: 0, x: 100, y: 100 }}
                className="hidden lg:block absolute right-40 top-[160px]">
                <Pointer name="Jane" color="red" />
            </motion.div>
            <motion.h1 
                ref={headerDesignScope}
                initial={{ opacity: 0 }}
                className="text-4xl md:text-[70.2407px] md:leading-[69.8574px] tracking-tighter text-center mb-7 "
            >
                <span className=" ">The only</span>{" "}
                <span className="text-[#007aff] ">seamless</span>{" "}
                <span className=" ">and</span>{" "}
                <span className="text-[#007aff] ">secure</span>
                {" "}messaging app you need      
            </motion.h1>
            <motion.p 
                ref={pDesignScope}
                initial={{ opacity: 0 }}
                className="hidden lg:block lg:px-[320px] text-xl tracking-tight md:tracking-tight mt-[12px] mb-[30px] text-[#B7AB98] text-center">
                Need a powerful SMS app that replaces your default messaging app?
                <span className="">
                    {" "}Try{" "}
                    <span className="text-[#007aff] ">MessageMe</span>
                </span>  
            </motion.p>
            <motion.p 
                ref={p2DesignScope}
                initial={{ opacity: 0 }}
                className="flex flex-col lg:hidden text-lg tracking-tight md:tracking-tighter mt-[12px] mb-[30px] text-[#B7AB98] text-center">
                Need a powerful SMS app that 
                <span className="">replaces your default messaging app?</span>
                <span className="block">Try{" "}
                    <span className="text-[#007aff] ">messageMe</span>.
                </span>     
            </motion.p>
            <EmailCategory />
        </div>
    </div>
  )
}

export default Hero