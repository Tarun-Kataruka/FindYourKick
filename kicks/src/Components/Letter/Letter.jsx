import React from 'react'

const Letter = () => {
  return (
    <div className='w-2/3 h-40vh flex flex-col items-center justify-center m-auto px-0 py-36 mb-36 bg-custom-gradient gap-7'>
        <h1 className='text-slate-400 text-6xl font-semibold'>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
        <p className='text-slate-400 text-xl'>Subscribe to our site to stay updated</p>
        <div className='flex items-center justify-between bg-white h-20 w-730px rounded-3xl border-solid border border-slate-500'>
            <input className='w-500px ml-8 border-none outline-none text-slate-600 text-base' type='email' placeholder='your email-id' />
            <button className='w-52 h-16 rounded-3xl bg-black text-white text-base cursor-pointer'>Subscribe</button>
        </div>
    </div>
  )
}

export default Letter