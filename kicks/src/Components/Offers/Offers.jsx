import React from 'react'
import exclusive_image from "../Assets/exclusive_image.png"

const Offers = () => {
  return (
    <div className='w-3/4 h-80vh  flex m-auto px-0 py-36 mb-36 bg-custom-gradient mt-24'>
        <div className='flex-1 flex flex-col justify-center items-center'>
            <h1 className='text-slate-700 text-7xl font-semibold'>Exclusive</h1>
            <h1 className='text-slate-700 text-7xl font-semibold'>Offers for You</h1>
            <p className='text-2xl font-semibold'>ONLY ON BEST SELLER PRODUCTS</p>
            <button className='w-72 h-16 rounded-3xl bg-red-700 border-none text-white text-xl font-medium mt-7 cursor-pointer'>Check Now</button>
        </div>   
        <div className='flex-1 flex items-center justify-end pt-8'>
            <img src={exclusive_image} alt='' />
        </div>
    </div>
  )
}

export default Offers