import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import Dashboard from '../../components/Dashboard'
import Nav from '../../components/Nav'
import AddProduct from '../../components/AddProduct'
import DashboardProducts from '../../components/DashboardProducts'
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';

function Home() {

  const [toggle, setToggle] = useState(true)
  const [selectedMenuItem, setSelectedMenuItem] = useState(localStorage.getItem('selectedMenuItem') || 'Dashboard');


  const Toggle = () => { setToggle(!toggle) }

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
    localStorage.setItem('selectedMenuItem', menuItem);
  };

  return (

    <div>

      <Nav Toggle={Toggle} />

      <div className='container-fluid bg-hero min-vh-100' style={{ paddingTop: '86px' }}>

        <div className='row '>

          {toggle && <div className='sidebar-width position-fixed bg-green' style={{ height: 'calc(100vh - 86px)' }}>
            <Sidebar onMenuItemClick={handleMenuItemClick} activeMenuItem={selectedMenuItem} /></div>}

          <div className={toggle ? 'pd-left' : ''}>

            <div className='d-flex align-items-center p-4'>
              {toggle ? <IoIosArrowDropleft style={{ cursor: 'pointer', fontSize: '24px' }} onClick={Toggle} />
                : <IoIosArrowDropright style={{ cursor: 'pointer', fontSize: '24px' }} onClick={Toggle} />}
              <Link to='/' className='ms-3 text-green footer-link'>Home </Link><span className='d-none d-sm-inline-block'> / Dashbaord</span>
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