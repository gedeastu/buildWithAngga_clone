import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import useConditionReducer from '../hook/conditionHooks'
const LoginBtn = () => {
  return (
    <>
    <motion.div>
    <Link to={`/signIn`} className='bg-[#e5e9f2] px-5 py-1.5 font-bold rounded-full'>Masuk</Link>
    </motion.div>
    </>
  )
}

export default LoginBtn