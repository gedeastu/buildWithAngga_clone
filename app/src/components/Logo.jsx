import React from 'react'
import { Link } from 'react-router-dom'
const Logo = () => {
  return (
    <>
    <div className='w-[4rem]'>
    <Link to={'/'} className=''>
    <img src="logoBwa.svg" alt="" />
    </Link>
    </div>
    </>
  )
}

export default Logo