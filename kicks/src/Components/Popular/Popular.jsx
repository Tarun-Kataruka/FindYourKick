import React from 'react'

import Items from '../Items/Items'
import { useState } from 'react'
import { useEffect } from 'react';

const Popular = () => {

  const[popular, setPopular] = useState([]);
  useEffect(()=>{
    fetch('https://findyourkick.onrender.com/popularinsneakers')
    .then((response)=>response.json())
    .then((data)=>setPopular(data));
  },[])


  return (
    <div className='flex flex-col items-center gap-2 h-972px mt-24 '>
        <h1 className='text-slate-800 text-5xl font-semibold'>Popular in Sneakers</h1>
        <hr className='w-48 h-2 rounded-xl bg-slate-700' />
        <div className='flex mt-12 gap-7'>
            {popular.map((item,i) => {
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popular