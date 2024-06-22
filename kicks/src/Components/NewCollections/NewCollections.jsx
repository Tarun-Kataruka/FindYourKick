import React from 'react'
import Items from '../Items/Items'
import { useEffect,useState } from 'react';

const NewCollections = () => {

  const[new_collection, setNew_collection] = useState([]);

  useEffect(()=>{
    fetch('https://findyourkick.onrender.com/newcollection')
    .then((response)=>response.json())
    .then((data)=>setNew_collection(data));
  },[])

  return (
    <div className='flex flex-col items-center gap-2 mb-24'>
        <h1 className='text-slate-800 text-5xl font-semibold'>NEW COLLECTIONS</h1>
        <hr className='w-48 h-2 rounded-xl bg-slate-700' />
        <div className='grid grid-cols-4 mt-12 gap-7'>
        {new_collection.map((item,i)=> {
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
        </div>
    </div>
  )
}

export default NewCollections