import React from 'react'
const Drawer = ({className}) => {
  return (
    <>
    <button className='bg-[#e5e9f2] h-max py-2 px-3 rounded-xl'>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    id="bars"
    className="transition-all fill-black duration-500 focus:rotate-180"
    height="1.5em"
    width="1.7rem"
    viewBox="0 0 448 512"
    >
    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
    </svg>
    </button>
    </>
  )
}

export default Drawer