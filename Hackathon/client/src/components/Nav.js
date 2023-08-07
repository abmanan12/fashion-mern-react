import React from 'react'

import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


function Nav() {

    const { user } = useSelector(state => state.AuthReducer?.authData)

    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-green fixed-top">

            <div className='container-fluid'>

                <NavLink to='/' className="navbar-brand"><img src="/assets/images/logo.png"
                    alt="Logo" width="140" height="60" /></NavLink>

                <h4 className='text-light fw-bold ms-2 me-auto'>{user?.name}</h4>

            </div>

        </nav>

    )
}

export default Nav