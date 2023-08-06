import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Register from './Register'
import Login from './Login'
import ForgotPassword from './FogotPassword'


export default function index() {
    return (
        <>

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
            </Routes>

        </>
    )
}
