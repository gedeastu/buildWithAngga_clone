import React from 'react'
import { motion } from 'framer-motion';
import useConditionReducer from '../hook/conditionHooks'
import { useLoaderData,Link } from 'react-router-dom';

export const DataDrawerMobile = async () => {
    const res = await fetch(import.meta.env.VITE_APP_DATA_DRAWER_MOBILE)
    // console.log(res);
    return res.json()
}
const Drawer = ({className}) => {
  const dataList = useLoaderData()
  // console.log(dataList)
  const {isOn, toggleClick} = useConditionReducer();
//   console.log(isOn)
  {isOn ? (document.body.style.overflow = 'hidden'):(document.body.style.overflow = 'auto')}
  return (
    <>
    <motion.button onClick={toggleClick} className='bg-[#e5e9f2] h-max py-2 px-3 rounded-xl'>
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
    </motion.button>
    <div className='absolute left-40 top-96'>
    {isOn ? (
        <>
        <div className='bg-white transition-all overflow-auto duration-500 w-screen opacity-100 h-[30rem] fixed z-50 shadow-xl bottom-0 left-0 sm:h-0 sm:-bottom-[99rem] sm:opacity-0 sm:-z-[60]'>
            <button onClick={toggleClick}>close</button>
            {dataList.map((data)=>(
                <div key={data.id} className={{}}>
                    {data.titleDaily && (
                    <div id='Daily'>
                        <h1>
                        {data.titleDaily}
                        </h1>
                        {data.dataDaily.map((item)=>(
                            <div key={item.id}>
                            <Link to={item.url}>
                                <h1>{item.destination}</h1>
                                <img src={item.icon}/>
                            </Link> 
                            </div>
                        ))}
                    </div>
                    )}

                    {data.titleResources && (
                    <div id='Daily'>
                        <h1>
                        {data.titleResources}
                        </h1>
                        <div>
                        {data.dataResources.map((item)=>(
                            <div key={item.id}>
                            <Link to={item.url}>
                                <h1>{item.destination}</h1>
                                <img src={item.icon}/>
                            </Link> 
                            </div>
                        ))}
                        </div>
                    </div>
                    )}

                    {data.titleForCorporate && (
                    <div id='Daily'>
                        <h1>
                        {data.titleForCorporate}
                        </h1>
                        <div>
                        {data.dataForCorporate.map((item)=>(
                            <div key={item.id}>
                            <Link to={item.url}>
                                <h1>{item.destination}</h1>
                                <img src={item.icon}/>
                            </Link> 
                            </div>
                        ))}
                        </div>
                    </div>
                    )}
                </div>
            ))}
        </div>
        <div className='bg-black/50 transition-all w-screen h-screen opacity-100 fixed z-40 shadow-xl bottom-0 left-0 sm-z-[60] sm:opacity-0'></div>
        </>
    ):(
        <>
        <div className='bg-white transition-all duration-500 opacity-0 w-screen h-0 fixed z-50 shadow-xl -bottom-[99rem] left-0'>
            <button onClick={toggleClick}>close</button>
        </div>
        <div className='bg-black/50 transition-all duration-500 w-screen h-screen fixed -z-[60] opacity-0 shadow-xl bottom-0 left-0'></div>
        </>
        // <<h1>close</h1>
    )}
    </div>
    </>
  )
}

export default Drawer