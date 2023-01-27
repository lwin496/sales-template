import React from 'react'
import { motion } from 'framer-motion'
const AbousUs = () => {
  return (
    <motion.div className='bg-[#171717] text-white h-screen'
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{ x: window.innerWidth, transition: {duration:0.5}}}
  >
      
      <h1>About us</h1>
    </motion.div>
  )
}

export default AbousUs