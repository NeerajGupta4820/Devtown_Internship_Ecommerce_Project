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
            <h4>Admin Pannel</h4>
            
            <NavLink to="/dashboard/admin/create-category" className="menuItem"><BiCategory/>Create-Category</NavLink>
            <NavLink to="/dashboard/admin/create-product" className="menuItem"><FaProductHunt/>Create-Product</NavLink>
            <NavLink to="/dashboard/admin/products" className="menuItem"><FaProductHunt/>Products</NavLink>
            <NavLink to="/dashboard/admin/orders" className="menuItem"><FaUsers/>Orders</NavLink>
            <NavLink to="/dashboard/admin/users" className="menuItem"><FaUsers/>Users</NavLink>
        </div>
    </>
  )
}

export default AdminMenu;
