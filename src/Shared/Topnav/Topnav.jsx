
import React from 'react';
import logo from '/logo.png'
import { NavLink } from 'react-router-dom';
const Topnav = () => {


    const navList = <>
        <li>
            <NavLink to="/" className={({ isActive, isPending }) =>isPending ? "text-red-600" : isActive ? "underline underline-offset-4 text-red-800 font-bold" : "text-white"}>
                Home
            </NavLink>
        </li>
        
        <li>
            <NavLink to="/menu" className={({ isActive, isPending }) =>isPending ? "text-red-800" : isActive ? "underline underline-offset-4 text-red-800 font-bold" : "text-white"}>
                Our Menu
            </NavLink>
        </li>

        <li>
            <NavLink to="/shop" className={({ isActive, isPending }) =>isPending ? "text-red-800" : isActive ? "underline underline-offset-4 text-red-800 font-bold" : "text-white"}>
                Our Shop
            </NavLink>
        </li>

        <li>
            <NavLink to="/contact" className={({ isActive, isPending }) =>isPending ? "text-red-800" : isActive ? "underline underline-offset-4 text-red-800 font-bold" : "text-white"}>
                Conatact Us
            </NavLink>
        </li>
        
        

        <li>
            <NavLink to="/shop" className={({ isActive, isPending }) =>isPending ? "text-red-800" : isActive ? "underline underline-offset-4 text-red-800 font-bold" : "text-white"}>
                Order Now
            </NavLink>
        </li>       
    </>

    return (
        <div className='fixed top-0 z-40 w-full bg-black bg-opacity-80'>
            <div className="navbar text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm bg-black dropdown-content  z-[1] p-2 shadow w-40  rounded-box">
                        {navList}
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img className='w-12 hidden lg:block' src={logo} alt="logo" /></a>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu py-2 menu-horizontal text-xl  px-1">
                        {navList}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Topnav;