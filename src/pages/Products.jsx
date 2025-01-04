import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";


const Products = () => {

  const {products, search, showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory]= useState([]);
  const [subCategory, setSubCategory]= useState([]);
  const [sortType, setSortType] = useState([]);

  const toggleCategory = (e)=>{
    if(category.includes(e.target.value)){
        setCategory(prev=>prev.filter(item=> item!== e.target.value));
    }
    else{
      setCategory(prev=>[...prev, e.target.value])
    }
  }

  const togglesubCategory = (e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item=> item!== e.target.value));
    }
    else{
      setSubCategory(prev=>[...prev, e.target.value])
    }
  }

  const applyFilter = ()=>{
    let productsCopy = products.slice();
    if(showSearch && search){
      productsCopy = productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if(category.length>0){
      productsCopy = productsCopy.filter(item=>category.includes(item.category));
    }
    if(subCategory.length>0){
      productsCopy = productsCopy.filter(item=>subCategory.includes(item.subCategory));
    }
    setFilteredProducts(productsCopy);
  }

  const sortProduct = () => {
    let fpCopy = filteredProducts.slice();
    switch(sortType){
        case 'low-high' :
        setFilteredProducts(fpCopy.sort((a,b) =>(a.price - b.price)));
        break;

        case 'high-low' :
        setFilteredProducts(fpCopy.sort((a,b)=>(b.price - a.price)))
        break;

        default:
        applyFilter();
        break;
    }
 }


  useEffect(()=>setFilteredProducts(products),[])
  useEffect(()=>applyFilter(),[category, subCategory, search, showSearch]);
  useEffect(()=>sortProduct(),[sortType]);

  return (
    <div className='flex flex-col md:flex-row gap-1 sm:gap-10 pt-10 border-t'>
    {/**Filter Options */}
    <div className="min-w-52">
      <p onClick={()=>setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">
        FILTERS
        <img className={`h-3 sm:hidden ${showFilter?'rotate-90':''}`} src={assets.dropdown_icon} alt="dropdown"/>
      </p>
      {/**Category Filter */}
      <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?'':'hidden'} sm:block`}>
        <p className="mb-3 text-sm font-medium">CATEGORIES</p>
        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
          <p className="flex gap-2">
            <input className="w-3" type="checkbox" value={'veg'} onChange={toggleCategory}/>veg
          </p>
          <p className="flex gap-2">
            <input className="w-3" type="checkbox" value={'non-veg'} onChange={toggleCategory}/>non-veg
          </p>
        </div>
      </div>
       {/**Sub-Category Filters */}
       <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter?'':'hidden'} sm:block`}>
        <p className="mb-3 text-sm font-medium">TYPE</p>
        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
          <p className="flex gap-2">
            <input className="w-3" type="checkbox" value={'pickles'} onChange={togglesubCategory}/>pickles
          </p>
          <p className="flex gap-2">
            <input className="w-3" type="checkbox" value={'papads'} onChange={togglesubCategory}/>papads
          </p>
          <p className="flex gap-2">
            <input className="w-3" type="checkbox" value={'powders'} onChange={togglesubCategory}/>powders
          </p>
          <p className="flex gap-2">
            <input className="w-3" type="checkbox" value={'snacks'} onChange={togglesubCategory}/>snacks
          </p>
          <p className="flex gap-2">
            <input className="w-3" type="checkbox" value={'sweets'} onChange={togglesubCategory}/>sweets
          </p>
          <p className="flex gap-2">
            <input className="w-3" type="checkbox" value={'Dry items'} onChange={togglesubCategory}/>Dry items
          </p>
        </div>
      </div>
    </div>

    {/**Right Side*/}
    <div className="flex-1">
       <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={'ALL'} text2={'PRODUCTS'}/>
            {/**Product Sorting */}
            <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
                <option value="relevent">Sort by: Relavent</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
            </select>
            {/**Product Mapping */}
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 justify-items-center">
            {filteredProducts.map((item)=>
            <ProductItem key={item?._id} productData={item}/>
            )}
        </div>
    </div>
    </div>
  )
}

export default Products