import React from 'react'
import { motion } from 'framer-motion'
import homeScreenFootage from '../Video/homeScreenFootage.mp4'
const Home = () => {
  return (
    <motion.div className='bg-[#171717] text-white h-screen'
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{ x: window.innerWidth, transition: {duration:0.2}}}
    >
    <div className='flex flex-row h-screen'>
      <div className='w-[100vw] bg-red-100 lg:w-[60vw]' >
        <section className="relative h-screen text-white py-0 px-3">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
            <video className="min-w-full min-h-full absolute object-cover" src={homeScreenFootage} typeof="video/mp4" autoPlay muted loop></video>
        </div>
        <div className='video-content text-white text-4xl'>
          <h1>Cafe Lauit</h1>
        </div>
        
    </section>

      </div>  
      <div className='w-[0vw] lg:[40vw] bg-blue-[100]'>

      </div>
    </div>
      
    </motion.div>
  )
}

export default Home