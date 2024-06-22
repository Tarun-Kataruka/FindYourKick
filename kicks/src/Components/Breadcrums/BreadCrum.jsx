import React from 'react'
import arrow_icon from "../Assets/breadcrum_arrow.png"

const BreadCrum = (props) => {
    const{product} = props;
  return (
    <div className='flex items-center gap-2 text-gray-600 text-base font-semibold my-14 mx-40 capitalize'>
        HOME <img src={arrow_icon} alt='' /> SHOP <img src={arrow_icon} alt='' />{product.category} <img src={arrow_icon} alt='' /> {product.name}
    </div>
  )
}

export default BreadCrum