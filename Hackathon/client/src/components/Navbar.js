import React from 'react'

import { logout } from '../actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

import { ShoppingCart } from '@mui/icons-material';
import { useCartContext } from '../contexts/CartContext';

export default function Navbar() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { cart } = useCartContext()
    const { user } = useSelector(state => state.AuthReducer?.authData)

    let userProduct = cart?.filter(curElem => {
        return curElem?.userId === user?._id
    })

    const handleLogOut = async () => {
        await dispatch(logout())
        navigate('/')
    }

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light px-3 bg-Footer-bg">
                <div className="container">

                    <NavLink to='/' className="navbar-brand"><img src="/assets/images/logo.png"
                        alt="Logo" width="140" height="60" /></NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0 nav-home mx-md-auto">
                            <li className="nav-item mt-3 mt-md-0">
                                <NavLink to='/' className="nav-link" aria-current="page">Home</NavLink>
                            </li>

                            <li className="nav-item mt-3 mt-md-0">
                                <NavLink to='/product' className="nav-link" aria-current="page">Product</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/about' className="nav-link" aria-current="page">About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/contact' className="nav-link" aria-current="page">Contact</NavLink>
                            </li>

                            {
                                user?.admin &&
                                <li className="nav-item">
                                    <NavLink to='/dashboard' className="nav-link" aria-current="page">Dashboard</NavLink>
                                </li>
                            }

                            <li className="nav-item">
                                <NavLink to='/cart' className="nav-link">
                                    <span className="position-relative"><ShoppingCart style={{ fontSize: '1.4rem' }} />
                                        <span style={{ fontSize: '10px' }} className="position-absolute badge top-0  
                                         translate-middle text-info rounded-pill bg-light">{user ? userProduct?.length : 0}</span>
                                    </span>
                                </NavLink>
                            </li>

                        </ul>

                        <form className="d-flex justify-content-center mt-4 mt-md-0">
                            {!user ? <NavLink className='link text-H2' to='/auth/login'>LOGIN</NavLink>
                                : <NavLink className='link text-H2' onClick={handleLogOut}>LOGOUT</NavLink>}
                        </form>
                    </div>

                </div>
            </nav>

        </>
    )
}
