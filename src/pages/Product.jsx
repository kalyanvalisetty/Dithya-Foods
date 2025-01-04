import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Related from "../components/Related";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id == productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };
 
  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  useEffect(()=>{
    if(size=='250'){
      setPrice(productData.price/4)
    }
    else if(size=='500'){
      setPrice(productData.price/2)
    }
    else{
      setPrice(productData.price)
    }
  },[productData,size])

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/** Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/**Product Images */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                src={item}
                key={index}
                alt="image"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="image" />
          </div>
        </div>

        {/**Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-3">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{price}</p>
          <p className="mt-5 text-gray-500 md:m-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">
                {
                  productData.sizes.map((item, index)=>(
                    <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item===size? 'border-orange-500':''}`} key={index}>{item}</button>
                  ))
                }
              </div>
          </div>
          <button onClick={()=>addToCart(productData._id, size, price)} className="bg-primary text-white px-8 py-3 text-sm hover:bg-green-500">ADD TO CART</button>
          <hr className="mt-8 sm:w-4/5"/>
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original product.</p>
              <p>Cash on delivery is available for this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      <div className="mt-20">
           <div className="flex">
              <b className="border px-5 py-3 text-sm">Description</b>
              <p className="border px-5 py-3 text-sm">Reviews (122)</p>
           </div>
           <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ea modi nesciunt incidunt, tempora rem quibusdam veritatis illo mollitia dolorum.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quasi nisi autem, pariatur beatae ducimus nobis possimus recusandae veniam, debitis similique sunt. Molestiae, inventore exercitationem?</p>
           </div>
        </div>
        {/**Related Products */}
        <Related category={productData.category} 
        subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="w-full flex flex-col items-center justify-center p-10">
      <p className="text-3xl text-red-500">Sorry!!</p>
      <p className="text-3xl text-red-500">Product Not Found</p>
      <img className="w-80" src={assets.error_img} alt="" />
    </div>
  );
};

export default Product;
