
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Orders from "./pages/Orders"
import Placeorder from "./pages/Placeorder"
import Product from "./pages/Product"
import Navbar from "./components/Navbar"
import SearchBar from "./components/searchBar"
import Footer from "./components/Footer"
import Products from "./pages/Products"
import Error from "./pages/Error"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
       <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[10vw]">
        <ToastContainer/>
        <Navbar/>
        <SearchBar/>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/orders" element={<Orders/>}></Route>
        <Route path="/placeorder" element={<Placeorder/>}></Route>
        <Route path="/product/:productId" element={<Product/>}></Route>
        <Route path="*" element={<Error/>}></Route>
       </Routes>
       <Footer/>
       </div>
  )
}

export default App