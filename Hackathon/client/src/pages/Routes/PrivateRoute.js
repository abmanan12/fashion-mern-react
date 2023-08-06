import React from 'react'

import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ Component }) {

    const { user } = useSelector(state => state.AuthReducer?.authData)

    if (!user) {
        return <Navigate to='/auth/login' replace />
    }

    return (
        <>
            <Component />
        </>
    )
}
