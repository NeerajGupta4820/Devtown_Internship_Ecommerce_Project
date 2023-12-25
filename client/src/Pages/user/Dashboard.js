import React from 'react'
import Layout from '../../components/Layout/Layout'
import { useAuth } from '../../context/auth'
import UserMenu from "../../components/Layout/UserMenu"

const Dashboard = () => {
  const [auth]=useAuth()
  return (
    <Layout title={'Dashboard - Ecommerce App'}>
    <div className='container-flui p-3 mt-5'>
      <div className='user' id='userprofile'>
        <div className='col-md-3'>
            <UserMenu/>
        </div>
        <div className='col-md-9'>
          <div className='w-75 p-3'>
            <h3>User Name: {auth?.user?.name}</h3>
            <h3>User Email: {auth?.user?.email}</h3>
            <h3>User Address: {auth?.user?.address}</h3>
          </div>
        </div>
      </div>  
    </div>
    </Layout>
  ) 
}

export default Dashboard;