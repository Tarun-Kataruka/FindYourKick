import {useContext, useState} from 'react'
import logo from '../Assets/logo.png'
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
// import nav_dropdown from "../Assets/nav_dropdown.png";

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItem} = useContext(ShopContext);
    // const menuRef= useRef();
    // const dropDown=(e) =>{
    //     menuRef.current.classList.toggle('nav-menu-visible');
    //     e.target.classList.toggle('open');
    // }

  return (
    <div className='flex justify-around p-3 shadow-[0px_1px_3px_-2px_rgb(0,0,0)] w-full'>
        <div className="flex items-center gap-3 ">
            <img  src={logo} alt="" />
            <p className='text-violet-900 text-4xl font-semibold '>FindYourKick</p>
        </div>
        {/* <img onClick={dropDown} src={nav_dropdown} alt='' /> */}
        <ul className="flex items-center gap-12 list-none text-gray-700 text-xl font-normal">
            <li onClick={() => {setMenu("shop")}} className='flex flex-col items-center justify-center gap-1 cursor-pointer'><Link to='/'>Shop</Link>{menu=== "shop" ? <hr className="border-none w-4/5 h-1 rounded-lg bg-red-700"></hr> : <></>  } </li>
            <li onClick={() => {setMenu("bags")}} className='flex flex-col items-center justify-center gap-1 cursor-pointer'><Link to='/bags'>Bags</Link>{menu=== "bags" ? <hr className="border-none w-4/5 h-1 rounded-lg bg-red-700"></hr> : <></>  }</li>
            <li onClick={() => {setMenu("sneakers")}} className='flex flex-col items-center justify-center gap-1 cursor-pointer'><Link to ='/sneakers'>Sneakers</Link> {menu=== "sneakers" ? <hr className="border-none w-4/5 h-1 rounded-lg bg-red-700"></hr> : <></>  }</li>
            <li onClick={() => {setMenu("hoodies")}} className='flex flex-col items-center justify-center gap-1 cursor-pointer'><Link to ='/hoodies'>Hoodies</Link> {menu=== "hoodies" ? <hr className="border-none w-4/5 h-1 rounded-lg bg-red-700"></hr> : <></>  }</li>
        </ul>
        <div className="flex items-center gap-11">
            {localStorage.getItem('auth-token')
            ?<button className='h-14 w-40 outline-none border-solid border-2 rounded-3xl text-slate-600 text-xl font-medium bg-white cursor-pointer hover:bg-orange-500' onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            :<Link to='/login'>
            <button className='h-14 w-40 outline-none border-solid border-2 rounded-3xl text-slate-600 text-xl font-medium bg-white cursor-pointer hover:bg-orange-500'>Login</button></Link>}
            
            <Link to='/cart'><img src ={cart_icon} alt="" /></Link>
            <div className="w-5 h-5 rounded-md flex justify-center items-center -mt-8 -ml-14 text-base bg-red-700 text-white">{getTotalCartItem()}</div>
        </div>
    </div>
  )
}

export default Navbar