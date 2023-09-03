import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "./logo.png"
import "./menu.css";

const Navmenu = () => {
  return (
    <div className='navmenu'>
         <div className="logo">
             <NavLink to="/" > 
               <img src={logo} />
              </NavLink>
         </div>
         <div className="menu-bar">
            <ul>
                <li>
                <NavLink to="/" > Home </NavLink>
                </li>
                <li>
                <NavLink to="/about" > About  </NavLink>
                </li>
                <li>
                <NavLink to="/blog" > blog  </NavLink>
                </li>
                <li>
                <NavLink to="/contact" > contact  </NavLink>
                </li>
                <li>
                <NavLink to="/more" > more  </NavLink>
                </li>
            </ul>
             
         </div>
         <div className="enquiry-btn">
            <span>Login</span>
            <button >Contact Us</button>
         </div>
    </div>
  )
}

export default Navmenu