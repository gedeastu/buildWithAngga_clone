import React, { useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {motion} from 'framer-motion'
// import useConditionReducer from '../hook/conditionHooks'
const LoginBtn = () => {
  const location = useLocation();
//   const {isClick, toggleClick} = useConditionReducer();
//   useEffect(() => {
//     localStorage.setItem("isClick",isClick)
//   },[isClick])
  return (
    <>
    {location.pathname === '/signUp' ? 
    (
    <motion.div className='cursor-pointer hidden'>
    <Link to={location.pathname !== '/' ? ('/signUp'):('/signIn')} className='bg-[#032980] w-60 h-20 font-bold rounded-full'>
    <h1 className=''>{location.pathname !== '/' ? ('Daftar'):('Masuk')}</h1>
    </Link>
    </motion.div>
    ):
    (
    <motion.div className='cursor-pointer'>
    <Link to={location.pathname !== '/' ? ('/signUp'):('/signIn')} className='bg-[#032980] w-60 h-20 font-bold rounded-full'>
    <h1 className=''>{location.pathname !== '/' ? ('Daftar'):('Masuk')}</h1>
    </Link>
    </motion.div>
    )
    }
    </>
  )
}

export default LoginBtn