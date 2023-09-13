import React from 'react'
import Promo from './Promo'
import Drawer from './Drawer'
import Logo from './Logo'
import LoginBtn from './LoginBtn'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
const Navbar = () => {
  return (
    <>
    <nav>
    {/* Promo section  */}
    <Promo 
      classContainer={"w-screen bg-[#110843] py-5 flex flex-col items-center gap-5 sm:flex-row sm:px-10"} 
      children={
      <>
      {/* Description of Promo */}
      <div className='flex flex-col w-[90%] justify-center gap-3 items-center sm:flex-row sm:w-[50%] sm:justify-start'>
      <img src="todaysSale.svg" alt="" className='w-32'/>
      <article>
      <p className='text-center text-white text-lg font-semibold'>
      Kelas Premium Rp 99.000 akses selamanya.
      <br />
      Gunakan kode promo KARIRBARU ketika checkout🤩
      </p>
      </article>
      </div>

      {/* Opportunity by Promo */}
      <div className='flex flex-col items-center gap-3 justify-center sm:flex-row sm:w-[50%] sm:justify-end'>
      <article className='flex flex-row gap-2 text-white items-center'>
          <img src="checkBlue.svg" alt="" className='w-6'/>
          <h1 className='font-semibold'>Kesempatan magang & kerja</h1>
      </article>
      <Link to={'/promo'} className='text-white transition-all duration-200 bg-[#3d58ff] px-7 py-3.5 rounded-full font-bold hover:bg-[#3043b9]'>
          Ambil Promo
      </Link>
      </div>
      </>
    }
    />

    {/* Navbar Section */}
    <motion.div animate={{paddingRight:35, paddingLeft:35}} id="navbar" className='grid grid-cols-3 place-content-between place-items-center gap-40 py-5 w-screen'>
      <Drawer />
      <Logo />
      <LoginBtn />
    </motion.div>
    </nav>
    </>
  )
}

export default Navbar