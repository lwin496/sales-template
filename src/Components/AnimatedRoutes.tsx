import React from 'react'
import Home from '../Pages/Home';
import AboutUs from '../Pages/AbousUs';
import Contact from '../Pages/Contact';
import Login from '../Pages/Login'; 
import {Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from "framer-motion"

const AnimatedRoutes = () => {
      const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
          <Route path='/' element = {<Home />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path='/about' element = {<AboutUs />} />
          <Route path='/login' element = {<Login />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
