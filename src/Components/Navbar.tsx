import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {useState} from 'react'
import {motion , AnimatePresence} from "framer-motion"

const Navbar = () => {
      const [open, setOpen] = useState(false)
      const isOpen = () => { 
            setOpen(true)
      }
      const closeMenu = () => { 
            setOpen(false)
      }
      const item = { 
            exit:{ 
                  opacity:0,
                  height:0,
                  transition:{ 
                        ease:"easeInOut",
                        duration:0.3,
                        delay:.1,
                  }
            }
      }

  return (
            <div className='relative flex flex-col w-[100%] h-[100vh]'>
                  <header className='flex justify-end w-[100%] h-[58px] border-b-4 border-blue-600 pb-[50px]'>
                        <FaBars className='h-[58px] w-[58px] dflex cursor-pointer' onClick={isOpen}/>
                  </header>   
                  <AnimatePresence>
                  {
                        open && (
                              <motion.div className='absolute w-[100%] h-[100vh] bg-black text-white dflex flex-col txt pt-[10vh]'
                                    variants={item}
                                    initial={{height:0,opacity:0}}
                                    animate={{height:"100vh", opacity:1}}
                                    transition={{delay:.1}}
                                    exit="exit"
                              >
                                    <div className='dflex h-[58px] w-[58px] bg-white text-black rounded-[58px] absolute top-[40px] right-[20px] z-10 cursor-pointer text-[18px]' onClick={closeMenu}>X</div>
                                    <motion.div
                                          variants={item}
                                          initial={{y:90,opacity:0}}
                                          animate={{y:0, opacity:1}}
                                          transition={{delay:.7}}
                                          exit={{
                                                opacity:0,
                                                y:90,
                                                transition:{
                                                      ease:"easeInOut",
                                                      delay:.8,  
                                                }
                                          }}
                                    >
                                          <NavLink to = '/' className='dflex inline-flex h-[80px] overflow-hidden text-[2.6rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] my-[1vh] '>
                                                HOME
                                          </NavLink>
                                    </motion.div>
                                    <motion.div
                                          variants={item}
                                          initial={{y:90,opacity:0}}
                                          animate={{y:0, opacity:1}}
                                          transition={{delay:.6}}
                                          exit={{
                                                opacity:0,
                                                y:90,
                                                transition:{
                                                      ease:"easeInOut",
                                                      delay:.6,  
                                                }
                                          }}
                                    >
                                          <NavLink to = '/about' className='dflex inline-flex h-[80px] overflow-hidden text-[2.6rem] md:text-[4rem] lg:text-[4.5rem]  xl:text-[5rem] my-[1vh]'>
                                                ABOUT
                                          </NavLink>
                                    </motion.div>
                                    <motion.div
                                          variants={item}
                                          initial={{y:90,opacity:0}}
                                          animate={{y:0, opacity:1}}
                                          transition={{delay:.5}}
                                          exit={{
                                                opacity:0,
                                                y:90,
                                                transition:{
                                                      ease:"easeInOut",
                                                      delay:.4,  
                                                }
                                          }}
                                    >
                                          <NavLink to = '/login' className='dflex inline-flex h-[80px] text-[2.6rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] my-[1vh]'>
                                                LOGIN
                                          </NavLink>
                                    </motion.div>   
                                    <motion.div
                                            variants={item}
                                            initial={{y:90,opacity:0}}
                                            animate={{y:0, opacity:1}}
                                            transition={{delay:.4}}
                                            exit={{
                                                  opacity:0,
                                                  y:90,
                                                  transition:{
                                                        ease:"easeInOut",
                                                        delay:.2,  
                                                  }
                                            }}
                                    >
                                          <NavLink to = '/contact' className='dflex inline-flex h-[80px] overflow-hidden text-[2.6rem] md:text-[4rem] lg:text-[4.5rem]  xl:text-[5rem] my-[1vh]'>
                                                CONTACT
                                          </NavLink>
                                    </motion.div>   

                              </motion.div>
                        )
                  }
                  </AnimatePresence>

            </div>
  )
}

export default Navbar