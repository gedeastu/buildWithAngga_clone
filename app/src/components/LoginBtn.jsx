import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import { useStateGlobal } from '../hook/globalState'
// import useConditionReducer from '../hook/conditionHooks'
const LoginBtn = () => {
//   const {isClick, toggleClick} = useConditionReducer();
//   useEffect(() => {
//     localStorage.setItem("isClick",isClick)
//   },[isClick])

  return (
    <>
    <motion.div>
    <Link to={'/signIn'} className='bg-[#032980] w-60 h-20 font-bold rounded-full'>
    <h1 className=''>Masuk</h1>
    </Link>
    </motion.div>
    </>
  )
}

export default LoginBtn