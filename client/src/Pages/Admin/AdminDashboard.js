import React from 'react'
import Layout from "../../components/Layout/Layout"
import './AdminDashboard.css'
import AdminMenu from "../../components/Layout/AdminMenu.js"
import { useAuth } from '../../context/auth'
const AdminDashboard = () => {
  const [auth]=useAuth()
  return (
    <Layout>
    <div className='admin'> 
    <div className='adminglass'>
      <div >
      <AdminMenu/>
      </div>
      <div>
        <div className='col-md-9'>
          <div className='adminmain'>
            <h4>Admin name: {auth?.user?.name}</h4>
            <h4>Admin Email: {auth?.user?.email}</h4>
            <h4>Admin Contact:{auth?.user?.phone}</h4>
          </div> 
        </div>
      </div>
    </div>
    </div>
    </Layout>
  );
};

export default AdminDashboard;
