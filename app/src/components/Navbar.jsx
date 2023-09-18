import React from 'react'
// import Promo from './Promo'
import Drawer from './Drawer'
import Logo from './Logo'
import { useLocation } from 'react-router-dom'
import LoginBtn from './LoginBtn'
import {motion} from 'framer-motion'
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
    `grid grid-cols-3 place-content-between place-items-center gap-40 py-7 w-screen`
    }>
        <Drawer />
        <Logo />
        <LoginBtn />
    </motion.div>
    {/* Navbar Section */}
    </nav>
    </>
  )
}

export default Navbar