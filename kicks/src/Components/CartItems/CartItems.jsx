import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../Assets/cart_cross_icon.png"
import { useNavigate } from 'react-router-dom';
const CartItems = () => {
    const {getTotalCartAmt,all_product,cartItems,removeFromCart} = useContext(ShopContext)
    const navigate = useNavigate();

  return (
    <div className='my-24 mx-40'>
        <div className='grid grid-cols-custom-layout items-center gap-20 py-5 px-0 text-zinc-600 font-extrabold text-lg'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className='h-1 bg-slate-100 border-0' />
        {all_product.map((e) => {
            if(cartItems[e.id] > 0){
                return  <div>
                <div className='grid grid-cols-custom-layout items-center gap-20 py-5 px-0 text-zinc-600 text-base font-medium' >
                    <img className='h-16' src={e.image} alt='' />
                    <p>{e.name}</p>
                    <p>{e.new_price}</p>
                    <button className='w-16 h-12 border-2 border-solid border-slate-300 bg-white'>{cartItems[e.id]}</button>
                    <p>{e.new_price*cartItems[e.id]}</p>
                    <img className='w-4 my-0 cursor-pointer mx-10' src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt='' />
                </div>
                <hr />
            </div>  
            }
            return null;
        })}
        <div className='flex my-24 mx-0'>
            <div className='flex-1 flex flex-col mr-48 gap-10'>
                <h1>Cart Total</h1>
                <div>
                    <div className='flex justify-between py-4 px-0'>
                        <p>Subtotal</p>
                        <p>{getTotalCartAmt()}</p>
                    </div>
                    <hr />
                    <div className='flex justify-between py-4 px-0'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className='flex justify-between py-4 px-0'>
                        <h3>Total</h3>
                        <h3>{getTotalCartAmt()}</h3>
                    </div>
                </div>
                <button onClick={() => navigate('/billing')} className='w-64 h-14 outline-none border-none bg-red-700 text-white text-base font-semibold cursor-pointer'>Proceed to Checkout</button>
            </div>
            <div className='flex text-base font-medium'>
                <p className='flex text-zinc-800'>Enter promo code</p>
                <div className='w-80 mt-4 pl-5 h-14 bg-gray-500'>
                    <input className='border-none outline-none bg-transparent text-base w-80 h-12' type='text' placeholder='promocode' />
                    <button className='w-44 h-14 text-base bg-black text-white cursor-pointer'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems