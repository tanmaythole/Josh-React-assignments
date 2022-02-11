import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import NavBar from './components/Navbar/NavBar';

const PrivateRoutes = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    
    return isLoggedIn?(
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    ):(
        <Navigate to='/login' replace />
    )
}

export default PrivateRoutes;