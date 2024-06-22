import React, { useEffect, useState } from 'react'
import cross_icon from "../../assests/cross_icon.png"

const ListProduct = () => {

const [allproducts, setAllProducts]= useState([]);

const fetchInfo = async () =>{
  await fetch('https://findyourkick.onrender.com/allproducts')
  .then((res)=>res.json())
  .then((data)=>{setAllProducts(data)});
}

useEffect(()=>{
  fetchInfo();
},[])

const removeProduct = async (id) =>{
    await fetch('https://findyourkick.onrender.com/removeproduct',{
      method:"POST",
      headers:{
        Accept:'application/json',
        'Content-Type' :'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
}

  return (
    <div className='flex flex-col items-center w-full h-[740px] py-2 px-12 m-7 rounded-md bg-white'>
      <h1>All Products List</h1>
      <div className='grid grid-cols-custom-lay w-full py-5 px-0 text-zinc-700 text-sm font-semibold '>
       <p>Products</p> 
       <p>Title</p> 
       <p>Old Price</p> 
       <p>New Price</p> 
       <p>Category</p> 
       <p>Remove</p> 
      </div>
      <div className='overflow-y-auto'>
        <hr/>
        {allproducts.map((product,index)=>{
          return <> <div key={index} className='grid grid-cols-custom-lay w-full py-5 px-0 text-zinc-700 text-sm font-medium items-center '>
              <img className='h-[80px]' src={product.image} alt='' />
              <p>{product.name}</p>
              <p>{product.old_price}</p>
              <p>{product.new_price}</p>
              <p>{product.category}</p>
              <img onClick={() =>{removeProduct(product.id)}} className='cursor-pointer m-auto' src={cross_icon} alt='' />
          </div>
          <hr /></>
        })}
      </div>
    </div>
  )
}

export default ListProduct