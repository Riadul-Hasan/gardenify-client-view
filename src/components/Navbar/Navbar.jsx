import React, { use } from 'react';
import Logo from "../../assets/logo-transparent.png"
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = use(AuthContext)
    const navigate = useNavigate()
    console.log(user)

    const handleLogout = () => [
        logOut()
            .then(() => {
                alert("Logged Out")
                navigate("/login")
            })
            .catch(error => {
                console.log(error)
            })
    ]
    return (
        <div className="navbar bg-gradient-to-r bg-base-300 container mx-auto px-4 py-3 rounded-lg shadow-lg">
            {/* Mobile menu button (unchanged functionality) */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white hover:bg-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-green-600 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        <li><a className="hover:bg-green-500">Item 1</a></li>
                        <li>
                            <a className="hover:bg-green-500">Parent</a>
                            <ul className="p-2">
                                <li><a className="hover:bg-green-500">Submenu 1</a></li>
                                <li><a className="hover:bg-green-500">Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a className="hover:bg-green-500">Item 3</a></li>
                    </ul>
                </div>
                {/* Logo */}
                <NavLink to="/" className="flex items-center">
                    <img className='w-16 h-16 object-contain' src={Logo} alt="Gardenify Logo" />
                    <span className="ml-2 text-2xl font-bold  hidden sm:inline-block">Gardenify</span>
                </NavLink>
            </div>

            {/* Desktop menu */}
            <div className="navbar-center hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {
                        user && <p className='text-yellow-200 font-medium px-3 py-2 rounded-lg bg-green-600 bg-opacity-50'>{user.email}</p>
                    }
                    <NavLink to="/" className={({ isActive }) =>
                        `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-green-600' : 'hover:bg-green-600 hover:bg-opacity-30'}`}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/explore" className={({ isActive }) =>
                        `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-green-600' : 'hover:bg-green-600 hover:bg-opacity-30'}`}>
                        <li>Explore Gardeners</li>
                    </NavLink>
                    <NavLink to="/browseTips" className={({ isActive }) =>
                        `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-green-600' : 'hover:bg-green-600 hover:bg-opacity-30'}`}>
                        <li>Browse Tips</li>
                    </NavLink>
                    <NavLink to="/shareTips" className={({ isActive }) =>
                        `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-green-600' : 'hover:bg-green-600 hover:bg-opacity-30'}`}>
                        <li>Share a Tip</li>
                    </NavLink>
                    <NavLink to="/myTips" className={({ isActive }) =>
                        `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-green-600' : 'hover:bg-green-600 hover:bg-opacity-30'}`}>
                        <li>My Tips</li>
                    </NavLink>

                    {/* Auth buttons */}
                    <div className="flex items-center ml-2">
                        {
                            user ? null : (
                                <>
                                    <NavLink to="/login" className={({ isActive }) =>
                                        `px-4 py-2 rounded-lg font-medium transition-all ${isActive ? 'bg-white text-green-600' : 'hover:bg-green-600 hover:bg-opacity-30'}`}>
                                        <li>Login</li>
                                    </NavLink>
                                    <NavLink to="/register" className="ml-2 px-4 py-2 bg-white text-green-600 rounded-lg font-medium hover:bg-opacity-90 transition-all">
                                        <li>Register</li>
                                    </NavLink>
                                </>
                            )
                        }
                    </div>

                    {/* User dropdown */}
                    {
                        user && (
                            <li className="ml-2">
                                <details className="dropdown dropdown-end">
                                    <summary className="cursor-pointer flex items-center p-0 hover:bg-transparent">
                                        {
                                            user && (
                                                <div className="flex items-center space-x-2">
                                                    <img
                                                        src={user.photoURL}
                                                        alt="User Profile"
                                                        className="w-10 h-10 rounded-full border-2 border-white"
                                                    />
                                                    {/* <span className="text-white font-medium">{user.displayName || 'My Account'}</span> */}
                                                </div>
                                            )
                                        }
                                    </summary>
                                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-52 mt-2 text-green-700">
                                        <li>
                                            <button
                                                onClick={handleLogout}
                                                className="text-left hover:bg-green-100 rounded-lg p-2 font-medium"
                                            >
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        )
                    }
                </ul>
            </div>

            {/* CTA Button */}
            <div className="navbar-end">
                <a className="btn bg-yellow-400 hover:bg-yellow-300 text-green-800 border-0 font-bold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all">
                    Get Started
                </a>
            </div>
        </div>
    );
};

export default Navbar;