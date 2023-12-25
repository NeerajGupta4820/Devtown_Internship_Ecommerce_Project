import React, {  useState } from 'react'
import './Header.css'
import { NavLink,Link, useNavigate } from 'react-router-dom'
import { FaHome,FaCartPlus,FaRegistered } from "react-icons/fa";
import { BiCategory,BiLogIn } from "react-icons/bi";
import { MdContactMail,MdDashboard } from "react-icons/md";
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast';
import { useCategory } from '../../hooks/useCategory';
import { useCart } from '../../context/cart';
const Header =()=>{
  const  [auth,setAuth] = useAuth();
  const navigate = useNavigate()
  const [cart]=useCart()
  const categories=useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
    navigate("/login")
  };
  const [clicked,setclicked]=useState(false);
  return (
    <>
    <nav className='NavbarItems'>
    <Link to='/' className="navbar-brand" >🛒 Ecommerce App</Link>
    <div className='menu-icons' onClick={()=>setclicked(!clicked)}>
      <i className={clicked?"fas fa-times":"fas fa-bars"}></i>
    </div>

    <ul className={clicked?"nav-menu active":"nav-menu"} >
                <li className='nav-links'>
                  <NavLink to="/" className='nav-link'><FaHome/> Home</NavLink>
                </li>
                <li className="nav-item dropdown">
                <Link className="nav-links dropdown-toggle" to={"/categories"} data-bs-toggle="dropdown"><BiCategory/>Categories</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to={"/categories"} >All Categories</Link></li>
                  {categories?.map((c) => (
                  <li key={c.slug}><Link className="dropdown-item" to={`/category/${c.slug}`}>{c.name}</Link></li>
                  ))}
                </ul>
              </li>
                <li className="nav-links">
                  <NavLink to="/contact" className='nav-link'><MdContactMail/> contact</NavLink>
                </li>
                <li className="nav-links">
                  <NavLink to="/cart" className="nav-link "><FaCartPlus/> cart({cart?.length})</NavLink>
                </li>
                {!auth.user?(
                  <>
                  <li className="nav-links">
                  <NavLink to="/register" className='nav-link'><FaRegistered/> Register</NavLink>
                </li>
                <li className="nav-links">
                  <NavLink to="/login" className='nav-link'><BiLogIn/> Login</NavLink>
                </li>
                  </>
                ):(
                  <>
                  <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {auth?.user?.name} 
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink  to={`/dashboard/${ auth?.user?.role === 1 ? "admin" : "user"}`}
 className="dropdown-item" ><MdDashboard/>Dashboard</NavLink></li>
            <li><NavLink onClick={handleLogout} to="/login" className="dropdown-item">   <BiLogIn/> Logout</NavLink></li>                
          </ul>
        </li>
                  </>
                )}
                </ul>
    </nav>
    </>
  );
}

export default Header
