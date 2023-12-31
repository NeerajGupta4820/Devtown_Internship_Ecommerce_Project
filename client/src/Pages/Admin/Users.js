import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'

const Users = () => {
  return (
    <Layout title={"Dashboard-All Users"}>
    <div className='admin'> 
    <div className='adminglass'>
      <div >
      <AdminMenu/>
      </div>
      <div>
        <div className='col-md-9'>
          <div className='adminmain'>
            <h4>Users</h4>
          </div> 
        </div>
      </div>
    </div>
    </div>
    </Layout>
  )
}

export default Users
