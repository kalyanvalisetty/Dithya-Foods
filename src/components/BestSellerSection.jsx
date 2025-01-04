import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import { assets } from '../assets/assets';


const BestSellerSection = () => {
  const {products, currency} = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(()=>{
    const bestproducts = products.filter((item)=>item?.bestseller);
    setBestSellers(bestproducts.slice(0,5));
  },[])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'BEST'} text2={'SELLERS'} emoji={assets.savouremoji}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui numquam omnis maiores tempora, aliquid neque nostrum asperiores nemo eius laborum optio officiis, et dolores ipsum maxime quos sint, aut veritatis?
            </p>
        </div>
        
        {/**Rendering Products */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {bestSellers.map((item)=>
            <ProductItem key={item?._id} productData={item}/>
            )}
        </div>
    </div>
  )
}

export default BestSellerSection