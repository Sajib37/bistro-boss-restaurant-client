import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Footer from '../Shared/Footer/Footer';
import Topnav from '../Shared/Topnav/Topnav';



const Root = () => {
    const pathname= useLocation()
    useEffect(() => {
        window.scrollTo(0,0)
    }, [pathname])

    const location = useLocation()
    
    const noHeaderfooter = location.pathname.includes('signIn') || location.pathname.includes('signUp') ;
    return (
        <div>
  
        {noHeaderfooter || <Topnav></Topnav>}
        <Outlet></Outlet>
        {noHeaderfooter || <Footer></Footer>}
    </div>
    );
};

export default Root;