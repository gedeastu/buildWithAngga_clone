import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Explore() {
  return (
   <>
   <div className='bg-[#110843] w-screen transition-all h-[15.8rem] flex flex-col justify-between py-5 items-center md:flex-row md:h-[6.5rem] md:px-9'>
    <div className='flex flex-col items-center gap-1 md:flex-row md:gap-5'>
    <Image src={`todays_sale.svg`} alt='today_sale' width={100} height={100} className='md:w-28'/>
    <h1 className='text-center text-white leading-normal font-bold text-md md:text-left'>Kelas Premium Rp 78.000 akses selamanya.
        <br />
        Gunakan kode promo MERDEKA ketika checkout🤩
    </h1>
    </div>
    <div className='flex flex-col items-center gap-1 md:flex-row md:gap-7'>
    <article className='flex flex-row items-center gap-2'>
    <Image src={`check.svg`} alt='check' width={20} height={20} className='w-6 h-10'></Image>
    <h2 className='text-white font-medium md:font-semibold md:text-lg'>Kesempatan Magang & Kerja</h2>
    </article>
    <Link href={`../catalog/`} className='bg-[#2347FA] text-white font-semibold px-5 py-3 rounded-full text-sm transition-all duration-100 focus:border-4 focus:border-[#2546A1] focus:bg-[#085ED7] md:font-bold md:scale-110 md:px-7 md:py-3.5 md:text-md'>Explore Courses</Link>
    </div>
   </div>
   </>
  )
}
