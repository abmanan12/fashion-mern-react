import React from 'react'

import { useDispatch } from 'react-redux'
import { logout } from '../actions/authAction'
import { useNavigate } from 'react-router-dom'

function Sidebar({ onMenuItemClick, activeMenuItem }) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogOut = async () => {
        await dispatch(logout())
        navigate('/')
    }

    return (

        <div className='sidebar p-2'>

            <div className='list-group list-group-flush mt-2'>

                <div className={`list-group-item bg-green py-3 mb-0 ${activeMenuItem === 'Dashboard' ? 'text-dark fw-bold' : 'text-Footer-bg'}`}
                    style={{ cursor: 'pointer' }} onClick={() => onMenuItemClick('Dashboard')}>
                    <i className="fa-solid fa-chart-line fs-5 me-2"></i><span className='d-none d-lg-inline-block'>Analysis</span>
                </div>

                <div className={`list-group-item bg-green py-3 mb-0 ${activeMenuItem === 'AddProduct' ? 'text-dark fw-bold' : 'text-Footer-bg'}`}
                    style={{ cursor: 'pointer' }} onClick={() => onMenuItemClick('AddProduct')}>
                    <i className="fa-solid fa-list-check fs-5 me-2"></i><span className='d-none d-lg-inline-block'>Add Item</span>
                </div>

                <div className={`list-group-item bg-green py-3 mb-0 ${activeMenuItem === 'GetProducts' ? 'text-dark fw-bold' : 'text-Footer-bg'}`}
                    style={{ cursor: 'pointer' }} onClick={() => onMenuItemClick('GetProducts')}>
                    <i className="fa-solid fa-check-to-slot fs-5 me-2"></i><span className='d-none d-lg-inline-block'>Product</span></div>

                <div className='list-group-item bg-green text-light py-3 mb-0' style={{ cursor: 'pointer' }}>
                    <i className="fa-solid fa-arrow-up-right-from-square fs-5 me-2"></i>
                    <span className='d-none d-lg-inline-block' onClick={handleLogOut}>Logout</span>
                </div>

            </div>

        </div>

    )
}

export default Sidebar
