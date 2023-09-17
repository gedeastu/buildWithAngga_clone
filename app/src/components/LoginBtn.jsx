import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import useConditionReducer from '../hook/conditionHooks'
const LoginBtn = () => {
  const {isClick, toggleClick} = useConditionReducer();
  return (
    <>
    <motion.div>
    <Link onClick={toggleClick} to={`/signIn`} className='bg-[#e5e9f2] w-44 h-20 font-bold rounded-full'>
    <h1>{isClick ? ('Daftar'):('Masuk')}</h1>
    </Link>
    </motion.div>
    </>
  )
}

export default LoginBtn