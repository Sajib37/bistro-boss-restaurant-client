import React from "react";
import logo from "/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
const Topnav = () => {
    const navigate = useNavigate();

    const { user,logOut } = useAuth();
    console.log(user?.photoURL);

    const handleLogOut = () => {
        logOut()
            .then(result => {
                toast.success('Log Out Successfull')
                navigate('/')
                
            })
            .catch(error => {
            toast.error('Log Out Failed !!')
        })
    }
    
    const navList = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "text-red-600"
                            : isActive
                            ? "underline underline-offset-4 text-red-800 font-bold"
                            : "text-white"
                    }
                >
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/menu"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "text-red-800"
                            : isActive
                            ? "underline underline-offset-4 text-red-800 font-bold"
                            : "text-white"
                    }
                >
                    Our Menu
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/shop"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "text-red-800"
                            : isActive
                            ? "underline underline-offset-4 text-red-800 font-bold"
                            : "text-white"
                    }
                >
                    Order Now
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "text-red-800"
                            : isActive
                            ? "underline underline-offset-4 text-red-800 font-bold"
                            : "text-white"
                    }
                >
                    Conatact Us
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="fixed top-0 z-40 w-full  lg:px-6 bg-black bg-opacity-80">
            <Toaster></Toaster>
            <div className="navbar text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm bg-black dropdown-content  z-[1] p-2 shadow w-40  rounded-box"
                        >
                            {navList}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <img
                            className="w-10 hidden lg:block"
                            src={logo}
                            alt="logo"
                        />
                    </a>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu  menu-horizontal text-lg  px-1">
                        {navList}
                    </ul>
                </div>
                <div className="navbar-end ">
                    {user ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="mb-1">
                                <img className="w-8 h-8 md:w-10 md:h-10 rounded-full" src={user?.photoURL} alt="" />
                            </div>
                            <ul
                                tabIndex={0}
                                className="dropdown-content min-w-48 bg-black z-[1] menu p-2 shadow rounded-box"
                            >
                                <li>
                                    <a className="text-white font-bold ">{ user?.displayName}</a>
                                </li>
                                <li onClick={handleLogOut}>
                                    <button className="text-white font-bold  p-2 bg-red-700 ">Log Out</button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <a
                            onClick={() => navigate("/signIn")}
                            className="px-4 py-2 cursor-pointer bg-white text-black font-bold rounded-xl"
                        >
                            Login
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Topnav;
