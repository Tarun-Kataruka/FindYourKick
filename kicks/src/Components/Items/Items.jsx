import React from 'react'
import { Link } from 'react-router-dom';

const Items = (props) => {
  return (
    <div className='w-96'>
        <Link to={`/product/${props.id}`}><img className='w-[350px] h-96' onClick={window.scrollTo(0,0)} src={props.image} alt='' /></Link>
        <p className='my-2 mx-0' >{props.name}</p>
        <div className='flex gap-5 hover:scale-105 duration-500'>
            <div className='text-slate-600 text-lg font-semibold'>
            ₹{props.new_price}
            </div>
            <div className='text-slate-400 text-lg font-normal line-through'>
            ₹{props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Items