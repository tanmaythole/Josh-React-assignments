import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    
    return isLoggedIn?(
        <Outlet />
    ):(
        <Navigate to='/login' replace />
    )
}

export default PrivateRoutes;