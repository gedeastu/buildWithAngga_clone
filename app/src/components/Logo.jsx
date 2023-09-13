import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const Logo = () => {
  return (
    <>
    <motion.div animate={{scale: 1.3}} className='w-[3rem]'>
    <Link to={'/'} className=''>
    <img src="logoBwa.svg" alt="" />
    </Link>
    </motion.div>
    </>
  )
}

export default Logo