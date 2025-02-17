import React from 'react'
import brand from '@/love/dFunction/gBrand';


const Loader = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen body-font bg-[#F0EDCC] dark:bg-[#02343F] text-[#02343F] dark:text-[#F0EDCC]">          
      <img src={brand().logo} alt={brand().name} className='w-1/12' />
      {text || "Loading..."}
    </div>
  )
}

export default Loader