import React, { useContext } from 'react'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const{addToCart} = useContext(ShopContext);
    const renderSizes = () =>{
        if(product.category === 'hoodies'){
            return(
                <div className='flex my-8 mx-0 gap-5'>
                    <div className='py-4 px-6 bg-slate-100 rounded-sm border border-solid border-slate-200 cursor-pointer'>S</div>
                    <div className='py-4 px-6 bg-slate-100 rounded-sm border border-solid border-slate-200 cursor-pointer'>M</div>
                    <div className='py-4 px-6 bg-slate-100 rounded-sm border border-solid border-slate-200 cursor-pointer'>L</div>
                    <div className='py-4 px-6 bg-slate-100 rounded-sm border border-solid border-slate-200 cursor-pointer'>XL</div>
                </div>
            );
        }
        else if( product. category === 'sneakers'){
            return (
                <div className='flex my-8 mx-0 gap-5'>
                    <div className='py-4 px-6 bg-slate-100 rounded-sm border border-solid border-slate-200 cursor-pointer'>7</div>
                    <div className='py-4 px-6 bg-slate-100 rounded-sm border border-solid border-slate-200 cursor-pointer'>8</div>
                    <div className='py-4 px-6 bg-slate-100 rounded-sm border border-solid border-slate-200 cursor-pointer'>9</div>
                    <div className='py-4 px-6 bg-slate-100 rounded-sm border border-solid border-slate-200 cursor-pointer'>10</div>
                </div>
            );
        }
        else{
            return null;
        }
    };
  return (
    <div className='flex my-0 mx-40'>
        <div className='flex gap-4'>
            <div className='flex flex-col gap-4'>
                <img className='h-20' src={product.image} alt='' />
                <img className='h-20' src={product.image} alt='' />
                <img className='h-20' src={product.image} alt='' />
                <img className='h-20' src={product.image} alt='' />
            </div>
            <div className="displaying">
                <img className='w-700px h-500px' src={product.image} alt='' />
            </div>
        </div>
        <div className='my-0 mx-16 flex flex-col'>
            <h1 className='text-zinc-800 text-4xl font-bold'>{product.name}</h1>
            <div className='flex items-center mt-3 gap-1 text-slate-900 text-base '>
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_dull_icon} alt='' />
                <p>(122)</p>
            </div>
            <div className='flex my-10 mx-0 gap-7 text-2xl font-bold'>
                <div className='text-gray-500 line-through'>{product.old_price}</div>
                <div className='text-red-700'>{product.new_price}</div>
            </div>
            <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, assumenda dolore necessitatibus vel ex recusandae. Modi quas fugiat voluptas eveniet facilis eaque, recusandae praesentium nulla rerum obcaecati, atque culpa quam!
            </div>
             <div>
                {/* <h1 className='mt-14 text-gray-500 font-semibold'>Select size</h1>
                <div className='flex my-8 mx-0 gap-5'>
                    <div className='py-4 px-6 bg-slate-100 rounded-sm border border-solid border-slate-200 cursor-pointer'>S</div>
                    <div className='py-4 px-6 bg-slate-100 rounded-sm border border-solid border-slate-200 cursor-pointer'>M</div>
                    <div className='py-4 px-6 bg-slate-100 rounded-sm border border-solid border-slate-200 cursor-pointer'>L</div>
                    <div className='py-4 px-6 bg-slate-100 rounded-sm border border-solid border-slate-200 cursor-pointer'>XL</div>
                </div> */} 
                {product.category !== 'bags' && (
                    <div>
                        <h1 className='mt-14 text-gray-500 font-semibold'> Select Size</h1>
                        {renderSizes()}
                    </div>
                )}
            </div>
            <button onClick={() => {addToCart(product.id)}} className='py-5 px-10 w-48 text-base font-semibold text-white bg-red-600 mb-10 border-none outline-none cursor-pointer'>Add to cart</button>
            <p className='mt-2'><span className='font-semibold'>Category: </span>{product.category}</p>
            <p className='mt-2' ><span className='font-semibold'>Tags : </span>Modern, Latest</p>
        </div>
        </div>
    
  )
}

export default ProductDisplay