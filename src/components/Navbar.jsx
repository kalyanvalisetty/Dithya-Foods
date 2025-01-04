import { NavLink, Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";


const Navbar = () => {
  
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false)
  const {setShowSearch, getCartCount} = useContext(ShopContext);

  return (
    <div className="flex items-end justify-between font-medium border-b-2 pb-4 border-b-slate-400">
      <Link to="/"><img className="w-16 mt-1" src={assets.logo} alt="logo" /></Link>
      <ul className="hidden md:flex gap-6 lg:gap-8 text-base text-gray-500">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>
            <i className="bi bi-house-fill mr-2"></i>HOME
          </p>
          <hr className="w-2/4 border-none h-0.5 bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/products" className="flex flex-col items-center gap-1">
          <p>
            <i className="bi bi-bag-fill mr-2"></i>PRODUCTS
          </p>
          <hr className="w-2/4 border-none h-0.5 bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>
            <i className="bi bi-file-person mr-2"></i>ABOUT
          </p>
          <hr className="w-2/4 border-none h-0.5 bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>
            <i className="bi bi-telephone-fill mr-2"></i>CONTACT
          </p>
          <hr className="w-2/4 border-none h-0.5 bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex flex-items gap-6">
        <img onClick={()=>{setShowSearch(true); navigate('/products')}}
          className="w-7 cursor-pointer"
          src={assets.search_icon}
          alt="search"
        />
        <div className="group relative">
          <img
            className="w-7 cursor-pointer"
            src={assets.profile_icon}
            alt="search"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-6" />
          <p className="absolute right-[-5px] top-[-5px] w-5 text-center leading-5 bg-red-600 text-white aspect-square rounded-full text-[14px]">
           0
          </p>
        </Link>
        <img onClick={()=>setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer md:hidden"
        />
      </div>
      {/**Side Bar menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'}`}>
        <div className="flex flex-col text-gray-600">
            <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3">
                <img className="h-4 rotate-180" src={assets.dropdown_icon} alt=""/>
                <p className="text-gray-400">BACK</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className="py-3 pl-6 border" to="/"><p>HOME</p></NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-3 pl-6 border" to="/products"><p>COLLECTION</p></NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-3 pl-6 border" to="/about"><p>ABOUT</p></NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-3 pl-6 border" to="/contact"><p>CONTACT</p></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
