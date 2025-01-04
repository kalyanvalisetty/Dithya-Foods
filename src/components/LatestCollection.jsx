import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';


const LatestCollection = () => {
  const {products, currency} = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(()=>{
    setLatestProducts(products.slice(0,10));
  },[])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos pariatur necessitatibus expedita reiciendis distinctio in molestias rem sequi animi fugit.
            </p>
        </div>
        {/**Rendering Products */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {latestProducts.map((item)=>
            <ProductItem key={item?._id} productData={item}/>
            )}
        </div>
    </div>
  )
}

export default LatestCollection