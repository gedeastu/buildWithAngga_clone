import React from 'react'
import useConditionReducer from '../hook/conditionHooks'
const Drawer = ({className}) => {
  const {isOn, toggleClick} = useConditionReducer();
  console.log(isOn)

  {isOn ? (document.body.style.overflow = 'hidden'):(document.body.style.overflow = 'auto')}
  return (
    <>
    <button onClick={toggleClick} className='bg-[#e5e9f2] h-max py-2 px-3 rounded-xl'>
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
    <div className='absolute left-40 top-96'>
    {isOn ? (
        <>
        <div className='bg-white w-screen h-[30rem] fixed z-50 shadow-xl bottom-0 left-0'>
            <button onClick={toggleClick}>close</button>
        </div>
        <div className='bg-black/50 w-screen h-screen fixed z-40 shadow-xl bottom-0 left-0'></div>
        </>
    ):(
        <h1>close</h1>
    )}
    </div>
    </>
  )
}

export default Drawer