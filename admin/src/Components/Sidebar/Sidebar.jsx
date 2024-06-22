import React from 'react'
import {Link} from "react-router-dom"
import add_product_icon from "../../assests/Product_Cart.svg"
import list_product_icon from "../../assests/Product_list_icon.svg"

const Sidebar = () => {
  return (
    <div className='flex flex-col pt-7 gap-5 w-full  max-w-64 h-100vh bg-red-600'>
        <Link to={'/addproduct'} >
            <div className='flex items-center justify-center my-0 mx-5 py-1 px-3 rounded-md bg-slate-100 gap-5 cursor-pointer'>
                <img src={add_product_icon} alt='' />
                <p>Add Product</p>
            </div>
        </Link>
        <Link to={'/listproduct'} >
            <div className='flex items-center justify-center my-0 mx-5 py-1 px-3 rounded-md bg-slate-100 gap-5 cursor-pointer'>
                <img src={list_product_icon} alt='' />
                <p>Product List</p>
            </div>
        </Link>

    </div>
  )
}

export default Sidebar