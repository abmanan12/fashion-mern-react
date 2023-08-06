import React from 'react'

import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Auth from '../Auth'
import Home from '../Frontend'
import Dashboard from '../Dashboard'
import SLoader from '../../components/SLoader'

export default function Index() {

    const { user } = useSelector(state => state.AuthReducer?.authData)
    const loading = useSelector(state => state.AuthReducer?.loading)

    if (loading) {
        return <SLoader />
    }

    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route path="/auth/*" element={!user ? <Auth /> : <Navigate to='/' replace />} />
                    <Route path="/dashboard" element={user?.admin ? <Dashboard /> : <Navigate to='/' replace />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}
