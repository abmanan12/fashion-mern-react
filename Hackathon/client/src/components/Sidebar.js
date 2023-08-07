import React from 'react'

import { useDispatch } from 'react-redux'
import { logout } from '../actions/authAction'
import { useNavigate } from 'react-router-dom'

function Sidebar({ onMenuItemClick }) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogOut = async () => {
        await dispatch(logout())
        navigate('/')
    }

    return (

        <div className='sidebar p-2'>

            <div className='list-group list-group-flush mt-2'>

                <p className='list-group-item py-3 bg-green text-light mb-0' style={{ cursor: 'pointer' }}
                    onClick={() => onMenuItemClick('Dashboard')}>
                    <i className="fa-solid fa-chart-line fs-5 me-2"></i><span>Analysis</span>
                </p>

                <p className='list-group-item py-3 bg-green text-light mb-0' style={{ cursor: 'pointer' }}
                    onClick={() => onMenuItemClick('AddProduct')}>
                    <i className="fa-solid fa-list-check fs-5 me-2"></i><span>Add Items</span>
                </p>

                <p className='list-group-item py-3 bg-green text-light mb-0' style={{ cursor: 'pointer' }}
                    onClick={() => onMenuItemClick('GetProducts')}>
                    <i className="fa-solid fa-check-to-slot fs-5 me-2"></i><span>Products</span></p>

                <p className='list-group-item py-3 bg-green text-light mb-0' style={{ cursor: 'pointer' }}>
                    <i class="fa-solid fa-arrow-up-right-from-square fs-5 me-2"></i>
                    <span onClick={handleLogOut}>Logout</span>
                </p>
            </div>
        </div>

    )
}

export default Sidebar
