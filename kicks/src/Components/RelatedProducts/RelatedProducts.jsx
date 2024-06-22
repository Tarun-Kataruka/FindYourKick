import React,{useContext,useEffect} from 'react'
import { ShopContext } from '../../Context/ShopContext'
import Items from '../Items/Items'

const RelatedProducts = ({category}) => {
  const {category_products, fetchProductByCategory} = useContext(ShopContext);
  useEffect(() =>{
    fetchProductByCategory(category);
  },[category]);
  return (
    <div className='flex flex-col items-center gap-2 h-90vh'>
        <h1 className='text-zinc-900 text-5xl font-semibold'>Related Products</h1>
        <hr className='w-52 h-2 rounded-xl bg-gray-900'></hr>
        <div className='mt-12 flex gap-7'>
            {category_products.map((item,i) => {
                    return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default RelatedProducts