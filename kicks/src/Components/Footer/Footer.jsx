import React from 'react'
import footer_logo from "../Assets/logo_big.png"
import instagram_icon from "../Assets/instagram_icon.png"
import pintester_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-12'>
        <div className='flex items-center gap-5'>
            <img src={footer_logo} alt='' />
            <p className='text-zinc-800 text-5xl font-bold'>Find Your Kick</p>
            </div>
                <ul className='flex list-none gap-12 text-zinc-800 text-xl'>
                    <li className='cursor-pointer'>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className='flex gap-5'>
                    <div className='p-2 pb-1 bg-slate-100 border-solid border border-slate-300 '>
                        <img src={instagram_icon} alt=''/>
                    </div>
                    <div className='p-2 pb-1 bg-slate-100 border-solid border border-slate-300 '>
                        <img src={pintester_icon} alt=''/>
                    </div>
                    <div className='p-2 pb-1 bg-slate-100 border-solid border border-slate-300 '>
                        <img src={whatsapp_icon} alt=''/>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-7 w-full mb-7 text-zinc-800 text-xl'>
                    <hr className='w-3/4 border-none rounded-xl h-1 bg-slate-50' />
                    <p>Copyright @ 2024 - All Right Reserved</p>
                </div>
            </div>
  )
}

export default Footer