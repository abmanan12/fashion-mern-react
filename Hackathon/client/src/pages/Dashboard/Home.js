import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import Dashboard from '../../components/Dashboard'
import Nav from '../../components/Nav'
import AddProduct from '../../components/AddProduct'
import DashboardProducts from '../../components/DashboardProducts'

function Home() {

  const [toggle, setToggle] = useState(true)
  const [selectedMenuItem, setSelectedMenuItem] = useState('Dashboard');


  const Toggle = () => { setToggle(!toggle) }

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (

    <div>

      <Nav Toggle={Toggle} />

      <div className='container-fluid bg-hero min-vh-100' style={{ paddingTop: '86px' }}>

        <div className='row '>

          {toggle && <div className='col-4 col-md-2 position-fixed bg-green' style={{ height: 'calc(100vh - 86px)' }}>
            <Sidebar onMenuItemClick={handleMenuItemClick} /></div>}

          {toggle && <div className='col-4 col-md-2'></div>}

          <div className='col'>

            <div className='d-flex align-items-center p-4'>
              <i className="navbar-brand fa-solid fa-outdent fs-4" style={{ cursor: 'pointer' }} onClick={Toggle}></i>
              <Link to='/' className='ms-4 text-green footer-link'>Home </Link> / Dashbaord
            </div>

            <div>
              {selectedMenuItem === 'Dashboard' && <Dashboard />}
              {selectedMenuItem === 'AddProduct' && <AddProduct />}
              {selectedMenuItem === 'GetProducts' && <DashboardProducts />}
            </div>

          </div>

        </div>

      </div>
    </div>

  )
}

export default Home