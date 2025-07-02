
import React, { ReactNode, useState } from 'react'
import { AnimatePresence, motion, useDragControls, useMotionValue } from 'framer-motion';
import { About, BackUp, KeyReveal, OptionsMenu, PhraseKey, PrivateKey, RecoveryPhrase, RemoveEmails, RemoveWallet } from './Tray-Content';

export interface TrayProps {
  closeTray: () => void
}

const Tray = ({ closeTray }: TrayProps) => {
  const [content, setContent] = useState("options")

  const trayContent : Record<string, ReactNode> = {
    options: <OptionsMenu setContent={setContent} closeTray={closeTray} />,
    privateKey: <PrivateKey setContent={setContent} closeTray={closeTray} />,
    recovery: <RecoveryPhrase setContent={setContent} closeTray={closeTray} />,
    about: <About setContent={setContent} closeTray={closeTray} />,
    remove: <RemoveWallet setContent={setContent} closeTray={closeTray} />,
    keyReveal: <KeyReveal setContent={setContent} closeTray={closeTray} />,
    phraseKey: <PhraseKey setContent={setContent} closeTray={closeTray} />,
    backUp: <BackUp setContent={setContent} closeTray={closeTray} />,
    removeEmails: <RemoveEmails setContent={setContent} closeTray={closeTray} />,
  };

  const controls = useDragControls()
  const dragY = useMotionValue(0)

  return (
    <>
      <motion.div className="absolute h-full inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        onClick={closeTray}
      ></motion.div>
      <motion.div className="absolute bottom-0 inset-x-0 mx-auto w-full sm:w-[22rem] min-h-10 bg-white px-8 pb-6 overflow-hidden z-10"
        style={{ borderTopLeftRadius: 7, borderTopRightRadius: 7, y: dragY }}
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
            closeTray()
          }
        } }
      >
        <button className='my-3 mx-auto flex justify-center'>
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
        <motion.div className="" 
          key={content} 
          layout="position" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {trayContent[content]}
        </motion.div>
      </motion.div>
    </>
  )
}

export default Tray
