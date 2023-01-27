import React from 'react'
import { NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <a>
            <NavLink to = '/'>
                  Home
            </NavLink>
      </a>
      <a>
            <NavLink to = '/about'>
                  About
            </NavLink>
      </a>
      <a>
            <NavLink to = '/login'>
                  login
            </NavLink>
      </a>
      <a>
            <NavLink to = '/contact'>
                  contact
            </NavLink>
      </a>
    </div>
  )
}

export default Navbar