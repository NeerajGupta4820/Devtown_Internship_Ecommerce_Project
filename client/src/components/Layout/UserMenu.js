import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BiCategory,BiLogIn } from "react-icons/bi";
import { FaProductHunt,FaUsers } from "react-icons/fa";
import '../../components/Layout/AdminMenu.css'

const AdminMenu = () => {
  const [clicked,setclicked]=useState(false);
  return (
    <>
        <div className={clicked?"adminmenu active":"adminmenu"}>
            <h4>Dashboard</h4>
            
            <NavLink to="/dashboard/user/profile" className="menuItem">Profile</NavLink>
            <NavLink to="/dashboard/user/orders" className="menuItem">Orders</NavLink>    
        </div>
    </>
  )
}

export default AdminMenu;
