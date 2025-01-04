import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {useNavigate } from 'react-router-dom';

const ProductItem = (props) => {
  const navigate = useNavigate();
  const {productData} = props;
  const {_id, image, name, price, eng_name} = productData;
  const {currency} = useContext(ShopContext);
  return (
    <div className='text-gray-700 cursor-pointer' onClick={()=>{navigate(`/product/${_id}`);scrollTo(0,0)}}>
        <div className="overflow-hidden h-60 flex items-center justify-center relative shine-effect">
            <img className='hover:scale-110 transition ease-in-out min-h-[100%]' src={image[0]} alt="product-img"/>
        </div>
        <p className='pt-3 pb-1 text-base font-semibold'>{name}</p>
        <p className='pb-1 text-sm'>{eng_name}</p>
        <p className='text-sm font-medium'>{currency} {price}</p>
    </div>
  )
}

export default ProductItem