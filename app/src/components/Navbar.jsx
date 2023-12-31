import React, { useContext } from 'react'
// import Promo from './Promo'
import Drawer from './Drawer'
import Logo from './Logo'
import LoginBtn from './LoginBtn'
import DarkMode from './darkMode'
import { useLocation } from 'react-router-dom'
import {motion} from 'framer-motion'
import { ThemeContext } from '../hook/StateGlobal'
const Navbar = () => {
  const location = useLocation();
  console.log(location)
  // let currentLink = ''
  // const links = location.pathname.split('/')
  // .filter(link => link !== '')
  // .map(link =>{
  //   currentLink += `/${link}`
  //   return (
  //     <>
  //       <button key={link}>Search</button>
  //     </>
  //   )
  // })
  const nonIndex = location.pathname !== '/';
  const gridClasses = nonIndex ? "grid-cols-4" : "grid-cols-3";
  
  return (
    <>
    <nav>
    <motion.div animate={{paddingRight:40,paddingLeft:30}} initial={{paddingRight:0, paddingLeft:0}} id="navbar" className={
    `grid grid-cols-3 place-content-between place-items-center gap-40 py-8 w-screen`
    }>
        <Drawer />
        <DarkMode />
        <Logo />
        <LoginBtn />
    </motion.div>
    {/* Navbar Section */}
    </nav>
    </>
  )
}

export default Navbar