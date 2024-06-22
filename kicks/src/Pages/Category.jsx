import React, { useContext } from 'react'
import {useNavigate} from "react-router-dom"
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
import all_product from '../Components/Assets/all_product';
import Items from '../Components/Items/Items';

const Category = (props) => {
  const {all_product} = useContext(ShopContext);
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate(`/category/${props.category}`);
  }

  const itemsToDisplay = all_product.filter(item => item.category === props.category).slice(0,8);

  return (
    <div className=''>
      <img className='block my-7 mx-auto w-3/4' src={props.banner} alt='' />
      <div className='flex my-0 mx-40 justify-between items-center'>
        <p>
          <span className='font-semibold'>Showing 1-8</span> out of 36 products
        </p>
        <div className='py-2 px-5 border border-solid border-slate-500 rounded-full'>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className='my-5 mx-6 grid grid-cols-4 gap-y-24'>
        {itemsToDisplay.map((item,i) => {
            if(props.category === item.category){
              return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            }
            else{
              return null;
            }
        })}
      </div>
      <div onClick={handleExploreMore} className='flex justify-center items-center my-36 mx-auto w-60 h-16 rounded-3xl bg-slate-300 text-slate-500 text-lg font-medium '>
        Explore More
      </div>
    </div>
  )
}

export default Category