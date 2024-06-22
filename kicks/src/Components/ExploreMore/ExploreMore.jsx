import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Items from '../Items/Items';

const ExploreMore = () => {
  const { category } = useParams();
  const { category_products, fetchProductByCategory } = useContext(ShopContext);

  useEffect(() => {
    console.log(`Fetching products for category: ${category}`);
    fetchProductByCategory(category); // Fetch products by category when the component mounts
  }, []);

  

  return (
    <div className='my-5 mx-6 grid grid-cols-4 gap-y-24'>
      {category_products.map((item, i) => (
        <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
      ))}
    </div>
  );
}

export default ExploreMore;